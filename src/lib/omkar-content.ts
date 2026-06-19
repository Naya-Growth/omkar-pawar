export const supportPathLabels: Record<string, string> = {
  "quick-clarity-call": "Quick Clarity Call (15-20 Mins)",
  "one-to-one-personal-session": "1:1 Emotional Healing & Support",
  "past-patterns-inner-healing": "Inner Child & Childhood Trauma Support",
  "structured-28-day-program": "Structured Support Program",
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

export const faqItems = [
  {
    question: "What is a Clarity Call?",
    answer:
      "A Clarity Call is a brief, 15-20 minute online conversation. It is a low-pressure space for you to share what is troubling you, ask questions about how I work, and see if we are a good fit before committing to longer sessions.",
  },
  {
    question: "How do childhood patterns or childhood trauma affect adult life?",
    answer:
      "Many adult struggles with anxiety, overthinking, or relationship loops stem from early survival strategies or expectations. Inner child support helps you recognize and gently resolve these deep-rooted triggers at the root level rather than just managing symptoms.",
  },
  {
    question: "Are the sessions online or in-person?",
    answer:
      "All sessions are conducted online via secure video calls (Zoom or Google Meet). This allows you to join from a comfortable, private space anywhere worldwide.",
  },
  {
    question: "Is this therapy or coaching?",
    answer:
      "My work combines psychology-led therapeutic modalities (like Cognitive Hypnotic Psychotherapy and Inner Child work) with practical, forward-looking guidance. It goes deeper than standard coaching to address root causes, while remaining highly practical and focused on your next steps.",
  },
  {
    question: "Is my privacy protected?",
    answer:
      "Yes, confidentiality is a core clinical boundary. Everything you share in our sessions, form submissions, and messages is kept completely private and secure.",
  },
  {
    question: "What is the pricing for sessions?",
    answer:
      "Pricing and structure are discussed transparently during or after our initial clarity call, once we understand your specific needs and which support format (1:1, structured blocks, or single checks) fits you best.",
  },
  {
    question: "What should I do in case of an urgent crisis?",
    answer:
      "Please note that my practice is not equipped to handle acute psychiatric emergencies or crisis support. If you are experiencing thoughts of self-harm or are in an urgent crisis, please contact your local emergency services or visit the nearest healthcare facility immediately.",
  },
] as const;
