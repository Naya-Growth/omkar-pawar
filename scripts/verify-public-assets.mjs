import fs from "node:fs";
import path from "node:path";

const projectRoot = path.join(import.meta.dirname, "..");

function assertFile(relativePath) {
  const absolutePath = path.join(projectRoot, relativePath);
  if (!fs.existsSync(absolutePath)) {
    throw new Error(`${relativePath} is missing`);
  }
}

assertFile("index.html");
assertFile("src/App.tsx");
assertFile("src/pages/Contact.tsx");
assertFile("src/components/InquiryForm.tsx");
assertFile("public/favicon.svg");
assertFile("public/site.webmanifest");
assertFile("public/robots.txt");
assertFile("public/sitemap.xml");
assertFile("public/llms.txt");
assertFile("public/media/hero-portrait.webp");
assertFile("public/media/og-cover.jpg");

const indexHtml = fs.readFileSync(path.join(projectRoot, "index.html"), "utf8");
if (!indexHtml.includes("Omkar Pawar | Freedom Innerwellbeing")) {
  throw new Error("index.html title has drifted");
}

if (!indexHtml.includes("og:image")) {
  throw new Error("index.html is missing the open graph image metadata");
}

console.log("omkar pawar public asset checks passed");
