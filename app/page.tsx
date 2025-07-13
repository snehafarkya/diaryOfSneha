import HeroSection from "./components/HeroSection";
import HelpSection from "./components/HelpSection";
import WorkShowcase from "./components/WorkShowcase";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ContentPortfolio from "./components/ContentPortfolio";
import theme from "./theme";
export default function Home() {
  return (
    <main className={`${theme.primary} min-h-screen md:px-2 sm:px-6 py-0 font-sans overflow-x-hidden relative`}>
      {/* --- HERO FOLD DECORATIVE SVGs --- */}
      {/* Laptop with sparkles - top left */}
      {/*  */}
      {/* Suitcase with travel sticker - bottom left */}
      <svg
        className="hidden md:block absolute bottom-30 left-12 w-20 h-20 opacity-20 z-0"
        viewBox="0 0 64 64"
        fill="none"
      >
        <rect x="16" y="24" width="32" height="20" rx="4" fill="#f472b6" />
        <rect x="24" y="16" width="16" height="8" rx="2" fill="#f9a8d4" />
        {/* Travel sticker */}
        <circle cx="32" cy="34" r="4" fill="#fbbf24" stroke="#fff" strokeWidth="2" />
        <rect x="40" y="36" width="6" height="3" rx="1.5" fill="#38bdf8" />
      </svg>
      {/* Book/Blog SVG - bottom right */}
      <svg
        className="hidden md:block absolute bottom-12 right-10 w-20 h-20 opacity-20 z-0"
        viewBox="0 0 64 64"
        fill="none"
      >
        <rect x="12" y="16" width="40" height="32" rx="6" fill="#bbf7d0" />
        <rect x="20" y="24" width="24" height="4" rx="2" fill="#fbbf24" />
        <rect x="20" y="32" width="16" height="4" rx="2" fill="#f472b6" />
        <rect x="20" y="40" width="12" height="4" rx="2" fill="#38bdf8" />
      </svg>
      {/* Responsive mobile SVGs */}
      <svg
        className="md:hidden absolute top-4 left-2 w-14 h-14 opacity-25 z-0"
        viewBox="0 0 40 40"
        fill="none"
      >
        <rect x="4" y="12" width="32" height="16" rx="3" fill="#34d399" />
        <rect x="8" y="16" width="24" height="8" rx="2" fill="#fff" />
      </svg>
      <svg
        className="md:hidden absolute bottom-8 right-2 w-10 h-10 opacity-20 z-0"
        viewBox="0 0 32 32"
        fill="none"
      >
        <rect x="14" y="4" width="4" height="16" rx="2" fill="#fbbf24" />
        <polygon points="16,24 18,20 16,28 14,20" fill="#f59e42" />
      </svg>
      {/* --- AFTER FIRST FOLD: SCATTERED SVGs --- */}
      {/* Tech/Code SVG - left of HelpSection */}
      <svg
        className="hidden md:block absolute top-[110vh] left-20 w-16 h-16 opacity-15 z-0"
        viewBox="0 0 64 64"
        fill="none"
      >
        <rect x="10" y="24" width="44" height="24" rx="6" fill="#38bdf8" />
        <rect x="18" y="32" width="28" height="8" rx="2" fill="#fff" />
        <rect x="26" y="44" width="12" height="4" rx="2" fill="#a7f3d0" />
        <circle cx="20" cy="28" r="2" fill="#fbbf24" />
      </svg>
      {/* Blog/Article SVG - right of ContentPortfolio */}
      <svg
        className="hidden md:block absolute top-[170vh] right-0 w-16 h-16 opacity-15 z-0"
        viewBox="0 0 64 64"
        fill="none"
      >
        <rect x="14" y="18" width="36" height="28" rx="6" fill="#bbf7d0" />
        <rect x="22" y="28" width="20" height="4" rx="2" fill="#fbbf24" />
        <rect x="22" y="36" width="12" height="4" rx="2" fill="#f472b6" />
      </svg>
      {/* Pen/Write SVG - left of AboutSection */}
      <svg
        className="hidden md:block absolute top-[230vh] left-50 w-14 h-14 opacity-15 z-0"
        viewBox="0 0 56 56"
        fill="none"
      >
        <rect x="24" y="8" width="8" height="28" rx="4" fill="#fbbf24" />
        <polygon points="28,44 32,38 28,54 24,38" fill="#f59e42" />
        <path d="M40 18c-2-2-5-2-7 0-2-2-5-2-7 0-2 2-2 5 0 7l7 7 7-7c2-2 2-5 0-7z" fill="#f472b6" />
      </svg>
      {/* Travel/World SVG - right of AboutSection */}
      <svg
        className="hidden md:block absolute top-[320vh] right-50 w-16 h-16 opacity-10 z-0"
        viewBox="0 0 64 64"
        fill="none"
      >
        <ellipse cx="32" cy="32" rx="28" ry="16" fill="#38bdf8" />
        <circle cx="32" cy="32" r="8" fill="#fbbf24" />
        <rect x="28" y="40" width="8" height="4" rx="2" fill="#a7f3d0" />
      </svg>
      {/* --- HERO FOLD --- */}
      <section className="relative z-10 min-h-[100vh] flex items-center justify-center">
        <HeroSection />
      </section>
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Only show HelpSection after HeroSection */}
        <HelpSection />
        <ContentPortfolio />
        <WorkShowcase />
        <AboutSection />
        <ContactSection />
      </div>
    </main>
  );
}
