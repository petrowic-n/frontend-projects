import { motion } from "framer-motion";
import { nav } from "../data/content";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-[1180px] mx-auto flex items-center justify-between h-[76px] px-8">
        <div className="flex items-center gap-2.5 font-display font-semibold text-xl">
          <span className="brand-dot" />
          {nav.brand}
        </div>

        <ul className="hidden md:flex gap-9">
          {nav.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative text-text-muted text-sm font-medium transition-colors hover:text-text-primary
                           after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0
                           after:bg-red after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={nav.cta.href} className="btn-primary text-[13px] px-4 py-2.5">
          {nav.cta.label}
        </a>
      </div>
    </motion.nav>
  );
}
