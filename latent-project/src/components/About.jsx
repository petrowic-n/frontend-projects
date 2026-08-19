import { motion } from "framer-motion";
import { about, stats } from "../data/content";

export default function About() {
  return (
    <section id="about" className="py-[100px] max-w-[1180px] mx-auto px-8">
      <div className="grid md:grid-cols-2 gap-[60px] items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow">{about.eyebrow}</div>
          <h2 className="text-[30px] md:text-[34px] mt-3.5 mb-4">{about.heading}</h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-text-muted mb-4 max-w-[460px]">
              {p}
            </p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid gap-4"
        >
          {stats.map((stat) => (
            <div key={stat.id} className="stat-card">
              <span className="text-[13px] text-text-muted">{stat.label}</span>
              <span className="font-mono text-2xl text-brass font-semibold">{stat.value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
