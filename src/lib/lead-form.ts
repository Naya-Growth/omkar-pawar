export type InquiryFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message: string;
  consent: boolean;
};

type BuildLeadPayloadInput = {
  values: InquiryFormValues;
  sourceHost: string;
  sourcePage: string;
  sourceCta: string;
  utm: {
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
  };
};

export type InquiryLeadPayload = {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  companyType: "other";
  websiteUrl: string;
  serviceInterest: string[];
  budgetRange: string;
  timeline: string;
  problemSummary: string;
  consent: true;
  sourcePage: string;
  sourceCta: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
};

const serviceLabels: Record<string, string> = {
  ...supportPathLabels,
  "discovery-call": "Clarity Session",
  "anxiety-reset": "1:1 Emotional Healing & Anxiety Reset Program",
  "inner-child-healing": "Inner Child Healing Sessions",
  "28-day-anxiety-transformation": "28 Days Anxiety Transformation",
  "general-guidance": "General Guidance",
};

function trimOrFallback(value: string, fallback: string) {
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : fallback;
}

export function buildInquiryLeadPayload(input: BuildLeadPayloadInput): InquiryLeadPayload {
  const fullName = trimOrFallback(
    `${input.values.firstName} ${input.values.lastName}`,
    input.values.firstName,
  );
  const interestLabel =
    serviceLabels[input.values.serviceInterest] ?? "General Coaching Guidance";
  const cleanedMessage = trimOrFallback(
    input.values.message,
    "The visitor wants to understand the right next step and requested a callback.",
  );

  return {
    fullName,
    email: input.values.email.trim(),
    phone: input.values.phone.trim(),
    companyName: "Omkar Pawar Clarity Session Enquiry",
    companyType: "other",
    websiteUrl: "",
    serviceInterest: [input.values.serviceInterest || "general-guidance"],
    budgetRange: "To be discussed privately",
    timeline: "Flexible",
    problemSummary: trimOrFallback(
      `Interest: ${interestLabel}. Message: ${cleanedMessage}. Submitted from ${input.sourceHost}.`,
      `Interest: ${interestLabel}. Submitted from ${input.sourceHost}.`,
    ),
    consent: true,
    sourcePage: input.sourcePage,
    sourceCta: input.sourceCta,
    utmSource: input.utm.utmSource,
    utmMedium: input.utm.utmMedium,
    utmCampaign: input.utm.utmCampaign,
  };
}

export function getLeadSourceHost() {
  if (typeof window === "undefined") {
    return "omkarpawar.com";
  }

  const currentHost = window.location.hostname.trim();
  if (currentHost && currentHost !== "localhost" && currentHost !== "127.0.0.1") {
    return currentHost;
  }

  return "omkarpawar.com";
}
import { supportPathLabels } from "./omkar-content";
