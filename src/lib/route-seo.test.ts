import assert from "node:assert/strict";
import test from "node:test";

import { getCanonicalUrl, getRouteSeo, structuredData } from "./route-seo";

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
  assert.ok(graph.some((entry) => entry["@type"] === "ProfessionalService"));
});
