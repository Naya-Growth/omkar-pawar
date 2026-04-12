import { motion } from "motion/react";
import { Baby, BadgeCheck, Brain, Globe2, GraduationCap, MapPin, Quote } from "lucide-react";

import { siteConfig } from "../lib/site-config";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function About() {
  return (
    <div className="overflow-x-hidden bg-[#FAF9F6] text-[#2A2A2A]">
      <section className="relative mx-auto max-w-[1400px] px-6 pb-20 pt-24 md:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.span variants={fadeUp} className="mb-6 block text-[10px] font-bold uppercase tracking-[0.3em] text-[#8C7A6B]">
            The origin story
          </motion.span>
          <motion.h1 variants={fadeUp} className="font-serif text-4xl leading-[1.1] md:text-6xl lg:text-7xl">
            From chasing perfection
            <br />
            to <span className="italic text-[#8C7A6B]">facilitating peace.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative mb-12 mt-12 aspect-[16/9] overflow-hidden rounded-[2rem] shadow-2xl shadow-[#8C7A6B]/10"
          >
            <img
              src={siteConfig.image.aboutBanner}
              alt="Omkar Pawar outdoors in a reflective portrait"
              className="h-full w-full object-cover object-center"
              loading="eager"
              decoding="async"
            />
          </motion.div>
          <motion.div variants={fadeUp} className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.8rem] border border-black/5 bg-white px-5 py-5 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8C7A6B]">Practice</p>
              <p className="mt-2 text-lg font-semibold">{siteConfig.practiceName}</p>
            </div>
            <div className="rounded-[1.8rem] border border-black/5 bg-white px-5 py-5 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8C7A6B]">Based in</p>
              <p className="mt-2 inline-flex items-center gap-2 text-lg font-semibold">
                <MapPin className="h-4 w-4 text-[#8C7A6B]" />
                {siteConfig.location}
              </p>
            </div>
            <div className="rounded-[1.8rem] border border-black/5 bg-white px-5 py-5 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8C7A6B]">Sessions</p>
              <p className="mt-2 inline-flex items-center gap-2 text-lg font-semibold">
                <Globe2 className="h-4 w-4 text-[#8C7A6B]" />
                {siteConfig.languages.join(" · ")}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-20"
        >
          <motion.div variants={fadeUp}>
            <h3 className="mb-6 font-serif text-3xl text-[#8C7A6B]">01. The burden of perfection</h3>
            <div className="space-y-6 text-lg font-light leading-relaxed text-gray-600">
              <p>
                Omkar was born in the village of Whatambare in Solapur, Maharashtra. On the outside,
                childhood looked stable. Internally, he was highly impressionable, absorbing the
                unspoken pressure of family, society, performance, and what it meant to be “good
                enough.”
              </p>
              <p>
                That turned into a life organized around perfection. Everything had to be exceptional.
                Success became less about joy and more about pressure, judgment, and the fear of
                falling short.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="mb-6 font-serif text-3xl text-[#8C7A6B]">02. The collapse and the calling</h3>
            <div className="space-y-6 text-lg font-light leading-relaxed text-gray-600">
              <p>
                The turning point came after failure in competitive exams. With a background in
                Mechanical Engineering and time spent in small-scale industry, Omkar felt deeply
                unsettled and disconnected from the work he was doing.
              </p>
              <p>
                But the interest in inner work had always been there. From the age of 12, he had been
                reading Swami Vivekananda, especially <em>Rajyoga</em>, and was drawn toward the study
                of the mind. When the old path collapsed, psychology became the honest one.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="mb-6 font-serif text-3xl text-[#8C7A6B]">03. The transformation</h3>
            <div className="space-y-6 text-lg font-light leading-relaxed text-gray-600">
              <p>
                Transitioning from engineering into psychology was not simple. There were doubts,
                comparisons, and fears of being too late. But the work deepened through study,
                supervised practice, pro-bono sessions, hospital exposure, and real client
                transformations.
              </p>
              <p>
                Today, Omkar’s work is grounded in one central truth: for every visible behavior, there
                is a deeper reason beneath it. Healing becomes possible when that reason is met with
                awareness instead of shame.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-[#8C7A6B] px-6 py-32 text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeUp} className="mb-8 flex justify-center">
            <Quote className="h-12 w-12 text-white/30" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-serif text-3xl leading-tight md:text-5xl">
            “Every behavior has a positive intention. My work is to help you understand the root of
            that intention, so healing and growth become possible.”
          </motion.h2>
        </motion.div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-32 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-16 text-center"
        >
          <motion.span variants={fadeUp} className="mb-4 block text-[10px] font-bold uppercase tracking-[0.3em] text-[#8C7A6B]">
            Expertise
          </motion.span>
          <motion.h3 variants={fadeUp} className="font-serif text-4xl text-[#2A2A2A] md:text-5xl">
            Professional foundation
          </motion.h3>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {[
            {
              icon: <Brain className="h-8 w-8" />,
              title: "Registered Psychologist",
              desc: "Double Master's in I/O Psychology & Clinical Psychology",
            },
            {
              icon: <BadgeCheck className="h-8 w-8" />,
              title: "Cognitive Hypnotherapist",
              desc: "Diploma in Cognitive Hypnotic Psychotherapy",
            },
            {
              icon: <GraduationCap className="h-8 w-8" />,
              title: "NLP Master Coach",
              desc: "Neuro-Linguistic Programming Master Practitioner",
            },
            {
              icon: <Baby className="h-8 w-8" />,
              title: "Inner Child Healer",
              desc: "Certified Inner Child Healing Practitioner",
            },
          ].map((cred) => (
            <motion.div
              key={cred.title}
              variants={fadeUp}
              className="flex flex-col items-center rounded-[2rem] border border-black/5 bg-white p-8 text-center shadow-sm transition-shadow duration-500 hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#FAF4EA] text-[#8C7A6B]">
                {cred.icon}
              </div>
              <h4 className="mb-3 text-lg font-bold text-[#2A2A2A]">{cred.title}</h4>
              <p className="text-sm leading-relaxed text-gray-500">{cred.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
