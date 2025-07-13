import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center min-h-[100vh] text-center space-y-6 mb-0 animate-fade-in overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Decorative SVGs and blobs */}
      {/* Laptop SVG */}
      <svg
        className="absolute left-8 top-8 w-16 h-16 opacity-60 z-0"
        viewBox="0 0 64 64"
        fill="none"
      >
        <rect x="12" y="28" width="40" height="20" rx="4" fill="#bbf7d0" />
        <rect x="18" y="34" width="28" height="8" rx="2" fill="#fff" />
        <rect x="22" y="50" width="20" height="4" rx="2" fill="#a7f3d0" />
        <circle cx="20" cy="30" r="2" fill="#fbbf24" />
        <circle cx="44" cy="32" r="1.5" fill="#f472b6" />
      </svg>
      {/* Updated Top Right SVG: Sparkling Star */}
      <svg
        className="absolute right-10 top-16 w-20 h-20 opacity-50 z-0"
        viewBox="0 0 80 80"
        fill="none"
      >
        <g>
          <circle cx="40" cy="40" r="18" fill="#a7f3d0" />
          <circle cx="40" cy="40" r="10" fill="#38bdf8" />
          <g>
            <path
              d="M40 18 L43 35 L60 40 L43 45 L40 62 L37 45 L20 40 L37 35 Z"
              fill="#fbbf24"
              opacity="0.7"
            />
          </g>
        </g>
        <circle cx="65" cy="22" r="2" fill="#fbbf24" />
        <circle cx="70" cy="30" r="1.2" fill="#f472b6" />
        <circle cx="60" cy="18" r="1.5" fill="#38bdf8" />
      </svg>
      {/* Writing SVG */}
      <svg
        className="absolute left-12 bottom-16 w-14 h-14 opacity-30 z-0"
        viewBox="0 0 56 56"
        fill="none"
      >
        <rect x="24" y="8" width="8" height="28" rx="4" fill="#fbbf24" />
        <polygon points="28,44 32,38 28,54 24,38" fill="#f59e42" />
        <path d="M40 18c-2-2-5-2-7 0-2-2-5-2-7 0-2 2-2 5 0 7l7 7 7-7c2-2 2-5 0-7z" fill="#f472b6" />
      </svg>
      {/* Subtle green circle */}
      <svg
        className="absolute right-24 bottom-8 w-16 h-16 opacity-20 z-0"
        viewBox="0 0 64 64"
        fill="none"
      >
        <circle cx="32" cy="32" r="32" fill="#a7f3d0" />
      </svg>
      {/* Sparkling Highlighted Banner */}
      {/* Hero Content */}
      <div className="flex flex-col md:flex-row items-center py-10 md:py-0 px-6 justify-center gap-10 w-full max-w-5xl mx-auto z-10">
        {/* Text Content */}
        <div className="order-2 md:order-1 flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 drop-shadow-lg animate-gradient-x bg-gradient-to-r from-blue-600 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Hi, I am Sneha
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 animate-fade-in-delay max-w-2xl">
            Crafting delightful web experiences and empowering others through code,
            blogs, and videos as a frontend developer & technical writer.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-4">
  <a
    href="#work" // or use a scroll-to anchor to your Work section
    className="bg-green-200 text-green-900 font-semibold px-8 py-3 rounded-full shadow hover:bg-green-300 transition"
  >
    See My Work
  </a>
  <a
    href="mailto:snehafarkya@gmail.com?subject=Let's Collaborate"
    className="border border-green-300 text-green-900 font-semibold px-8 py-3 rounded-full hover:bg-green-100 transition"
  >
    Let’s Collaborate
  </a>
</div>

        </div>
        {/* Hero Image */}
        <div className="order-1 md:order-2 flex-1 flex items-center justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full shadow-2xl overflow-hidden border-4 border-green-100 bg-white/70">
            <Image
              src="/hero.png"
              alt="Sneha Farkya Hero"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 16rem, 20rem"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-green-100 via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="relative  z-20 md:mt-4">
        <div className="flex items-center gap-3 px-6 md:py-3 py-1 md:rounded-xl bg-gradient-to-r from-yellow-100 via-pink-100 to-green-100 shadow-lg border border-yellow-200 animate-pulse-slow">
          {/* Sparkles Left */}
          <svg
            className="w-6 h-6 text-yellow-400 animate-spin-slow"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
              stroke="#fbbf24"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="font-bold text-base md:text-lg text-pink-700 drop-shadow-sm tracking-wide">
            Open for{" "}
            <span className="text-green-700">Remote</span>,{" "}
            <span className="text-blue-700">Freelance</span> &{" "}
            <span className="text-pink-600">Collaboration</span> Opportunities!
          </span>
          {/* Sparkles Right */}
          <svg
            className="w-6 h-6 text-pink-400 animate-spin-reverse-slow"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
              stroke="#ec4899"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

/* Add to your global CSS (e.g. globals.css or tailwind.config.js) for slow spin:
@layer utilities {
  .animate-spin-slow {
    animation: spin 2.5s linear infinite;
  }
  .animate-spin-reverse-slow {
    animation: spin-reverse 2.5s linear infinite;
  }
  @keyframes spin-reverse {
    100% {
      transform: rotate(-360deg);
    }
  }
}
*/
