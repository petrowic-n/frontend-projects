import { motion } from "framer-motion";
import { cta } from "../data/content";

export default function CTASection() {
  return (
    <section id="enroll" className="py-[110px] text-center px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="max-w-[720px] mx-auto px-10 py-14 rounded-[14px] border border-border bg-bg-panel
                   [background:radial-gradient(120%_140%_at_50%_0%,rgba(232,72,44,0.08),transparent_60%),var(--color-bg-panel)]"
      >
        <div className="eyebrow justify-center">{cta.eyebrow}</div>
        <h2 className="text-[28px] md:text-[32px] mt-3.5 mb-3.5">{cta.heading}</h2>
        <p className="text-text-muted mb-[30px]">{cta.sub}</p>
        <motion.a
          href="#"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="btn-primary"
        >
          {cta.buttonLabel}
        </motion.a>
      </motion.div>
    </section>
  );
}
