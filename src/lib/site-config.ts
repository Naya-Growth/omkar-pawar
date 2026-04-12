export const siteConfig = {
  projectName: "Omkar Pawar",
  practiceName: "Freedom Innerwellbeing",
  leadCompanyName: "Omkar Pawar Discovery Call Enquiry",
  email: "hello@omkarpawar.com",
  whatsappNumber: "917020455546",
  whatsappDisplay: "+91 70204 55546",
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
