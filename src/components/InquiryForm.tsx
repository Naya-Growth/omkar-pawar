import { ChangeEvent, FormEvent, useMemo, useState } from "react";

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
  serviceInterest: "discovery-call",
  message: "",
  consent: false,
};

const serviceOptions = [
  { value: "discovery-call", label: "Discovery Call" },
  { value: "anxiety-reset", label: "1:1 Emotional Healing & Anxiety Reset Program" },
  { value: "inner-child-healing", label: "Inner Child Healing Sessions" },
  { value: "28-day-anxiety-transformation", label: "28 Days Anxiety Transformation" },
  { value: "general-guidance", label: "General Guidance" },
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <label className="space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B]">
            First Name
          </span>
          <input
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            minLength={2}
            value={values.firstName}
            onChange={handleChange}
            className="w-full bg-[#FAF9F6] border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-[#8C7A6B] outline-none transition-shadow"
            placeholder="Omkar"
          />
        </label>

        <label className="space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B]">
            Last Name
          </span>
          <input
            name="lastName"
            type="text"
            autoComplete="family-name"
            value={values.lastName}
            onChange={handleChange}
            className="w-full bg-[#FAF9F6] border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-[#8C7A6B] outline-none transition-shadow"
            placeholder="Pawar"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <label className="space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B]">
            Email Address
          </span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={handleChange}
            className="w-full bg-[#FAF9F6] border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-[#8C7A6B] outline-none transition-shadow"
            placeholder="you@example.com"
          />
        </label>

        <label className="space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B]">
            Phone / WhatsApp
          </span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            value={values.phone}
            onChange={handleChange}
            className="w-full bg-[#FAF9F6] border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-[#8C7A6B] outline-none transition-shadow"
            placeholder={siteConfig.whatsappDisplay}
          />
        </label>
      </div>

      <label className="space-y-3 mt-8 block">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B]">
          What are you looking for?
        </span>
        <select
          name="serviceInterest"
          value={values.serviceInterest}
          onChange={handleChange}
          className="w-full bg-[#FAF9F6] border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-[#8C7A6B] outline-none transition-shadow"
        >
          {serviceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <label className="space-y-3 mt-8 block">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B]">
          How can Omkar help?
        </span>
        <textarea
          name="message"
          rows={6}
          value={values.message}
          onChange={handleChange}
          className="w-full bg-[#FAF9F6] border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-[#8C7A6B] outline-none resize-none transition-shadow"
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
          I agree to be contacted by Omkar Pawar or the Freedom Innerwellbeing team about this enquiry.
        </span>
      </label>

      <input type="text" name="website_url_extra" className="hidden" tabIndex={-1} autoComplete="off" />

      {status.message ? (
        <p
          role="status"
          aria-live="polite"
          className={`mt-6 rounded-[1.5rem] px-5 py-4 text-sm leading-7 ${
            status.tone === "success"
              ? "border border-emerald-400/30 bg-emerald-500/8 text-emerald-700"
              : "border border-rose-400/30 bg-rose-500/8 text-rose-700"
          }`}
        >
          {status.message}
        </p>
      ) : null}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto bg-[#2A2A2A] text-white px-8 py-5 rounded-full text-sm font-bold tracking-wide hover:bg-[#8C7A6B] transition-colors disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </button>

        <a
          href={buildWhatsAppUrl("Hi Omkar, I would like to know more about working with you.")}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto border border-[#2A2A2A]/10 px-8 py-5 rounded-full text-sm font-bold tracking-wide text-[#2A2A2A] hover:border-[#8C7A6B] hover:text-[#8C7A6B] transition-colors text-center"
        >
          Message on WhatsApp
        </a>
      </div>
    </form>
  );
}
