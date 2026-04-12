export const siteConfig = {
  projectName: "Omkar Pawar",
  practiceName: "Freedom Innerwellbeing",
  leadCompanyName: "Omkar Pawar Discovery Call Enquiry",
  websiteUrl: "https://omkarpawar.com",
  email: "ompawar1407@gmail.com",
  whatsappNumber: "917020455546",
  whatsappDisplay: "+91 70204 55546",
  roleLabel: "Anxiety & Inner Child Healer",
  location: "Pune, Maharashtra",
  locationLabel: "Pune, Maharashtra · Online worldwide",
  languages: ["English", "Hindi", "Marathi"],
  socialProof: {
    years: "8+ years",
    clients: "500+ lives impacted",
  },
  credentials: [
    "Cognitive Hypnotic Psychotherapist",
    "NLP Master Practitioner",
    "Inner Child Healing Practitioner",
    "Master's in I/O Psychology",
  ],
  image: {
    heroPortrait: "/media/hero-portrait.webp",
    aboutBanner: "/media/about-banner.webp",
    servicesPortrait: "/media/services-portrait.webp",
    contactPortrait: "/media/contact-portrait.webp",
    homeFormAside: "/media/home-form-aside.webp",
    contentAnxiety: "/media/content-anxiety.webp",
    contentEmotionalMastery: "/media/content-emotional-mastery.webp",
    contentInnerChild: "/media/content-inner-child.webp",
    contentMindfulness: "/media/content-mindfulness.webp",
    shareCard: "/media/og-cover.jpg",
  },
  instagramUrl: "https://instagram.com/lifecoachomkar",
  linkedinUrl: "https://www.linkedin.com/in/coach-omkarpawar/",
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
