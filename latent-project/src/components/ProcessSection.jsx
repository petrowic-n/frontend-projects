import { motion } from "framer-motion";
import { processSection } from "../data/content";
import { steps } from "../data/steps";
import Stepper from "./Stepper";

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="py-[100px] bg-gradient-to-b from-transparent via-bg-panel-2/40 to-transparent"
    >
      <div className="max-w-[1180px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-[600px] mb-14"
        >
          <div className="eyebrow">{processSection.eyebrow}</div>
          <h2 className="text-[30px] md:text-[34px] mt-3.5">{processSection.heading}</h2>
          <p className="text-text-muted mt-3.5 text-base">{processSection.sub}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Stepper steps={steps} />
        </motion.div>
      </div>
    </section>
  );
}
