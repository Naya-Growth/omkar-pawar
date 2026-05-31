import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "./ui/button";
import { Input, Textarea } from "./ui/input";
import { contactCopy, supportPathLabels } from "../lib/omkar-content";
import { buildInquiryLeadPayload, getLeadSourceHost, type InquiryFormValues } from "../lib/lead-form";
import { buildWhatsAppUrl, siteConfig } from "../lib/site-config";

type InquiryFormProps = {
  className?: string;
  sourceCta?: string;
};

type SubmissionStatus = {
  tone: "idle" | "success" | "error";
  message: string;
};

const initialValues: InquiryFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  serviceInterest: "quick-clarity-call",
  message: "",
  consent: false,
};

const serviceOptions = [
  { value: "quick-clarity-call", label: supportPathLabels["quick-clarity-call"] },
  { value: "one-to-one-personal-session", label: supportPathLabels["one-to-one-personal-session"] },
  { value: "past-patterns-inner-healing", label: supportPathLabels["past-patterns-inner-healing"] },
  { value: "structured-28-day-program", label: supportPathLabels["structured-28-day-program"] },
  { value: "not-sure-yet", label: supportPathLabels["not-sure-yet"] },
];

export default function InquiryForm({
  className = "",
  sourceCta = "contact-form",
}: InquiryFormProps) {
  const [values, setValues] = useState(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmissionStatus>({ tone: "idle", message: "" });

  const utmValues = useMemo(() => {
    if (typeof window === "undefined") {
      return {};
    }

    const params = new URLSearchParams(window.location.search);
    return {
      utmSource: params.get("utm_source") ?? undefined,
      utmMedium: params.get("utm_medium") ?? undefined,
      utmCampaign: params.get("utm_campaign") ?? undefined,
    };
  }, []);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const target = event.currentTarget;
    const nextValue =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;

    setValues((current) => ({
      ...current,
      [target.name]: nextValue,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!values.consent) {
      setStatus({
        tone: "error",
        message: "Please confirm consent so Omkar can respond to your enquiry.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ tone: "idle", message: "" });

    const payload = buildInquiryLeadPayload({
      values,
      sourceHost: getLeadSourceHost(),
      sourcePage:
        typeof window === "undefined" ? "https://omkarpawar.com/contact" : window.location.href,
      sourceCta,
      utm: utmValues,
    });

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseBody = await response.json().catch(() => null);
      if (!response.ok) {
        const errorMessage =
          responseBody && typeof responseBody.error === "string"
            ? responseBody.error
            : "Lead capture is temporarily unavailable. Please message on WhatsApp right away.";
        throw new Error(errorMessage);
      }

      setValues(initialValues);
      setStatus({
        tone: "success",
        message:
          "Your enquiry is in. Omkar’s team will reach out shortly with the right next step.",
      });
    } catch (error) {
      const message =
        error instanceof Error && error.message
          ? error.message
          : "Lead capture is temporarily unavailable. Please message on WhatsApp right away.";

      setStatus({
        tone: "error",
        message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={className} onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <label className="space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#8B715E]">
            First Name
          </span>
          <Input
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            minLength={2}
            value={values.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
        </label>

        <label className="space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#8B715E]">
            Last Name
          </span>
          <Input
            name="lastName"
            type="text"
            autoComplete="family-name"
            value={values.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
        </label>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <label className="space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#8B715E]">
            Email Address
          </span>
          <Input
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={handleChange}
            placeholder="Email Address"
          />
        </label>

        <label className="space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#8B715E]">
            Phone / WhatsApp
          </span>
          <Input
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            value={values.phone}
            onChange={handleChange}
            placeholder={siteConfig.phonePlaceholder}
          />
        </label>
      </div>

      <label className="mt-5 block space-y-3">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#8B715E]">
          What are you looking for?
        </span>
        <select
          name="serviceInterest"
          value={values.serviceInterest}
          onChange={handleChange}
          className="h-14 w-full rounded-lg border border-[#262421]/8 bg-white px-5 text-sm text-[#262421] outline-none transition-shadow focus:ring-2 focus:ring-[#53665A]"
        >
          {serviceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-5 block space-y-3">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#8B715E]">
          How can Omkar help?
        </span>
        <Textarea
          name="message"
          rows={6}
          value={values.message}
          onChange={handleChange}
          placeholder="Tell us a little about what you are navigating right now."
        />
      </label>

      <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-gray-600">
        <input
          type="checkbox"
          name="consent"
          checked={values.consent}
          onChange={handleChange}
          className="mt-1 h-4 w-4 rounded border border-black/10 accent-[#8C7A6B]"
        />
        <span>
          {contactCopy.consentLabel}
        </span>
      </label>

      <p className="mt-3 text-xs font-semibold text-[#8B715E]">{contactCopy.trustLine}</p>

      <input type="text" name="website_url_extra" className="hidden" tabIndex={-1} autoComplete="off" />

      {status.message ? (
        <p
          role="status"
          aria-live="polite"
          className={`mt-6 rounded-lg px-5 py-4 text-sm leading-7 ${
            status.tone === "success"
              ? "border border-emerald-400/30 bg-emerald-500/8 text-emerald-700"
              : "border border-rose-400/30 bg-rose-500/8 text-rose-700"
          }`}
        >
          {status.message}
        </p>
      ) : null}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Button
          type="submit"
          disabled={isSubmitting}
          size="lg"
          className="w-full sm:w-auto"
        >
          {isSubmitting ? "Sending..." : contactCopy.submitLabel}
          <ArrowRight className="h-4 w-4" />
        </Button>

        <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
          <a
            href={buildWhatsAppUrl("Hi Omkar, I would like to know more about working with you.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-4 w-4" />
            Message On WhatsApp
          </a>
        </Button>
      </div>
    </form>
  );
}
