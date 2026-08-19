import { useEffect, useState } from "react";

function getTimeLeft(targetDate) {
  const diff = Math.max(0, new Date(targetDate).getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

/**
 * useCountdown — ticks down to targetDate once per second.
 * Keeps the interval/cleanup logic out of the component itself.
 */
export function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}
