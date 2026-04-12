import assert from "node:assert/strict";
import test from "node:test";

import { buildInquiryLeadPayload } from "./lead-form";

test("buildInquiryLeadPayload maps the enquiry into the Naya lead contract", () => {
  const payload = buildInquiryLeadPayload({
    values: {
      firstName: "Omkar",
      lastName: "Pawar",
      email: "omkar@example.com",
      phone: "+91 70204 55546",
      serviceInterest: "inner-child-healing",
      message: "I want to understand if this is the right format for me.",
      consent: true,
    },
    sourceHost: "omkarpawar.com",
    sourcePage: "https://omkarpawar.com/contact?utm_source=instagram",
    sourceCta: "contact-form",
    utm: {
      utmSource: "instagram",
      utmMedium: "social",
      utmCampaign: "spring-launch",
    },
  });

  assert.equal(payload.fullName, "Omkar Pawar");
  assert.deepEqual(payload.serviceInterest, ["inner-child-healing"]);
  assert.equal(payload.budgetRange, "To be discussed privately");
  assert.equal(payload.timeline, "Flexible");
  assert.match(payload.problemSummary, /Inner Child Healing Sessions/);
  assert.equal(payload.utmCampaign, "spring-launch");
});
