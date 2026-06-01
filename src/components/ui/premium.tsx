import { type Key, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, type LucideIcon } from "lucide-react";

import { cn } from "../../lib/utils";
import { Button } from "./button";
import { Card } from "./card";

export const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  immediate?: boolean;
  key?: Key;
};

export function Reveal({ children, className, delay = 0, immediate = false }: RevealProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const animationProps = immediate
    ? {
        initial: "hidden" as const,
        animate: "visible" as const,
      }
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, margin: "-90px" },
      };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { delay, duration: 0.68, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={className}
      {...animationProps}
    >
      {children}
    </motion.div>
  );
}

type SectionShellProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "warm" | "white" | "charcoal" | "bronze";
};

export function SectionShell({ children, className, id, tone = "warm" }: SectionShellProps) {
  const toneClass = {
    warm: "bg-[#FBF4E6] text-[#1A1A1A]",
    white: "bg-white text-[#1A1A1A]",
    charcoal: "bg-[#252423] text-white",
    bronze: "bg-[#8C6A44] text-white",
  }[tone];

  return (
    <section
      id={id}
      className={cn("overflow-hidden px-5 py-20 sm:px-8 lg:px-10 lg:py-24", toneClass, className)}
    >
      <div className="mx-auto w-full max-w-[1400px] min-w-0">{children}</div>
    </section>
  );
}

type EyebrowProps = {
  children: ReactNode;
  className?: string;
  inverse?: boolean;
};

export function Eyebrow({ children, className, inverse = false }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-[10px] font-extrabold uppercase tracking-[0.22em]",
        inverse ? "text-[#EFD95E]" : "text-[#8C6A44]",
        className,
      )}
    >
      {children}
    </p>
  );
}

type SectionIntroProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  body?: ReactNode;
  align?: "left" | "center";
  inverse?: boolean;
  className?: string;
  titleClassName?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  body,
  align = "left",
  inverse = false,
  className,
  titleClassName,
}: SectionIntroProps) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <Eyebrow inverse={inverse}>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          "mt-4 font-serif text-4xl font-semibold leading-[1.04] md:text-5xl",
          inverse ? "text-white" : "text-[#1A1A1A]",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={cn(
            "mt-5 text-base leading-8 md:text-lg",
            inverse ? "text-white/74" : "text-[#4E463B]",
          )}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}

type IconBadgeProps = {
  icon: ReactNode;
  className?: string;
  inverse?: boolean;
};

export function IconBadge({ icon, className, inverse = false }: IconBadgeProps) {
  return (
    <span
      className={cn(
        "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg",
        inverse ? "bg-white/10 text-[#EFD95E]" : "bg-[#F2E4CE] text-[#8C6A44]",
        className,
      )}
    >
      {icon}
    </span>
  );
}

type PremiumCardProps = {
  children: ReactNode;
  className?: string;
  inverse?: boolean;
  id?: string;
};

export function PremiumCard({ children, className, inverse = false, id }: PremiumCardProps) {
  return (
    <Card
      id={id}
      className={cn(
        "transition-all duration-300 hover:-translate-y-1",
        inverse
          ? "border-white/10 bg-white/[0.07] text-white shadow-[0_18px_60px_rgba(0,0,0,0.18)] hover:bg-white/[0.1]"
          : "hover:shadow-[0_20px_60px_rgba(140,106,68,0.15)]",
        className,
      )}
    >
      {children}
    </Card>
  );
}

type FeatureCardProps = {
  icon?: ReactNode;
  kicker?: string;
  title: ReactNode;
  body: ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  href?: string;
  inverse?: boolean;
  className?: string;
};

export function FeatureCard({
  icon,
  kicker,
  title,
  body,
  actionLabel,
  onAction,
  href,
  inverse = false,
  className,
}: FeatureCardProps) {
  const action = actionLabel ? (
    href ? (
      <Button asChild variant={inverse ? "inverted" : "primary"} size="md" className="mt-7 w-fit">
        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
          {actionLabel}
          <ArrowRight className="h-4 w-4" />
        </a>
      </Button>
    ) : (
      <Button type="button" variant={inverse ? "inverted" : "primary"} size="md" className="mt-7 w-fit" onClick={onAction}>
        {actionLabel}
        <ArrowRight className="h-4 w-4" />
      </Button>
    )
  ) : null;

  return (
    <PremiumCard inverse={inverse} className={cn("flex h-full flex-col p-6 md:p-8", className)}>
      <div className="flex flex-1 flex-col">
        {icon ? <IconBadge icon={icon} inverse={inverse} className="mb-6" /> : null}
        {kicker ? <Eyebrow inverse={inverse} className="mb-3">{kicker}</Eyebrow> : null}
        <h3 className={cn("font-serif text-2xl font-semibold leading-tight md:text-3xl", inverse ? "text-white" : "text-[#1A1A1A]")}>
          {title}
        </h3>
        <p className={cn("mt-4 flex-1 text-sm leading-7 md:text-base", inverse ? "text-white/72" : "text-[#4E463B]")}>
          {body}
        </p>
        {action}
      </div>
    </PremiumCard>
  );
}

type MediaFrameProps = {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  caption?: ReactNode;
};

export function MediaFrame({
  src,
  alt,
  aspect = "aspect-[4/5]",
  className,
  imageClassName,
  priority = false,
  caption,
}: MediaFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-[#1A1A1A]/8 bg-white/85 p-3 shadow-[0_24px_80px_rgba(140,106,68,0.14)]",
        className,
      )}
    >
      <div className={cn("overflow-hidden rounded-md bg-[#F2E4CE]", aspect)}>
        <img
          src={src}
          alt={alt}
          className={cn("h-full w-full object-cover", imageClassName)}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      </div>
      {caption ? <div className="px-2 py-4">{caption}</div> : null}
    </div>
  );
}

type MetricCardProps = {
  label: string;
  value: string;
  icon?: LucideIcon;
  inverse?: boolean;
  key?: Key;
};

export function MetricCard({ label, value, icon: Icon, inverse = false }: MetricCardProps) {
  return (
    <PremiumCard inverse={inverse} className="h-full p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <Eyebrow inverse={inverse}>{label}</Eyebrow>
          <motion.p
            initial={{ opacity: 0, rotateX: -72, y: 8 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "mt-2 origin-bottom text-xl font-semibold leading-tight [transform-style:preserve-3d]",
              inverse ? "text-white" : "text-[#1A1A1A]",
            )}
          >
            {value}
          </motion.p>
        </div>
        {Icon ? <IconBadge icon={<Icon className="h-4 w-4" />} inverse={inverse} className="h-10 w-10" /> : null}
      </div>
    </PremiumCard>
  );
}

type StepCardProps = {
  index: number;
  title: string;
  body: string;
  inverse?: boolean;
};

export function StepCard({ index, title, body, inverse = false }: StepCardProps) {
  return (
    <PremiumCard inverse={inverse} className="h-full p-6">
      <div className="flex items-start gap-4">
        <span
          className={cn(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg font-serif text-2xl font-semibold",
            inverse ? "bg-white/10 text-[#EFD95E]" : "bg-[#F2E4CE] text-[#8C6A44]",
          )}
        >
          {index}
        </span>
        <div>
          <h3 className={cn("font-serif text-2xl font-semibold leading-tight", inverse ? "text-white" : "text-[#1A1A1A]")}>
            {title}
          </h3>
          <p className={cn("mt-3 text-sm leading-7", inverse ? "text-white/72" : "text-[#4E463B]")}>{body}</p>
        </div>
      </div>
    </PremiumCard>
  );
}
