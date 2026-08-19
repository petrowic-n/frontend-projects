import { motion } from "framer-motion";
import { glossarySection } from "../data/content";
import { flashcards } from "../data/flashcards";
import Flashcard from "./Flashcard";

export default function GlossaryDeck() {
  return (
    <section id="glossary" className="py-[100px] max-w-[1180px] mx-auto px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-[600px] mb-14"
      >
        <div className="eyebrow">{glossarySection.eyebrow}</div>
        <h2 className="text-[30px] md:text-[34px] mt-3.5">{glossarySection.heading}</h2>
        <p className="text-text-muted mt-3.5 text-base">{glossarySection.sub}</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-[22px]">
        {flashcards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
          >
            <Flashcard front={card.front} back={card.back} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
