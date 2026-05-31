export const supportPathLabels: Record<string, string> = {
  "quick-clarity-call": "Quick Clarity Call (15-20 Mins)",
  "one-to-one-personal-session": "1:1 Personal Session",
  "past-patterns-inner-healing": "Work On Past Patterns (Inner Healing)",
  "structured-28-day-program": "Structured 28-Day Program",
  "not-sure-yet": "Not Sure Yet",
};

export const contactCopy = {
  heading: "Where Can I Reach You?",
  subtext: "I'll personally get back to you based on what you shared.",
  consentLabel: "I'm okay with being contacted regarding this",
  submitLabel: "Get My Response",
  trustLine: "No spam. Just a personal response.",
} as const;

export const wizardContent = {
  triggerLabel: "Quick Clarity Check",
  eyebrow: "Guided Enquiry",
  title: "Let's Find The Right First Step",
  steps: [
    {
      eyebrow: "Step 1",
      heading: "What's Been Bothering You Lately?",
      subtext: "Don't overthink. Just pick what feels closest to your current situation.",
      options: [
        { value: "overthinking-anxiety", label: "Overthinking & Anxiety" },
        { value: "emotionally-overwhelmed", label: "Feeling Emotionally Overwhelmed" },
        { value: "confidence-self-doubt", label: "Confidence & Self-Doubt" },
        { value: "relationship-confusion", label: "Relationship Confusion" },
        { value: "stuck-not-sure", label: "I Feel Stuck, Not Sure What To Do" },
        { value: "something-else", label: "Something Else (I'll Explain)" },
      ],
    },
    {
      eyebrow: "Step 2",
      heading: "How Would You Like To Get Support?",
      subtext: "Choose what feels comfortable. You can always change later.",
      options: [
        {
          value: "quick-clarity-call",
          label: supportPathLabels["quick-clarity-call"],
          description: "Talk Once, Get Direction",
        },
        {
          value: "one-to-one-personal-session",
          label: supportPathLabels["one-to-one-personal-session"],
          description: "Deep Dive Into Your Situation",
        },
        {
          value: "past-patterns-inner-healing",
          label: supportPathLabels["past-patterns-inner-healing"],
          description: "If Old Experiences Are Still Affecting You",
        },
        {
          value: "structured-28-day-program",
          label: supportPathLabels["structured-28-day-program"],
          description: "Step-By-Step Transformation",
        },
        {
          value: "not-sure-yet",
          label: supportPathLabels["not-sure-yet"],
          description: "Help Me Decide",
        },
      ],
    },
    {
      eyebrow: "Step 3",
      heading: contactCopy.heading,
      subtext: contactCopy.subtext,
      options: [],
    },
  ],
} as const;

export const heroStats = [
  { label: "Experience", value: "7+ years" },
  { label: "Impact", value: "15k+ Lives Impacted" },
  { label: "Languages", value: "English · Hindi · Marathi" },
  { label: "1 On 1 Sessions", value: "2000+" },
] as const;

export const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/lifecoachomkar" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/coach-omkarpawar/" },
  { label: "YouTube", href: "https://www.youtube.com/@omkarpawar1407" },
] as const;
