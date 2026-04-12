import {
  ChangeEvent,
  createContext,
  FormEvent,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, X } from "lucide-react";

import {
  buildInquiryLeadPayload,
  getLeadSourceHost,
  type InquiryFormValues,
} from "../lib/lead-form";
import { buildWhatsAppUrl, siteConfig } from "../lib/site-config";

type LeadWizardContextValue = {
  openLeadWizard: () => void;
  closeLeadWizard: () => void;
};

const LeadWizardContext = createContext<LeadWizardContextValue | null>(null);

const challengeOptions = [
  "Anxiety & overthinking",
  "Emotional overwhelm",
  "Inner child healing",
  "Relationship patterns",
  "Confidence & self-worth",
  "I need help figuring it out",
];

const supportOptions = [
  { value: "discovery-call", label: "Discovery Call" },
  { value: "anxiety-reset", label: "1:1 Anxiety Reset" },
  { value: "inner-child-healing", label: "Inner Child Healing" },
  { value: "28-day-anxiety-transformation", label: "28 Days Anxiety Transformation" },
  { value: "general-guidance", label: "General Guidance" },
];

type WizardValues = {
  challenge: string;
  support: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  consent: boolean;
};

const initialValues: WizardValues = {
  challenge: "",
  support: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  consent: false,
};

type SubmissionStatus = {
  tone: "idle" | "success" | "error";
  message: string;
};

function LeadWizardModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmissionStatus>({ tone: "idle", message: "" });
  const formId = "omkar-guided-enquiry-form";

  const utmValues = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return {
      utmSource: params.get("utm_source") ?? undefined,
      utmMedium: params.get("utm_medium") ?? undefined,
      utmCampaign: params.get("utm_campaign") ?? undefined,
    };
  }, []);

  const resetAndClose = () => {
    onClose();
    window.setTimeout(() => {
      setStep(0);
      setValues(initialValues);
      setStatus({ tone: "idle", message: "" });
      setIsSubmitting(false);
    }, 250);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    const nextValue = target.type === "checkbox" ? target.checked : target.value;
    setValues((current) => ({ ...current, [target.name]: nextValue }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!values.consent) {
      setStatus({
        tone: "error",
        message: "Please confirm consent so Omkar can respond personally.",
      });
      return;
    }

    const formValues: InquiryFormValues = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
      serviceInterest: values.support,
      message: `Primary challenge: ${values.challenge || "Not specified yet"}. Support requested: ${
        supportOptions.find((option) => option.value === values.support)?.label ?? values.support
      }.`,
      consent: values.consent,
    };

    const payload = buildInquiryLeadPayload({
      values: formValues,
      sourceHost: getLeadSourceHost(),
      sourcePage: window.location.href,
      sourceCta: "guided-wizard",
      utm: utmValues,
    });

    setIsSubmitting(true);
    setStatus({ tone: "idle", message: "" });

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
        throw new Error(
          responseBody && typeof responseBody.error === "string"
            ? responseBody.error
            : "Something went wrong. Please try again or message on WhatsApp.",
        );
      }

      setStatus({
        tone: "success",
        message: "You're in. Omkar's team will reach out shortly with the right next step.",
      });

      window.setTimeout(() => {
        resetAndClose();
      }, 1200);
    } catch (error) {
      setStatus({
        tone: "error",
        message:
          error instanceof Error && error.message
            ? error.message
            : "Something went wrong. Please try again or message on WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
          onClick={resetAndClose}
        >
          <div className="absolute inset-0 bg-[#1E1A17]/65 backdrop-blur-xl" />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-[620px] overflow-hidden rounded-[2rem] border border-white/50 bg-[#FBFAF7] shadow-[0_32px_80px_rgba(37,28,16,0.22)]"
          >
            <button
              type="button"
              onClick={resetAndClose}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-white/80 text-[#2A2A2A] transition-colors hover:bg-white"
              aria-label="Close guided enquiry"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="border-b border-black/5 bg-[radial-gradient(circle_at_top_left,rgba(210,180,140,0.28),transparent_52%),linear-gradient(180deg,#fffdf9,rgba(255,255,255,0.85))] px-7 pb-6 pt-7 md:px-10">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8C7A6B]/12 text-[#8C7A6B]">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8C7A6B]">
                    Guided enquiry
                  </p>
                  <h3 className="font-serif text-2xl text-[#2A2A2A]">Let's find the right first step</h3>
                </div>
              </div>

              <div className="flex gap-2">
                {[0, 1, 2].map((index) => (
                  <div key={index} className="h-1.5 flex-1 overflow-hidden rounded-full bg-black/5">
                    <motion.div
                      className="h-full rounded-full bg-[#8C7A6B]"
                      initial={false}
                      animate={{ width: step > index ? "100%" : step === index ? "52%" : "0%" }}
                      transition={{ duration: 0.28 }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="px-7 py-8 md:px-10 md:py-10">
              {step === 0 ? (
                <div>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.26em] text-[#8C7A6B]">
                    Step 1
                  </p>
                  <h4 className="font-serif text-3xl text-[#2A2A2A]">What feels most present right now?</h4>
                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    Choose the challenge that best matches what you want support with.
                  </p>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {challengeOptions.map((challenge) => {
                      const selected = values.challenge === challenge;
                      return (
                        <button
                          key={challenge}
                          type="button"
                          onClick={() => setValues((current) => ({ ...current, challenge }))}
                          className={`rounded-[1.6rem] border px-5 py-4 text-left transition-all ${
                            selected
                              ? "border-[#8C7A6B]/40 bg-[#8C7A6B]/10 text-[#2A2A2A] shadow-sm"
                              : "border-black/5 bg-white text-gray-600 hover:border-[#8C7A6B]/20 hover:bg-[#fbf6ee]"
                          }`}
                        >
                          <span className="text-sm font-semibold leading-6">{challenge}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : null}

              {step === 1 ? (
                <div>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.26em] text-[#8C7A6B]">
                    Step 2
                  </p>
                  <h4 className="font-serif text-3xl text-[#2A2A2A]">What kind of support are you seeking?</h4>
                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    This helps Omkar reply with the right format instead of a generic follow-up.
                  </p>
                  <div className="mt-8 space-y-3">
                    {supportOptions.map((option) => {
                      const selected = values.support === option.value;
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setValues((current) => ({ ...current, support: option.value }))}
                          className={`flex w-full items-center justify-between rounded-[1.6rem] border px-5 py-4 text-left transition-all ${
                            selected
                              ? "border-[#8C7A6B]/40 bg-[#8C7A6B]/10 text-[#2A2A2A] shadow-sm"
                              : "border-black/5 bg-white text-gray-600 hover:border-[#8C7A6B]/20 hover:bg-[#fbf6ee]"
                          }`}
                        >
                          <span className="text-sm font-semibold">{option.label}</span>
                          {selected ? <CheckCircle2 className="h-5 w-5 text-[#8C7A6B]" /> : null}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : null}

              {step === 2 ? (
                <form id={formId} onSubmit={handleSubmit} noValidate>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.26em] text-[#8C7A6B]">
                    Step 3
                  </p>
                  <h4 className="font-serif text-3xl text-[#2A2A2A]">Where should Omkar reach you?</h4>
                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    We'll only use these details to respond to this enquiry.
                  </p>

                  <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <input
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      required
                      placeholder="First name"
                      className="rounded-[1.4rem] border border-black/5 bg-[#FAF9F6] px-5 py-4 text-sm outline-none transition-shadow focus:ring-2 focus:ring-[#8C7A6B]"
                    />
                    <input
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                      className="rounded-[1.4rem] border border-black/5 bg-[#FAF9F6] px-5 py-4 text-sm outline-none transition-shadow focus:ring-2 focus:ring-[#8C7A6B]"
                    />
                    <input
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      required
                      placeholder="Email address"
                      className="rounded-[1.4rem] border border-black/5 bg-[#FAF9F6] px-5 py-4 text-sm outline-none transition-shadow focus:ring-2 focus:ring-[#8C7A6B]"
                    />
                    <input
                      name="phone"
                      type="tel"
                      value={values.phone}
                      onChange={handleChange}
                      required
                      placeholder={siteConfig.whatsappDisplay}
                      className="rounded-[1.4rem] border border-black/5 bg-[#FAF9F6] px-5 py-4 text-sm outline-none transition-shadow focus:ring-2 focus:ring-[#8C7A6B]"
                    />
                  </div>

                  <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-gray-600">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={values.consent}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 rounded border border-black/10 accent-[#8C7A6B]"
                    />
                    <span>I agree to be contacted by Omkar Pawar about this enquiry.</span>
                  </label>

                  {status.message ? (
                    <p
                      role="status"
                      aria-live="polite"
                      className={`mt-5 rounded-[1.4rem] px-4 py-3 text-sm ${
                        status.tone === "success"
                          ? "border border-emerald-300 bg-emerald-50 text-emerald-700"
                          : "border border-rose-300 bg-rose-50 text-rose-700"
                      }`}
                    >
                      {status.message}
                    </p>
                  ) : null}
                </form>
              ) : null}

              <div className="mt-8 flex flex-col gap-3 border-t border-black/5 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  {step > 0 ? (
                    <button
                      type="button"
                      onClick={() => setStep((current) => current - 1)}
                      className="inline-flex items-center gap-2 rounded-full border border-black/5 px-4 py-3 text-sm font-semibold text-[#2A2A2A] transition-colors hover:bg-[#F6F1E8]"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </button>
                  ) : null}
                  <a
                    href={buildWhatsAppUrl("Hi Omkar, I would like to connect with you on WhatsApp.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-black/5 px-4 py-3 text-sm font-semibold text-[#2A2A2A] transition-colors hover:bg-[#F6F1E8]"
                  >
                    WhatsApp instead
                  </a>
                </div>

                {step < 2 ? (
                  <button
                    type="button"
                    onClick={() => setStep((current) => current + 1)}
                    disabled={(step === 0 && !values.challenge) || (step === 1 && !values.support)}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2A2A2A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#8C7A6B] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Continue
                    <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    form={formId}
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2A2A2A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#8C7A6B] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Submit enquiry"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function LeadWizardProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <LeadWizardContext.Provider
      value={{
        openLeadWizard: () => setIsOpen(true),
        closeLeadWizard: () => setIsOpen(false),
      }}
    >
      {children}
      <LeadWizardModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </LeadWizardContext.Provider>
  );
}

export function useLeadWizard() {
  const context = useContext(LeadWizardContext);

  if (!context) {
    throw new Error("useLeadWizard must be used within LeadWizardProvider");
  }

  return context;
}
