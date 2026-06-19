import assert from "node:assert/strict";
import test from "node:test";

import { buildRouteStructuredData, getCanonicalUrl, getRouteSeo, structuredData } from "./route-seo";

test("getRouteSeo returns the home entry for unknown routes", () => {
  const seo = getRouteSeo("/made-up");

  assert.match(seo.title, /Omkar Pawar/);
  assert.equal(seo.path, "/");
});

test("canonical URLs resolve to the public domain", () => {
  assert.equal(getCanonicalUrl("/contact"), "https://omkarpawar.com/contact");
});

test("structured data includes person and service nodes", () => {
  const graph = structuredData["@graph"];

  assert.equal(Array.isArray(graph), true);
  assert.ok(graph.some((entry) => entry["@type"] === "Person"));
  assert.ok(
    graph.some(
      (entry) => Array.isArray(entry["@type"]) && entry["@type"].includes("ProfessionalService"),
    ),
  );
  assert.ok(graph.some((entry) => entry["@type"] === "BreadcrumbList"));
});

test("route structured data includes FAQ and page-specific web page nodes", () => {
  const graph = buildRouteStructuredData("/faq")["@graph"];

  assert.ok(graph.some((entry) => entry["@type"] === "FAQPage"));
  assert.ok(
    graph.some(
      (entry) =>
        Array.isArray(entry["@type"]) &&
        entry["@type"].includes("WebPage") &&
        entry["@type"].includes("FAQPage"),
    ),
  );
});

test("person graph includes GEO-friendly topic signals and sameAs profiles", () => {
  const graph = structuredData["@graph"];
  const person = graph.find((entry) => entry["@type"] === "Person");

  assert.ok(person);
  const knowsAbout = person.knowsAbout;
  const sameAs = person.sameAs;

  assert.ok(Array.isArray(knowsAbout));
  assert.ok(knowsAbout.includes("Inner Child Healing"));
  assert.ok(Array.isArray(sameAs));
  assert.ok(sameAs.includes("https://www.youtube.com/@omkarpawar1407"));
});
