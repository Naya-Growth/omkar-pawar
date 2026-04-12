import { siteConfig } from "../lib/site-config";

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = "h-11 w-11" }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 96 96"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="48" cy="48" r="39" stroke="currentColor" strokeWidth="8" />
      <path
        d="M48 24L60 42L48 60L36 42L48 24Z"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path d="M48 44V69" stroke="#FAF9F6" strokeWidth="7" strokeLinecap="round" />
      <path
        d="M48 44V69"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M48 82C54.6 82 60 76.9 60 70.6C60 62.7 54 57 48 55C42 57 36 62.7 36 70.6C36 76.9 41.4 82 48 82Z"
        fill="currentColor"
      />
    </svg>
  );
}

type BrandLockupProps = {
  className?: string;
  tone?: "light" | "dark";
  compact?: boolean;
};

export function BrandLockup({
  className = "",
  tone = "dark",
  compact = false,
}: BrandLockupProps) {
  const textTone = tone === "light" ? "text-white" : "text-[#2A2A2A]";
  const metaTone = tone === "light" ? "text-white/65" : "text-[#8C7A6B]";

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-full ${
          tone === "light" ? "bg-white/10 text-white" : "bg-[#F2ECE3] text-[#735636]"
        }`}
      >
        <BrandMark className="h-9 w-9" />
      </div>
      <div className="min-w-0">
        <p className={`font-serif text-xl leading-none ${textTone}`}>{siteConfig.projectName}</p>
        <p className={`mt-1 text-[10px] font-bold uppercase tracking-[0.24em] ${metaTone}`}>
          {compact ? siteConfig.practiceName : `${siteConfig.practiceName} · ${siteConfig.roleLabel}`}
        </p>
      </div>
    </div>
  );
}
