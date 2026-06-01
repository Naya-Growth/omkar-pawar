export const siteConfig = {
  projectName: "Omkar Pawar",
  practiceName: "Freedom Innerwellbeing",
  leadCompanyName: "Omkar Pawar Clarity Session Enquiry",
  websiteUrl: "https://omkarpawar.com",
  email: "ompawar1407@gmail.com",
  whatsappNumber: "917020455546",
  whatsappDisplay: "WhatsApp Chat",
  phonePlaceholder: "+91 XXXXX XXXXX",
  roleLabel: "Psychologist & Inner Child Healer",
  location: "Pune, Maharashtra",
  locationLabel: "Pune, Maharashtra · Online worldwide",
  languages: ["English", "Hindi", "Marathi"],
  socialProof: {
    years: "7+ years",
    clients: "15k+ Lives Impacted",
    oneOnOneSessions: "2000+",
  },
  credentials: [
    "Cognitive Hypnotic Psychotherapist",
    "NLP Master Practitioner",
    "Inner Child Healing Practitioner",
    "Master's in I/O Psychology",
  ],
  image: {
    homeHeroHorizontal: "/media/omkar-suggested/Hero_Section_Horizontal.png",
    heroPortrait: "/media/omkar-suggested/OmkarPawar_Hero_Section.png",
    aboutBanner: "/media/about-banner.webp",
    servicesPortrait: "/media/omkar-suggested/Services_Section.png",
    clinicalExpertise: "/media/omkar-suggested/Clinical_Expertise_Section.jpg",
    healingHorizontal: "/media/omkar-suggested/Horizontal_Option.png",
    contactPortrait: "/media/omkar-suggested/Contact_Page.png",
    homeFormAside: "/media/omkar-suggested/Prefer_Writing_Before_A_Call_.png",
    contentAnxiety: "/media/content-anxiety.webp",
    contentEmotionalMastery: "/media/content-emotional-mastery.webp",
    contentInnerChild: "/media/content-inner-child.webp",
    contentMindfulness: "/media/content-mindfulness.webp",
    shareCard: "/media/og-cover.jpg",
  },
  instagramUrl: "https://instagram.com/lifecoachomkar",
  linkedinUrl: "https://www.linkedin.com/in/coach-omkarpawar/",
  youtubeUrl: "https://www.youtube.com/@omkarpawar1407",
} as const;

export function buildWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!message?.trim()) {
    return base;
  }

  return `${base}?text=${encodeURIComponent(message.trim())}`;
}

export function absoluteSiteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.websiteUrl}${normalizedPath}`;
}
