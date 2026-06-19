import { Baby, BadgeCheck, Brain, Globe2, GraduationCap, MapPin, Quote } from "lucide-react";

import {
  FeatureCard,
  MediaFrame,
  MetricCard,
  Reveal,
  SectionIntro,
  SectionShell,
} from "../components/ui/premium";
import { heroStats } from "../lib/omkar-content";
import { siteConfig } from "../lib/site-config";

const storyBlocks = [
  {
    number: "01",
    title: "The Burden Of Perfection",
    paragraphs: [
      "Omkar was born in the village of Whatambare in Solapur, Maharashtra. On the outside, childhood looked stable. Internally, he was highly impressionable, absorbing the unspoken pressure of family, society, performance, and what it meant to be good enough.",
      "That turned into a life organized around perfection. Everything had to be exceptional. Success became less about joy and more about pressure, judgment, and the fear of falling short.",
    ],
  },
  {
    number: "02",
    title: "The Collapse And The Calling",
    paragraphs: [
      "The turning point came after failure in competitive exams. With a background in Mechanical Engineering and time spent in small-scale industry, Omkar felt deeply unsettled and disconnected from the work he was doing.",
      "But the interest in inner work had always been there. From the age of 12, he had been reading Swami Vivekananda, especially Rajyoga, and was drawn toward the study of the mind. When the old path collapsed, psychology became the honest one.",
    ],
  },
  {
    number: "03",
    title: "The Transformation",
    paragraphs: [
      "Transitioning from engineering into psychology was not simple. There were doubts, comparisons, and fears of being too late. But the work deepened through study, supervised practice, pro-bono sessions, hospital exposure, and real client transformations.",
      "Today, Omkar's work is grounded in one central truth: for every visible behavior, there is a deeper reason beneath it. Healing becomes possible when that reason is met with awareness instead of shame.",
    ],
  },
];

const credentials = [
  {
    icon: <Brain className="h-7 w-7" />,
    title: "Psychologist & Practitioner",
    body: "Double Master's in I/O Psychology & Clinical Psychology",
  },
  {
    icon: <BadgeCheck className="h-7 w-7" />,
    title: "Cognitive Hypnotherapist",
    body: "Diploma in Cognitive Hypnotic Psychotherapy",
  },
  {
    icon: <GraduationCap className="h-7 w-7" />,
    title: "NLP Master Coach",
    body: "Neuro-Linguistic Programming Master Practitioner",
  },
  {
    icon: <Baby className="h-7 w-7" />,
    title: "Inner Child Healer",
    body: "Certified Inner Child Healing Practitioner",
  },
];

export default function About() {
  return (
    <div className="overflow-x-hidden bg-[#FAF6F0] text-[#1A1A1A]">
      <SectionShell className="bg-hero-gradient pt-12 lg:pt-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(420px,1fr)] lg:items-center">
          <Reveal immediate>
            <SectionIntro
              eyebrow="The Origin Story"
              title={
                <>
                  From Chasing Perfection To{" "}
                  <span className="italic text-[#3D2B1F]">Facilitating Peace.</span>
                </>
              }
              body="Omkar's work did not begin as a brand. It came from pressure, collapse, self-study, and a long turn toward psychology-led healing."
              titleClassName="text-5xl md:text-6xl lg:text-7xl"
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <MetricCard label="Practice" value={siteConfig.practiceName} />
              <MetricCard label="Based In" value={siteConfig.location} icon={MapPin} />
              <MetricCard label="Languages" value={siteConfig.languages.join(" · ")} icon={Globe2} />
            </div>
          </Reveal>

          <Reveal immediate delay={0.08}>
            <MediaFrame
              src={siteConfig.image.aboutBanner}
              alt="Omkar Pawar outdoors in a reflective portrait"
              aspect="aspect-[16/10]"
              imageClassName="object-center"
              priority
            />
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell tone="white" className="border-y border-[#1A1A1A]/8">
        <Reveal>
          <SectionIntro
            align="center"
            className="max-w-3xl"
            eyebrow="Professional Foundation"
            title="Training That Supports Practical Inner Work."
            body="The work combines psychology, cognitive hypnotic psychotherapy, NLP, inner-child healing, and awareness-based regulation."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {credentials.map((credential, index) => (
            <Reveal key={credential.title} delay={index * 0.04}>
              <FeatureCard
                icon={credential.icon}
                title={credential.title}
                body={credential.body}
                className="min-h-[280px] text-center bg-[#FAF6F0] border border-[#1A1A1A]/8"
              />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {heroStats.map((stat) => (
            <MetricCard key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </div>
      </SectionShell>

      <SectionShell className="border-b border-[#1A1A1A]/8">
        <div className="grid gap-8 lg:grid-cols-[0.62fr_1.38fr] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionIntro
                eyebrow="About Omkar"
                title="A Story That Became A Practice."
                body="The biography is arranged as a timeline so the emotional and professional arc is easy to read on desktop and mobile."
              />
            </div>
          </Reveal>

          <div className="grid gap-5">
            {storyBlocks.map((block, index) => (
              <Reveal key={block.title} delay={index * 0.05}>
                <article className="rounded-[24px] border border-[#1A1A1A]/8 bg-[#FFFFFF] p-6 shadow-[0_16px_50px_rgba(140,106,68,0.06)] md:grid md:grid-cols-[88px_1fr] md:p-8">
                  <span className="font-serif text-5xl font-semibold leading-none text-[#3D2B1F]/50">
                    {block.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-3xl font-semibold leading-tight text-[#1A1A1A]">
                      {block.title}
                    </h3>
                    <div className="mt-5 grid gap-4 text-base leading-8 text-[#1A1A1A]">
                      {block.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell tone="bronze">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <Quote className="mx-auto h-12 w-12 text-white/35" />
            <h2 className="quote-text mt-7 font-serif text-3xl font-semibold leading-tight md:text-5xl">
              "Every Behavior Has A Positive Intention. My Work Is To Help You Understand The Root Of
              That Intention, So Healing And Growth Become Possible."
            </h2>
          </div>
        </Reveal>
      </SectionShell>
    </div>
  );
}




