import { AnimatePresence, motion } from "framer-motion";
import { useCountdown } from "../hooks/useCountdown";

function DigitBlock({ value, unit }) {
  return (
    <div className="flex-1 text-center">
      <div className="digit relative overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="block"
          >
            {String(value).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="digit-unit">{unit}</span>
    </div>
  );
}

export default function CountdownTimer({ targetDate, label, caption }) {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  return (
    <div className="relative flex items-center justify-center">
      <div className="instrument-ring" />
      <div className="instrument-panel">
        <div className="flex justify-between items-center mb-[18px] text-[11px] tracking-[0.13em] uppercase text-text-muted">
          <span>{label}</span>
          <span className="status-blip" />
        </div>

        <div className="flex justify-between gap-2">
          <DigitBlock value={days} unit="DAYS" />
          <DigitBlock value={hours} unit="HRS" />
          <DigitBlock value={minutes} unit="MIN" />
          <DigitBlock value={seconds} unit="SEC" />
        </div>

        <div className="mt-[18px] text-xs text-text-muted text-center">{caption}</div>
      </div>
    </div>
  );
}
