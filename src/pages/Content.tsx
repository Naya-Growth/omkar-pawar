import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { BookOpen, Instagram, Linkedin, PlayCircle, Video } from "lucide-react";

import { useLeadWizard } from "../components/LeadWizardProvider";
import { siteConfig } from "../lib/site-config";

export default function Content() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { openLeadWizard } = useLeadWizard();

  const insights = [
    {
      category: "Anxiety",
      title: "The hidden cost of high-functioning anxiety",
      type: "Article",
      icon: <BookOpen className="h-4 w-4" />,
      image: siteConfig.image.contentAnxiety,
    },
    {
      category: "Emotional Mastery",
      title: "Why you cannot think your way out of a trigger",
      type: "Video",
      icon: <Video className="h-4 w-4" />,
      image: siteConfig.image.contentEmotionalMastery,
    },
    {
      category: "Inner Child Healing",
      title: "Re-parenting: the key to adult relationships",
      type: "Article",
      icon: <BookOpen className="h-4 w-4" />,
      image: siteConfig.image.contentInnerChild,
    },
    {
      category: "Mindfulness",
      title: "A 5-minute somatic reset for overwhelm",
      type: "Reel",
      icon: <PlayCircle className="h-4 w-4" />,
      image: siteConfig.image.contentMindfulness,
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
    <div className="overflow-x-hidden bg-[#FAF9F6] text-[#2A2A2A]">
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
            Insights for your <span className="italic text-[#9c8257]">emotional growth</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-gray-600 md:text-xl">
            Articles, videos, and practices designed to help you understand your mind, regulate your
            nervous system, and reconnect with emotional steadiness.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#2A2A2A] transition-colors hover:border-[#8C7A6B]/30 hover:text-[#8C7A6B]"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#2A2A2A] transition-colors hover:border-[#8C7A6B]/30 hover:text-[#8C7A6B]"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
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
              className="group cursor-pointer"
            >
              <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-[2rem] bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/92 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a] backdrop-blur-sm">
                  {item.icon}
                  {item.type}
                </div>
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

        <div className="mt-16 rounded-[2.5rem] border border-black/5 bg-white p-8 text-center shadow-sm md:p-12">
          <h3 className="font-serif text-3xl text-[#1A1A1A] md:text-4xl">Need help finding the right support path?</h3>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-600">
            If the content resonates but you want clarity on what to do next, the guided fit check is
            the fastest way to start without guessing.
          </p>
          <button
            type="button"
            onClick={() => openLeadWizard()}
            className="mt-8 rounded-full bg-[#2A2A2A] px-8 py-4 text-sm font-bold tracking-[0.16em] text-white transition-colors hover:bg-[#8C7A6B]"
          >
            Open guided fit check
          </button>
        </div>
      </section>
    </div>
  );
}
