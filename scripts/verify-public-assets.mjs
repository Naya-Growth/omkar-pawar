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

const indexHtml = fs.readFileSync(path.join(projectRoot, "index.html"), "utf8");
if (!indexHtml.includes("Omkar Pawar | Freedom Innerwellbeing")) {
  throw new Error("index.html title has drifted");
}

console.log("omkar pawar public asset checks passed");
