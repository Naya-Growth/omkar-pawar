import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { buildRouteStructuredData, getCanonicalUrl, getRouteSeo } from "../lib/route-seo";
import { absoluteSiteUrl, siteConfig } from "../lib/site-config";

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let node = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!node) {
    node = document.createElement("meta");
    document.head.appendChild(node);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    node?.setAttribute(key, value);
  });
}

function upsertLink(rel: string, href: string) {
  let node = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!node) {
    node = document.createElement("link");
    node.rel = rel;
    document.head.appendChild(node);
  }

  node.href = href;
}

function upsertStructuredData(pathname: string) {
  let node = document.head.querySelector("#omkar-structured-data") as HTMLScriptElement | null;
  if (!node) {
    node = document.createElement("script");
    node.type = "application/ld+json";
    node.id = "omkar-structured-data";
    document.head.appendChild(node);
  }

  node.textContent = JSON.stringify(buildRouteStructuredData(pathname));
}

export default function SeoController() {
  const location = useLocation();

  useEffect(() => {
    const seo = getRouteSeo(location.pathname);
    const canonical = getCanonicalUrl(location.pathname);

    document.title = seo.title;

    upsertMeta('meta[name="description"]', { name: "description", content: seo.description });
    upsertMeta('meta[name="keywords"]', { name: "keywords", content: seo.keywords });
    upsertMeta('meta[name="author"]', { name: "author", content: siteConfig.projectName });
    upsertMeta('meta[name="application-name"]', {
      name: "application-name",
      content: `${siteConfig.projectName} | ${siteConfig.practiceName}`,
    });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: seo.title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: seo.description });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonical });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: siteConfig.projectName });
    upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: "en_IN" });
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: absoluteSiteUrl(siteConfig.image.shareCard),
    });
    upsertMeta('meta[property="og:image:alt"]', {
      property: "og:image:alt",
      content: `${siteConfig.projectName} — ${siteConfig.roleLabel}`,
    });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: seo.title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: seo.description });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: absoluteSiteUrl(siteConfig.image.shareCard),
    });
    upsertMeta('meta[name="twitter:image:alt"]', {
      name: "twitter:image:alt",
      content: `${siteConfig.projectName} | ${siteConfig.roleLabel}`,
    });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
    });
    upsertLink("canonical", canonical);
    upsertLink("sitemap", absoluteSiteUrl("/sitemap.xml"));
    upsertStructuredData(location.pathname);
  }, [location.pathname]);

  return null;
}
