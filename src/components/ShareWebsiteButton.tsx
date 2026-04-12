import { useState } from "react";
import { Link2, Check } from "lucide-react";

import { absoluteSiteUrl } from "../lib/site-config";

type ShareWebsiteButtonProps = {
  className?: string;
  label?: string;
};

export default function ShareWebsiteButton({
  className = "",
  label = "Share Website",
}: ShareWebsiteButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Omkar Pawar | Freedom Innerwellbeing",
      text: "Thought you might find Omkar Pawar's work on emotional mastery and anxiety healing useful.",
      url: absoluteSiteUrl("/"),
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // fall through to clipboard for graceful cancellation or unsupported environments
      }
    }

    await navigator.clipboard.writeText(shareData.url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className={className}
      aria-label={label}
    >
      {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
      <span>{copied ? "Link copied" : label}</span>
    </button>
  );
}
