import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, BookOpen, Instagram, Linkedin, PlayCircle, Video, Youtube } from "lucide-react";

import { useLeadWizard } from "../components/LeadWizardProvider";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { wizardContent } from "../lib/omkar-content";
import { siteConfig } from "../lib/site-config";

export default function Content() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { openLeadWizard } = useLeadWizard();

  const insights = [
    {
      category: "Anxiety",
      title: "The Hidden Cost Of High-Functioning Anxiety",
      type: "Article",
      icon: <BookOpen className="h-4 w-4" />,
    },
    {
      category: "Emotional Mastery",
      title: "Why You Cannot Think Your Way Out Of A Trigger",
      type: "Video",
      icon: <Video className="h-4 w-4" />,
    },
    {
      category: "Inner Child Healing",
      title: "Re-Parenting: The Key To Adult Relationships",
      type: "Article",
      icon: <BookOpen className="h-4 w-4" />,
    },
    {
      category: "Mindfulness",
      title: "A 5-Minute Somatic Reset For Overwhelm",
      type: "Reel",
      icon: <PlayCircle className="h-4 w-4" />,
    },
  ];

  const filters = ["All", "Anxiety", "Emotional Mastery", "Inner Child Healing", "Mindfulness"];

  const filteredInsights = useMemo(() => {
    if (activeFilter === "All") {
      return insights;
    }

    return insights.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="overflow-x-hidden bg-[#FBF4E6] text-[#2A2A2A]">
      <section className="border-b border-black/5 bg-[#F5F1EA] py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl px-6 text-center md:px-12"
        >
          <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
            Library
          </span>
          <h1 className="font-serif text-4xl leading-[1.08] text-[#1a1a1a] md:text-6xl lg:text-7xl">
            Insights For Your <span className="italic text-[#9c8257]">Emotional Growth</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-gray-600 md:text-xl">
            Articles, videos, and practices designed to help you understand your mind, regulate your
            nervous system, and reconnect with emotional steadiness.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button
              asChild
              variant="secondary"
              size="md"
            >
              <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-4 w-4" />
              Instagram
              </a>
            </Button>
            <Button asChild variant="secondary" size="md">
              <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
              </a>
            </Button>
            <Button asChild variant="secondary" size="md">
              <a
              href={siteConfig.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="h-4 w-4" />
              YouTube
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12">
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-6 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
                activeFilter === filter
                  ? "bg-[#60523f] text-white"
                  : "border border-black/10 bg-white text-gray-500 hover:border-[#60523f] hover:text-[#60523f]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {filteredInsights.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer rounded-lg border border-black/5 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(60,73,64,0.12)]"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#F5F1EA] px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]">
                {item.icon}
                {item.type}
              </div>
              <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-[#9c8257]">
                {item.category}
              </span>
              <h3 className="font-serif text-2xl leading-tight text-[#1a1a1a] transition-colors group-hover:text-[#60523f] md:text-3xl">
                {item.title}
              </h3>
            </motion.article>
          ))}
        </div>

        <Card className="mt-16 p-8 text-center md:p-12">
          <h3 className="font-serif text-3xl text-[#1A1A1A] md:text-4xl">Need Help Finding The Right Support Path?</h3>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-600">
            If the content resonates but you want clarity on what to do next, the quick clarity check is
            the fastest way to start without guessing.
          </p>
          <Button type="button" onClick={() => openLeadWizard()} className="mt-8" size="lg">
            {wizardContent.triggerLabel}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Card>
      </section>
    </div>
  );
}
