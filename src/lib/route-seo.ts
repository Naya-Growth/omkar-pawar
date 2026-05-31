import { absoluteSiteUrl, siteConfig } from "./site-config";

export type RouteSeoEntry = {
  title: string;
  description: string;
  keywords: string;
  path: string;
};

export const defaultKeywords = [
  "Omkar Pawar",
  "Freedom Innerwellbeing",
  "psychologist Pune",
  "inner child healing",
  "emotional healing coach",
  "cognitive hypnotic psychotherapist",
  "NLP master practitioner Pune",
  "clarity session",
].join(", ");

export const routeSeo: Record<string, RouteSeoEntry> = {
  "/": {
    title: "Omkar Pawar | Emotional Mastery, Anxiety Healing & Inner Child Work",
    description:
      "Work with Omkar Pawar of Freedom Innerwellbeing for psychology-led emotional mastery, inner child work, and a calmer, clearer life.",
    keywords: defaultKeywords,
    path: "/",
  },
  "/about": {
    title: "About Omkar Pawar | Freedom Innerwellbeing",
    description:
      "Learn about Omkar Pawar's journey from perfectionism and pressure to becoming a cognitive hypnotic psychotherapist and emotional healing guide.",
    keywords: `${defaultKeywords}, about Omkar Pawar, psychologist Pune`,
    path: "/about",
  },
  "/services": {
    title: "Programs & 1:1 Support | Omkar Pawar",
    description:
      "Explore clarity sessions, 1:1 emotional healing, inner child healing, and structured support programs with Omkar Pawar.",
    keywords: `${defaultKeywords}, 1:1 emotional healing, anxiety transformation program`,
    path: "/services",
  },
  "/stories": {
    title: "Client Stories | Omkar Pawar",
    description:
      "Read healing stories and transformation journeys from people who worked with Omkar Pawar on anxiety, confidence, and emotional patterns.",
    keywords: `${defaultKeywords}, client stories, healing testimonials`,
    path: "/stories",
  },
  "/content": {
    title: "Insights & Articles | Omkar Pawar",
    description:
      "Explore Omkar Pawar's insights on anxiety, emotional mastery, inner child healing, mindfulness, and nervous system regulation.",
    keywords: `${defaultKeywords}, anxiety article, mindfulness content, emotional mastery insights`,
    path: "/content",
  },
  "/contact": {
    title: "Book a Clarity Session | Omkar Pawar",
    description:
      "Reach out to Omkar Pawar for a clarity session, WhatsApp conversation, or inquiry about emotional healing and inner child work.",
    keywords: `${defaultKeywords}, book clarity session, contact Omkar Pawar`,
    path: "/contact",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Omkar Pawar",
    description:
      "Read the privacy policy for Omkar Pawar and Freedom Innerwellbeing.",
    keywords: `${defaultKeywords}, privacy policy`,
    path: "/privacy-policy",
  },
  "/terms-of-service": {
    title: "Terms of Service | Omkar Pawar",
    description:
      "Review the terms of service for Omkar Pawar and Freedom Innerwellbeing.",
    keywords: `${defaultKeywords}, terms of service`,
    path: "/terms-of-service",
  },
  "/faq": {
    title: "FAQ | Omkar Pawar",
    description:
      "Find answers about Omkar Pawar's clarity sessions, healing programs, and how online sessions work.",
    keywords: `${defaultKeywords}, FAQ, online therapy questions`,
    path: "/faq",
  },
};

export function getRouteSeo(pathname: string): RouteSeoEntry {
  return routeSeo[pathname] ?? routeSeo["/"];
}

export function getCanonicalUrl(pathname: string) {
  const route = getRouteSeo(pathname);
  return absoluteSiteUrl(route.path);
}

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.websiteUrl}#person`,
      name: siteConfig.projectName,
      jobTitle: siteConfig.roleLabel,
      url: siteConfig.websiteUrl,
      image: absoluteSiteUrl(siteConfig.image.shareCard),
      sameAs: [siteConfig.instagramUrl, siteConfig.linkedinUrl, siteConfig.youtubeUrl],
      knowsLanguage: siteConfig.languages,
      homeLocation: {
        "@type": "Place",
        name: siteConfig.location,
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.websiteUrl}#service`,
      name: `${siteConfig.projectName} | ${siteConfig.practiceName}`,
      image: absoluteSiteUrl(siteConfig.image.shareCard),
      description:
        "Psychology-led emotional healing, anxiety support, inner child work, and clarity-session based coaching by Omkar Pawar.",
      areaServed: "Worldwide",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      telephone: siteConfig.whatsappDisplay,
      email: siteConfig.email,
      founder: {
        "@id": `${siteConfig.websiteUrl}#person`,
      },
      sameAs: [siteConfig.instagramUrl, siteConfig.linkedinUrl, siteConfig.youtubeUrl],
      url: siteConfig.websiteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.websiteUrl}#website`,
      name: `${siteConfig.projectName} | ${siteConfig.practiceName}`,
      url: siteConfig.websiteUrl,
      about: {
        "@id": `${siteConfig.websiteUrl}#service`,
      },
    },
  ],
};
