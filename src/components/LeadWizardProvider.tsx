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
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle, Sparkles, X } from "lucide-react";

import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Progress } from "./ui/progress";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import {
  buildInquiryLeadPayload,
  getLeadSourceHost,
  type InquiryFormValues,
} from "../lib/lead-form";
import { contactCopy, supportPathLabels, wizardContent } from "../lib/omkar-content";
import { buildWhatsAppUrl, siteConfig } from "../lib/site-config";
import { cn } from "../lib/utils";

type LeadWizardContextValue = {
  openLeadWizard: () => void;
  closeLeadWizard: () => void;
};

const LeadWizardContext = createContext<LeadWizardContextValue | null>(null);

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
  const formId = "omkar-quick-clarity-check-form";

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

  const resetAndClose = () => {
    onClose();
    window.setTimeout(() => {
      setStep(0);
      setValues(initialValues);
      setStatus({ tone: "idle", message: "" });
      setIsSubmitting(false);
    }, 200);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    const nextValue = target.type === "checkbox" ? target.checked : target.value;
    setValues((current) => ({ ...current, [target.name]: nextValue }));
  };

  const setConsent = (checked: boolean | "indeterminate") => {
    setValues((current) => ({ ...current, consent: checked === true }));
  };

  const canContinue =
    (step === 0 && Boolean(values.challenge)) ||
    (step === 1 && Boolean(values.support)) ||
    step === 2;

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
        supportPathLabels[values.support] ?? values.support
      }.`,
      consent: values.consent,
    };

    const payload = buildInquiryLeadPayload({
      values: formValues,
      sourceHost: getLeadSourceHost(),
      sourcePage: window.location.href,
      sourceCta: "quick-clarity-check",
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
        message: "Your response is in. Omkar will get back to you with the right next step.",
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

  const progressValue = ((step + 1) / wizardContent.steps.length) * 100;

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) {
          resetAndClose();
        }
      }}
    >
      <AnimatePresence>
        {isOpen ? (
          <DialogPortal forceMount>
            <DialogOverlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-[#181613]/70 backdrop-blur-lg"
              />
            </DialogOverlay>

            <DialogContent asChild forceMount>
              <motion.div
                initial={{ opacity: 0, y: 22, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 22, scale: 0.97 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                className="fixed left-1/2 top-1/2 z-[101] flex max-h-[calc(100vh-1.5rem)] w-[calc(100vw-1rem)] max-w-[860px] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-[1.75rem] border border-white/60 bg-[#FBFAF7] shadow-[0_32px_90px_rgba(24,22,19,0.34)] focus:outline-none"
              >
                <div className="border-b border-[#262421]/8 bg-[radial-gradient(circle_at_top_left,rgba(220,199,167,0.36),transparent_42%),linear-gradient(180deg,#FFFDF9,#F9F6EF)] px-5 pb-3 pt-4 md:px-8 md:pb-4 md:pt-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EDE2D4] text-[#8B715E] md:h-11 md:w-11">
                        <Sparkles className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8B715E]">
                          {wizardContent.eyebrow}
                        </p>
                        <DialogTitle className="font-serif text-[1.65rem] leading-[0.98] text-[#262421] md:text-4xl md:leading-tight">
                          {wizardContent.title}
                        </DialogTitle>
                      </div>
                    </div>

                    <DialogClose asChild>
                      <button
                        type="button"
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#262421]/8 bg-white/70 text-[#262421] transition-colors hover:bg-white"
                        aria-label="Close quick clarity check"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </DialogClose>
                  </div>

                  <DialogDescription className="sr-only">
                    Answer three short questions so Omkar can respond with the right next step.
                  </DialogDescription>

                  <div className="mt-2.5 grid grid-cols-3 gap-2 md:mt-4">
                    {wizardContent.steps.map((item, index) => (
                      <Progress key={item.eyebrow} value={step >= index ? progressValue : 0} />
                    ))}
                  </div>
                </div>

                <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4 md:px-8 md:py-7">
                  {step === 0 ? (
                    <div>
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.26em] text-[#8B715E]">
                        {wizardContent.steps[0].eyebrow}
                      </p>
                      <h4 className="font-serif text-2xl leading-tight text-[#262421] md:text-5xl">
                        {wizardContent.steps[0].heading}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-[#5E6876] md:mt-3 md:text-base md:leading-7">
                        {wizardContent.steps[0].subtext}
                      </p>
                      <RadioGroup
                        value={values.challenge}
                        onValueChange={(challenge) =>
                          setValues((current) => ({ ...current, challenge }))
                        }
                        className="mt-4 grid gap-2 sm:grid-cols-2 md:mt-6 md:gap-3"
                      >
                        {wizardContent.steps[0].options.map((option) => (
                          <RadioGroupItem key={option.value} value={option.value}>
                            <span className="text-sm font-bold leading-5 md:leading-6">{option.label}</span>
                          </RadioGroupItem>
                        ))}
                      </RadioGroup>
                    </div>
                  ) : null}

                  {step === 1 ? (
                    <div>
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.26em] text-[#8B715E]">
                        {wizardContent.steps[1].eyebrow}
                      </p>
                      <h4 className="font-serif text-2xl leading-tight text-[#262421] md:text-5xl">
                        {wizardContent.steps[1].heading}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-[#5E6876] md:mt-3 md:text-base md:leading-7">
                        {wizardContent.steps[1].subtext}
                      </p>
                      <RadioGroup
                        value={values.support}
                        onValueChange={(support) =>
                          setValues((current) => ({ ...current, support }))
                        }
                        className="mt-4 md:mt-6"
                      >
                        {wizardContent.steps[1].options.map((option) => (
                          <RadioGroupItem key={option.value} value={option.value}>
                            <span className="flex items-center justify-between gap-4">
                              <span>
                                <span className="block text-sm font-bold leading-6">
                                  {option.label}
                                </span>
                                <span className="mt-0.5 block text-xs font-medium leading-4 text-[#6B7280] md:mt-1 md:leading-5">
                                  {option.description}
                                </span>
                              </span>
                              {values.support === option.value ? (
                                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#53665A]" />
                              ) : null}
                            </span>
                          </RadioGroupItem>
                        ))}
                      </RadioGroup>
                    </div>
                  ) : null}

                  {step === 2 ? (
                    <form id={formId} onSubmit={handleSubmit} noValidate>
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.26em] text-[#8B715E]">
                        {wizardContent.steps[2].eyebrow}
                      </p>
                      <h4 className="font-serif text-2xl leading-tight text-[#262421] md:text-5xl">
                        {contactCopy.heading}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-[#5E6876] md:mt-3 md:text-base md:leading-7">
                        {contactCopy.subtext}
                      </p>

                      <div className="mt-4 grid grid-cols-1 gap-3 md:mt-6 md:grid-cols-2">
                        <Input
                          name="firstName"
                          value={values.firstName}
                          onChange={handleChange}
                          required
                          placeholder="First Name"
                          autoComplete="given-name"
                        />
                        <Input
                          name="lastName"
                          value={values.lastName}
                          onChange={handleChange}
                          placeholder="Last Name"
                          autoComplete="family-name"
                        />
                        <Input
                          name="email"
                          type="email"
                          value={values.email}
                          onChange={handleChange}
                          required
                          placeholder="Email Address"
                          autoComplete="email"
                        />
                        <Input
                          name="phone"
                          type="tel"
                          value={values.phone}
                          onChange={handleChange}
                          required
                          placeholder={siteConfig.phonePlaceholder}
                          autoComplete="tel"
                        />
                      </div>

                      <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-[#485364]">
                        <Checkbox checked={values.consent} onCheckedChange={setConsent} />
                        <span>{contactCopy.consentLabel}</span>
                      </label>

                      <p className="mt-3 text-xs font-semibold text-[#8B715E]">
                        {contactCopy.trustLine}
                      </p>

                      {status.message ? (
                        <p
                          role="status"
                          aria-live="polite"
                          className={cn(
                            "mt-5 rounded-[1.25rem] border px-4 py-3 text-sm leading-6",
                            status.tone === "success"
                              ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                              : "border-rose-300 bg-rose-50 text-rose-700",
                          )}
                        >
                          {status.message}
                        </p>
                      ) : null}
                    </form>
                  ) : null}
                </div>

                <div className="border-t border-[#262421]/8 bg-[#FBFAF7] px-5 py-3 md:px-8 md:py-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap items-center gap-3">
                      {step > 0 ? (
                        <Button type="button" variant="secondary" size="sm" onClick={() => setStep(step - 1)}>
                          <ArrowLeft className="h-4 w-4" />
                          Back
                        </Button>
                      ) : null}
                      <Button asChild type="button" variant="secondary" size="sm">
                        <a
                          href={buildWhatsAppUrl("Hi Omkar, I would like to connect with you on WhatsApp.")}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="h-4 w-4" />
                          WhatsApp Instead
                        </a>
                      </Button>
                    </div>

                    {step < 2 ? (
                      <Button
                        type="button"
                        size="md"
                        className="h-11 md:h-12"
                        onClick={() => setStep(step + 1)}
                        disabled={!canContinue}
                      >
                        Continue
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    ) : (
                      <Button type="submit" form={formId} disabled={isSubmitting} className="h-11 md:h-12">
                        {isSubmitting ? "Sending..." : contactCopy.submitLabel}
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            </DialogContent>
          </DialogPortal>
        ) : null}
      </AnimatePresence>
    </Dialog>
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
