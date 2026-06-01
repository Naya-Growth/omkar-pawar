import { absoluteSiteUrl, siteConfig } from "./site-config";
import { faqItems, supportPathLabels } from "./omkar-content";

export type RouteSeoEntry = {
  title: string;
  description: string;
  keywords: string;
  path: string;
  schemaType?: string | string[];
};

type JsonLdNode = Record<string, unknown>;

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
    title: "Omkar Pawar | Master Your Emotions & Transform Your Life",
    description:
      "Work with Omkar Pawar of Freedom Innerwellbeing for psychology-led emotional mastery, inner child work, and a calmer, clearer life.",
    keywords: defaultKeywords,
    path: "/",
    schemaType: "WebPage",
  },
  "/about": {
    title: "About Omkar Pawar | Freedom Innerwellbeing",
    description:
      "Learn about Omkar Pawar's journey from perfectionism and pressure to becoming a cognitive hypnotic psychotherapist and emotional healing guide.",
    keywords: `${defaultKeywords}, about Omkar Pawar, psychologist Pune`,
    path: "/about",
    schemaType: ["WebPage", "AboutPage", "ProfilePage"],
  },
  "/services": {
    title: "Programs & 1:1 Support | Omkar Pawar",
    description:
      "Explore clarity sessions, 1:1 emotional healing, inner child healing, and structured support programs with Omkar Pawar.",
    keywords: `${defaultKeywords}, 1:1 emotional healing, anxiety transformation program`,
    path: "/services",
    schemaType: ["WebPage", "CollectionPage"],
  },
  "/stories": {
    title: "Client Stories | Omkar Pawar",
    description:
      "Read healing stories and transformation journeys from people who worked with Omkar Pawar on anxiety, confidence, and emotional patterns.",
    keywords: `${defaultKeywords}, client stories, healing testimonials`,
    path: "/stories",
    schemaType: ["WebPage", "CollectionPage"],
  },
  "/content": {
    title: "Insights & Articles | Omkar Pawar",
    description:
      "Explore Omkar Pawar's insights on anxiety, emotional mastery, inner child healing, mindfulness, and nervous system regulation.",
    keywords: `${defaultKeywords}, anxiety article, mindfulness content, emotional mastery insights`,
    path: "/content",
    schemaType: ["WebPage", "CollectionPage"],
  },
  "/contact": {
    title: "Book a Clarity Session | Omkar Pawar",
    description:
      "Reach out to Omkar Pawar for a clarity session, WhatsApp conversation, or inquiry about emotional healing and inner child work.",
    keywords: `${defaultKeywords}, book clarity session, contact Omkar Pawar`,
    path: "/contact",
    schemaType: ["WebPage", "ContactPage"],
  },
  "/privacy-policy": {
    title: "Privacy Policy | Omkar Pawar",
    description:
      "Read the privacy policy for Omkar Pawar and Freedom Innerwellbeing.",
    keywords: `${defaultKeywords}, privacy policy`,
    path: "/privacy-policy",
    schemaType: "WebPage",
  },
  "/terms-of-service": {
    title: "Terms of Service | Omkar Pawar",
    description:
      "Review the terms of service for Omkar Pawar and Freedom Innerwellbeing.",
    keywords: `${defaultKeywords}, terms of service`,
    path: "/terms-of-service",
    schemaType: "WebPage",
  },
  "/faq": {
    title: "FAQ | Omkar Pawar",
    description:
      "Find answers about Omkar Pawar's clarity sessions, healing programs, and how online sessions work.",
    keywords: `${defaultKeywords}, FAQ, online therapy questions`,
    path: "/faq",
    schemaType: ["WebPage", "FAQPage"],
  },
};

export function getRouteSeo(pathname: string): RouteSeoEntry {
  return routeSeo[pathname] ?? routeSeo["/"];
}

export function getCanonicalUrl(pathname: string) {
  const route = getRouteSeo(pathname);
  return absoluteSiteUrl(route.path);
}

const knowsAbout = [
  "Anxiety & Overthinking",
  "Emotional Mastery",
  "Inner Child Healing",
  "Nervous System Regulation",
  "Cognitive Hypnotic Psychotherapy",
  "Neuro-Linguistic Programming",
  "Mindfulness-Based CBT",
  "Clarity Sessions",
];

const serviceOfferItems = Object.entries(supportPathLabels).map(([value, label], index) => ({
  "@type": "Offer",
  position: index + 1,
  itemOffered: {
    "@type": "Service",
    "@id": `${siteConfig.websiteUrl}/services#${value}`,
    name: label,
    provider: {
      "@id": `${siteConfig.websiteUrl}#service`,
    },
    areaServed: "Worldwide",
    serviceType: label,
  },
}));

function buildBreadcrumbList(route: RouteSeoEntry): JsonLdNode {
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: absoluteSiteUrl("/"),
    },
  ];

  if (route.path !== "/") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: route.title.split("|")[0].trim(),
      item: absoluteSiteUrl(route.path),
    });
  }

  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteSiteUrl(route.path)}#breadcrumb`,
    itemListElement: items,
  };
}

function buildWebPageNode(route: RouteSeoEntry): JsonLdNode {
  const canonical = absoluteSiteUrl(route.path);

  return {
    "@type": route.schemaType ?? "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: route.title,
    headline: route.title.split("|")[0].trim(),
    description: route.description,
    isPartOf: {
      "@id": `${siteConfig.websiteUrl}#website`,
    },
    about: [
      {
        "@id": `${siteConfig.websiteUrl}#person`,
      },
      {
        "@id": `${siteConfig.websiteUrl}#service`,
      },
    ],
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteSiteUrl(siteConfig.image.shareCard),
    },
    mainEntity: {
      "@id": route.path === "/about" ? `${siteConfig.websiteUrl}#person` : `${siteConfig.websiteUrl}#service`,
    },
    breadcrumb: {
      "@id": `${canonical}#breadcrumb`,
    },
    inLanguage: "en-IN",
    dateModified: "2026-06-01",
  };
}

const baseGraph: JsonLdNode[] = [
  {
    "@type": "Person",
    "@id": `${siteConfig.websiteUrl}#person`,
    name: siteConfig.projectName,
    jobTitle: siteConfig.roleLabel,
    description:
      "Omkar Pawar is a psychologist and inner child healer at Freedom Innerwellbeing in Pune, Maharashtra, offering online emotional healing and clarity support worldwide.",
    url: siteConfig.websiteUrl,
    image: absoluteSiteUrl(siteConfig.image.shareCard),
    sameAs: [siteConfig.instagramUrl, siteConfig.linkedinUrl, siteConfig.youtubeUrl],
    knowsLanguage: siteConfig.languages,
    knowsAbout,
    hasCredential: siteConfig.credentials,
    homeLocation: {
      "@type": "Place",
      name: siteConfig.location,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "client enquiries",
      email: siteConfig.email,
      telephone: `+${siteConfig.whatsappNumber}`,
      availableLanguage: siteConfig.languages,
      areaServed: ["IN", "Worldwide"],
    },
    worksFor: {
      "@id": `${siteConfig.websiteUrl}#service`,
    },
    mainEntityOfPage: {
      "@id": `${siteConfig.websiteUrl}/about#webpage`,
    },
  },
  {
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${siteConfig.websiteUrl}#service`,
    name: `${siteConfig.projectName} | ${siteConfig.practiceName}`,
    alternateName: siteConfig.practiceName,
    image: absoluteSiteUrl(siteConfig.image.shareCard),
    description:
      "Psychology-led emotional healing, anxiety support, inner child work, and clarity-session based coaching by Omkar Pawar.",
    areaServed: ["Pune, Maharashtra", "India", "Worldwide"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    telephone: `+${siteConfig.whatsappNumber}`,
    email: siteConfig.email,
    founder: {
      "@id": `${siteConfig.websiteUrl}#person`,
    },
    sameAs: [siteConfig.instagramUrl, siteConfig.linkedinUrl, siteConfig.youtubeUrl],
    url: siteConfig.websiteUrl,
    availableLanguage: siteConfig.languages,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "clarity session enquiries",
      email: siteConfig.email,
      telephone: `+${siteConfig.whatsappNumber}`,
      availableLanguage: siteConfig.languages,
      areaServed: ["Pune", "India", "Worldwide"],
    },
    makesOffer: {
      "@type": "OfferCatalog",
      name: "Omkar Pawar Emotional Healing Support Paths",
      itemListElement: serviceOfferItems,
    },
  },
  {
    "@type": "WebSite",
    "@id": `${siteConfig.websiteUrl}#website`,
    name: `${siteConfig.projectName} | ${siteConfig.practiceName}`,
    url: siteConfig.websiteUrl,
    inLanguage: "en-IN",
    publisher: {
      "@id": `${siteConfig.websiteUrl}#service`,
    },
    about: {
      "@id": `${siteConfig.websiteUrl}#person`,
    },
  },
];

export function buildRouteStructuredData(pathname: string) {
  const route = getRouteSeo(pathname);
  const graph: JsonLdNode[] = [
    ...baseGraph,
    buildWebPageNode(route),
    buildBreadcrumbList(route),
  ];

  if (route.path === "/faq") {
    graph.push({
      "@type": "FAQPage",
      "@id": `${absoluteSiteUrl("/faq")}#faq`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export const structuredData = buildRouteStructuredData("/");
