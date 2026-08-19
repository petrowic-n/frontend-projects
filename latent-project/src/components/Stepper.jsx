import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Stepper({ steps }) {
  const [activeStep, setActiveStep] = useState(0);
  const progressPct = (activeStep / (steps.length - 1)) * 100;
  const current = steps[activeStep];

  return (
    <div>
      <div className="relative flex justify-between mb-[50px]">
        {/* base line */}
        <div className="absolute top-[22px] left-[22px] right-[22px] h-0.5 bg-border" />
        {/* animated progress line */}
        <motion.div
          className="absolute top-[22px] left-[22px] h-0.5 bg-red shadow-red origin-left"
          initial={false}
          animate={{ width: `${progressPct}%` }}
          transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
        />

        {steps.map((step, index) => {
          const isActive = index === activeStep;
          const isDone = index < activeStep;
          return (
            <button
              key={step.id}
              type="button"
              onClick={() => setActiveStep(index)}
              className="relative z-10 flex flex-col items-center gap-3 flex-1 bg-transparent border-0"
            >
              <div
                className={
                  isActive
                    ? "step-circle-active"
                    : isDone
                    ? "step-circle-done"
                    : "step-circle"
                }
              >
                {step.number}
              </div>
              <div className={isActive ? "step-title-active" : "step-title"}>
                {step.title}
              </div>
            </button>
          );
        })}
      </div>

      <div className="step-detail-panel">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
          >
            <div className="font-mono text-xs text-brass mb-2.5">{current.tag}</div>
            <h3 className="text-[22px] mb-2.5">{current.title}</h3>
            <p className="text-text-muted max-w-[560px]">{current.description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
