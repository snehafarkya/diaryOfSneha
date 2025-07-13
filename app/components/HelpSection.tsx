import Image from "next/image";

interface HelpCardProps {
  icon: string;
  iconBg: string;
  title: string;
  color: string;
  points: string[];
  badge: string;
  badgeColor: string;
  iconColor: string;
}

function HelpCard({
  icon,
  iconBg,
  title,
  color,
  points,
  badge,
  badgeColor,
  iconColor,
}: HelpCardProps) {
  return (
    <div className="relative bg-white rounded-2xl shadow-xl p-7 flex flex-col items-center hover:shadow-2xl transition group border border-green-100 hover:border-green-300">
      <div
        className={`absolute -top-6 left-1/2 -translate-x-1/2 ${iconBg} rounded-full p-2 shadow-md`}
      >
        <Image
          src={icon}
          alt={title}
          width={64}
          height={64}
          className="rounded-full group-hover:scale-110 transition"
          loading="lazy"
        />
      </div>
      <h3 className="font-semibold text-lg text-green-800 mt-8 mb-2 flex items-center gap-2">
        <span>{title}</span>
        <svg className={`w-5 h-5 ${iconColor}`} fill="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" r="10" fill={color} />
          <path
            d="M7 10l2 2 4-4"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </h3>
      <ul className="text-gray-600 text-sm space-y-1 text-left mt-2">
        {points.map((point, i) => (
          <li key={i}>• {point}</li>
        ))}
      </ul>
      <div className="mt-4 flex items-center gap-2">
        <span className={`inline-block ${badgeColor} text-xs px-3 py-1 rounded-full font-semibold`}>
          {badge}
        </span>
        <svg className={`w-4 h-4 ${iconColor}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M16.707 7.293a1 1 0 00-1.414 0L9 13.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
        </svg>
      </div>
    </div>
  );
}

const helpCards = [
  {
    icon: "/laptop.avif",
    iconBg: "bg-green-50",
    title: "Modern Frontend Development",
    color: "#bbf7d0",
    points: [
      "Responsive, accessible UIs",
      "React, Next.js, Tailwind CSS",
      "Performance & best practices",
      "Use of animations",
      "Modern technologies",
    ],
    badge: "Trusted by teams",
    badgeColor: "bg-green-100 text-green-700",
    iconColor: "text-green-400",
  },
  {
    icon: "/writing.avif",
    iconBg: "bg-yellow-50",
    title: "Technical Writing & Blogging",
    color: "#fef9c3",
    points: [
      "Clear, engaging documentation",
      "Tutorials, guides, and blog posts",
      "SEO & developer advocacy",
    ],
    badge: "4k+ readers",
    badgeColor: "bg-yellow-100 text-yellow-700",
    iconColor: "text-yellow-400",
  },
  {
    icon: "/content.jpeg",
    iconBg: "bg-pink-50",
    title: "Content Creation & Community",
    color: "#fce7f3",
    points: [
      "Educational videos & reels",
      "Community building",
      "Social media presence",
      "Recent LinkedIn impressions: 25k+",
    ],
    badge: "Community trusted",
    badgeColor: "bg-pink-100 text-pink-700",
    iconColor: "text-pink-400",
  },
];

export default function HelpSection() {
  return (
    <section className="relative py-16 md:py-24 px-6 sm:px-8 max-w-4xl mx-auto flex flex-col items-center text-center animate-fade-in-up">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-900">
        How I Can Help You Shine
      </h2>
      <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
        Whether you’re building a product, growing a community, or sharing
        knowledge, I bring creativity, clarity, and technical expertise to every
        project.
      </p>
      <div className="grid gap-8 md:grid-cols-3 w-full">
        {helpCards.map((card, i) => (
          <HelpCard key={i} {...card} />
        ))}
      </div>
      <p className="mt-10 text-md md:text-lg text-gray-700 max-w-xl mx-auto">
        <span className="font-semibold text-green-700">Let’s collaborate</span> to
        turn your ideas into impactful digital experiences!
      </p>
      <a
        href="https://cal.com/sneha-farkya"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-8 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full shadow transition text-lg"
      >
        📅 Schedule a Meet
      </a>
    </section>
  );
}
