import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { routeSeo, getRouteSeo, getCanonicalUrl, buildRouteStructuredData } from "../src/lib/route-seo.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, "../dist");
const indexPath = path.join(distPath, "index.html");

if (!fs.existsSync(indexPath)) {
  console.error("Build output not found. Please run vite build first.");
  process.exit(1);
}

const template = fs.readFileSync(indexPath, "utf8");

// We want to generate HTML files for each of these routes (excluding "/")
const routesToGenerate = Object.keys(routeSeo).filter((route) => route !== "/");

for (const route of routesToGenerate) {
  const seo = getRouteSeo(route);
  const canonical = getCanonicalUrl(route);
  const structuredData = buildRouteStructuredData(route);

  // Replace title, meta and link tags in the template
  let html = template;

  // Replace <title>
  html = html.replace(/<title>[^]*?<\/title>/, `<title>${seo.title}</title>`);

  // Replace description
  html = html.replace(
    /<meta\s+name="description"\s+content="[^]*?"\s*\/?>/i,
    `<meta name="description" content="${seo.description}" />`
  );

  // Replace keywords if they exist in the HTML template
  if (html.match(/<meta\s+name="keywords"\s+content="[^]*?"\s*\/?>/i)) {
    html = html.replace(
      /<meta\s+name="keywords"\s+content="[^]*?"\s*\/?>/i,
      `<meta name="keywords" content="${seo.keywords}" />`
    );
  }

  // Replace og:title
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^]*?"\s*\/?>/i,
    `<meta property="og:title" content="${seo.title}" />`
  );

  // Replace og:description
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^]*?"\s*\/?>/i,
    `<meta property="og:description" content="${seo.description}" />`
  );

  // Replace og:url
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^]*?"\s*\/?>/i,
    `<meta property="og:url" content="${canonical}" />`
  );

  // Replace twitter:title
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^]*?"\s*\/?>/i,
    `<meta name="twitter:title" content="${seo.title}" />`
  );

  // Replace twitter:description
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^]*?"\s*\/?>/i,
    `<meta name="twitter:description" content="${seo.description}" />`
  );

  // Replace canonical link
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^]*?"\s*\/?>/i,
    `<link rel="canonical" href="${canonical}" />`
  );

  // Replace structured data script
  html = html.replace(
    /<script\s+type="application\/ld\+json">[^]*?<\/script>/i,
    `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`
  );

  // Create folder and write index.html
  // e.g. for /about -> dist/about/index.html
  // for /privacy-policy -> dist/privacy-policy/index.html
  const routeFolder = path.join(distPath, route.slice(1));
  fs.mkdirSync(routeFolder, { recursive: true });
  fs.writeFileSync(path.join(routeFolder, "index.html"), html, "utf8");
  console.log(`Generated HTML for route: ${route}`);
}

// Generate a custom 404 page in dist/404.html using the template but with a 404/not found theme and meta
let html404 = template;
html404 = html404.replace(/<title>[^]*?<\/title>/, `<title>Page Not Found | Omkar Pawar</title>`);
html404 = html404.replace(
  /<div\s+id="root">\s*<\/div>/,
  `<div id="root">
    <div style="font-family: sans-serif; text-align: center; padding: 100px 20px; color: #1A1A1A; background-color: #FAF6F0; min-height: 100vh; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; justify-content: center;">
      <h1 style="font-size: 72px; margin: 0; color: #3D2B1F; font-weight: bold;">404</h1>
      <h2 style="font-size: 24px; margin: 20px 0 10px; color: #1A1A1A;">Page Not Found</h2>
      <p style="color: #666; max-width: 400px; line-height: 1.6; margin-bottom: 30px;">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <a href="/" style="display: inline-block; background-color: #3D2B1F; color: #FFF; padding: 12px 28px; text-decoration: none; border-radius: 9999px; font-weight: bold; font-size: 14px; letter-spacing: 0.08em; text-transform: uppercase;">Go to Homepage</a>
    </div>
  </div>`
);
fs.writeFileSync(path.join(distPath, "404.html"), html404, "utf8");
console.log("Generated 404.html");
