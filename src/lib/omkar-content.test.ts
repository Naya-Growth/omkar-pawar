import assert from "node:assert/strict";
import test from "node:test";

import {
  contactCopy,
  faqItems,
  heroStats,
  socialLinks,
  supportPathLabels,
  wizardContent,
} from "./omkar-content";
import { siteConfig } from "./site-config";

test("siteConfig reflects the client-approved public positioning", () => {
  assert.equal(siteConfig.roleLabel, "Psychologist & Inner Child Healer");
  assert.equal(siteConfig.phonePlaceholder, "+91 XXXXX XXXXX");
  assert.equal(siteConfig.socialProof.years, "7+ years");
  assert.equal(siteConfig.socialProof.clients, "15k+ Lives Impacted");
  assert.equal(siteConfig.socialProof.oneOnOneSessions, "2000+");
});

test("heroStats match the four requested proof cards", () => {
  assert.deepEqual(
    heroStats.map((stat) => [stat.label, stat.value]),
    [
      ["Experience", "7+ years"],
      ["Impact", "15k+ Lives Impacted"],
      ["Languages", "English · Hindi · Marathi"],
      ["1 On 1 Sessions", "2000+"],
    ],
  );
});

test("wizardContent matches the quick clarity check copy and options", () => {
  assert.equal(wizardContent.triggerLabel, "Quick Clarity Check");
  assert.equal(wizardContent.steps[0].heading, "What's Been Bothering You Lately?");
  assert.equal(
    wizardContent.steps[0].subtext,
    "Don't overthink. Just pick what feels closest to your current situation.",
  );
  assert.deepEqual(
    wizardContent.steps[0].options.map((option) => option.label),
    [
      "Overthinking & Anxiety",
      "Feeling Emotionally Overwhelmed",
      "Confidence & Self-Doubt",
      "Relationship Confusion",
      "I Feel Stuck, Not Sure What To Do",
      "Something Else (I'll Explain)",
    ],
  );

  assert.equal(wizardContent.steps[1].heading, "How Would You Like To Get Support?");
  assert.deepEqual(
    wizardContent.steps[1].options.map((option) => [option.label, option.description]),
    [
      ["Quick Clarity Call (15-20 Mins)", "Talk Once, Get Direction"],
      ["1:1 Emotional Healing & Support", "Deep Dive Into Your Situation"],
      [
        "Inner Child & Childhood Trauma Support",
        "If Old Experiences Are Still Affecting You",
      ],
      ["Structured Support Program", "Step-By-Step Transformation"],
      ["Not Sure Yet", "Help Me Decide"],
    ],
  );

  assert.equal(wizardContent.steps[2].heading, "Where Can I Reach You?");
  assert.equal(contactCopy.consentLabel, "I'm okay with being contacted regarding this");
  assert.equal(contactCopy.submitLabel, "Get My Response");
  assert.equal(contactCopy.trustLine, "No spam. Just a personal response.");
});

test("socialLinks include Instagram and YouTube destinations", () => {
  assert.deepEqual(
    socialLinks.map((link) => [link.label, link.href]),
    [
      ["Instagram", "https://instagram.com/lifecoachomkar"],
      ["LinkedIn", "https://www.linkedin.com/in/coach-omkarpawar/"],
      ["YouTube", "https://www.youtube.com/@omkarpawar1407"],
    ],
  );
});

test("supportPathLabels keep the lead payload aligned with the visible choices", () => {
  assert.equal(supportPathLabels["quick-clarity-call"], "Quick Clarity Call (15-20 Mins)");
  assert.equal(supportPathLabels["one-to-one-personal-session"], "1:1 Emotional Healing & Support");
  assert.equal(
    supportPathLabels["past-patterns-inner-healing"],
    "Inner Child & Childhood Trauma Support",
  );
  assert.equal(supportPathLabels["structured-28-day-program"], "Structured Support Program");
  assert.equal(supportPathLabels["not-sure-yet"], "Not Sure Yet");
});

test("faqItems keep structured data aligned with the FAQ page", () => {
  assert.equal(faqItems.length, 7);
  assert.deepEqual(
    faqItems.map((item) => item.question),
    [
      "What is a Clarity Call?",
      "How do childhood patterns or childhood trauma affect adult life?",
      "Are the sessions online or in-person?",
      "Is this therapy or coaching?",
      "Is my privacy protected?",
      "What is the pricing for sessions?",
      "What should I do in case of an urgent crisis?",
    ],
  );
});
