import { footer } from "../data/content";

export default function Footer() {
  return (
    <footer className="py-11 border-t border-border">
      <div className="max-w-[1180px] mx-auto px-8 flex justify-between items-center flex-wrap gap-4">
        <div className="flex items-center gap-2.5 font-display font-semibold text-[15px]">
          <span className="brand-dot" />
          {footer.brand}
        </div>
        <div className="text-xs text-text-muted">{footer.tagline}</div>
        <div className="text-xs text-text-muted">{footer.copyright}</div>
      </div>
    </footer>
  );
}
