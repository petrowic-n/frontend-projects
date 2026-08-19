import { motion } from "framer-motion";
import { hero } from "../data/content";
import CountdownTimer from "./CountdownTimer";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] } },
};

export default function Hero() {
  return (
    <section id="studio" className="pt-[190px] pb-[120px] max-w-[1180px] mx-auto px-8 grid md:grid-cols-[1.1fr_0.9fr] gap-[60px] items-center">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div variants={item} className="eyebrow">
          {hero.eyebrow}
        </motion.div>

        <motion.h1 variants={item} className="text-[38px] md:text-[54px] leading-[1.12] mt-[18px] mb-5 max-w-[560px]">
          {hero.heading}
        </motion.h1>

        <motion.p variants={item} className="text-text-muted text-[17px] max-w-[480px] mb-[34px]">
          {hero.lead}
        </motion.p>

        <motion.div variants={item} className="flex gap-3.5 flex-wrap mb-11">
          <motion.a
            href={hero.primaryCta.href}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary"
          >
            {hero.primaryCta.label}
          </motion.a>
          <motion.a
            href={hero.secondaryCta.href}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-ghost"
          >
            {hero.secondaryCta.label}
          </motion.a>
        </motion.div>

        <motion.div variants={item} className="flex gap-[22px] flex-wrap text-[13px] text-text-muted">
          {hero.statLine.map((stat) => (
            <div key={stat.label}>
              {stat.prefix ? (
                <>
                  {stat.prefix}
                  <span className="text-brass font-mono">{stat.value}</span>
                </>
              ) : (
                <>
                  <span className="text-brass font-mono">{stat.value}</span> {stat.label}
                </>
              )}
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <CountdownTimer
          targetDate={hero.countdown.targetDate}
          label={hero.countdown.label}
          caption={hero.countdown.caption}
        />
      </motion.div>
    </section>
  );
}
