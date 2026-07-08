import Link from "next/link";

export default function Header({ lang, dict }) {
  const otherLang = lang === "es" ? "en" : "es";

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-night/80 backdrop-blur-md">
      <div className="max-w-content mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href={`/${lang}`}
          className="font-display text-sm font-semibold tracking-tight text-[#e7e7ea]"
        >
          Raymer Castañeda
          <span className="ml-2 text-xs font-mono text-faint">/ rcm84</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted sm:flex">
          <a href="#projects" className="transition-colors hover:text-[#e7e7ea]">
            {dict.nav.work}
          </a>
          <a href="#how" className="transition-colors hover:text-[#e7e7ea]">
            {dict.nav.how}
          </a>
          <a href="#contact" className="transition-colors hover:text-[#e7e7ea]">
            {dict.nav.contact}
          </a>
        </nav>

        <Link
          href={`/${otherLang}`}
          className="rounded-full border border-border px-3 py-1.5 text-xs font-mono text-muted transition-colors hover:border-accent/60 hover:text-accent"
          aria-label="Switch language"
        >
          {dict.nav.langSwitch}
        </Link>
      </div>
    </header>
  );
}
