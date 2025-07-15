"use client";

import HashnodeBlogs from "./HashnodeBlogs";
import { motion } from "framer-motion";

const portfolioItems = [
	{
		icon: "📝",
		iconBg: "bg-green-100",
		title: "Technical Writer (Economize)",
		description: [
			"Authored clear documentation on GCP, AWS, BigQuery",
			"Simplified complex concepts for diverse audiences",
			"Maintained accuracy and consistency",
		],
		link: null,
		linkText: null,
	},
	{
		icon: "🔗",
		iconBg: "bg-blue-100",
		title: "Dualite Blog Collaboration",
		description: [
			"I did a guest post on Dualite",
      "It's a Figma plugin that helps you convert designs to code",
      "I wrote about how to use it effectively",
		],
		link: "https://dualite.hashnode.dev",
		linkText: "Read the blog",
	},
	{
		icon: "🎥",
		iconBg: "bg-pink-100",
		title: "YouTube Creator",
		description: [
			"Published video tutorials on web development",
			"Engaged with the dev community through series & explainers",
		],
		link: "https://www.youtube.com/playlist?list=PLSmRHw8aaaanPVPBurWKIqMUOt9dodKoA",
		linkText: "Watch the playlist",
	},
	{
		icon: "🌟",
		iconBg: "bg-yellow-100",
		title: "Community & Advocacy",
		description: [
			"Core content & program team at Hack This Fall",
			"Authored hackathon guides & impact articles",
			"Hosted events, webinars, and won Twilio prize",
		],
		link: "https://hackthisfall.tech/blog",
		linkText: "Read article 3rd, 4th, and 6th",
	},
];

const cardVariants = {
	hidden: { opacity: 0, y: 40, scale: 0.95 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			delay: i * 0.13,
			type: "spring",
			stiffness: 120,
			damping: 18,
		},
	}),
	hover: {
		scale: 1.02,
		boxShadow: "0 8px 32px 0 rgba(34,197,94,0.13)",
		transition: { type: "spring", stiffness: 300, damping: 18 },
	},
};

function PortfolioCard({
	icon,
	iconBg,
	title,
	description,
	link,
	linkText,
	idx,
}: typeof portfolioItems[0] & { idx: number }) {
	return (
		<motion.div
			className={`relative bg-white rounded-2xl shadow-lg p-7 flex flex-col items-start text-left group border border-green-100 hover:border-green-300 transition overflow-hidden font-display`}
			variants={cardVariants as any}
			initial="hidden"
			animate="visible"
			whileHover="hover"
			custom={idx}
		>
			{/* Animated Icon */}
			<motion.div
				className={`absolute top-0 left-0 ${iconBg}  rounded-l-xl rounded-full  w-12 h-12 flex items-center justify-center text-xl shadow-lg border-2 border-white group-hover:scale-110 transition-all`}
				initial={{ scale: 0.8, rotate: -10 }}
				animate={{ scale: 1, rotate: 0 }}
				whileHover={{ scale: 1.15, rotate: 8 }}
				transition={{ type: "spring", stiffness: 200, damping: 15 }}
			>
				<span className="animate-bounce-slow absolute bottom-0.5">{icon}</span>
			</motion.div>
			{/* Fancy Title */}
			<h3 className="font-extrabold text-xl md:text-2xl text-green-900 mb-2 mt-10 flex items-center gap-2 tracking-tight font-display drop-shadow-sm">
				{title}
				
			</h3>
			{/* Description */}
			<ul className="text-gray-700 text-base space-y-1 mb-2 font-sans">
				{description.map((desc, i) => (
					<li key={i} className="relative pl-5">
						<span className="absolute left-0 top-1 text-green-400 font-bold">
							✦
						</span>
						{desc}
					</li>
				))}
			</ul>
			{/* Link */}
			{link && linkText && (
				<a
					href={link}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-block mt-2 text-green-700 underline text-xs font-semibold hover:text-green-900 transition"
				>
					{linkText}{" "}
					<span className="ml-1 animate-pulse">↗</span>
				</a>
			)}
			{/* Animated confetti or sparkle on hover */}
			<motion.div
				className="absolute right-6 bottom-6 pointer-events-none"
				initial={{ opacity: 0, scale: 0.7, rotate: 0 }}
				whileHover={{ opacity: 1, scale: 1.1, rotate: 20 }}
				transition={{ type: "spring", stiffness: 200, damping: 15 }}
			>
				<svg width="28" height="28" fill="none">
					<circle cx="14" cy="14" r="8" fill="#bbf7d0" />
					<circle cx="14" cy="14" r="4" fill="#fbbf24" />
				</svg>
			</motion.div>
		</motion.div>
	);
}

export default function ContentPortfolio() {
	return (
		<section id="work" className="relative py-16 md:py-24 px-6 sm:px-8 max-w-5xl mx-auto flex flex-col items-center text-center animate-fade-in-up font-display">
			<h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-green-900 tracking-tight drop-shadow">
				My Content Creation & Writing Portfolio
			</h2>
			<p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto font-sans">
				A journey of{" "}
				<span className="bg-yellow-100 px-2 rounded font-semibold">sharing</span>
				,{" "}
				<span className="bg-pink-100 px-2 rounded font-semibold">teaching</span>
				, and{" "}
				<span className="bg-green-100 px-2 rounded font-semibold">
					building community
				</span>{" "}
				through words, videos, and collaboration.
			</p>
			<motion.div
				className="grid md:grid-cols-2 gap-10 w-full mb-12"
				initial="hidden"
				animate="visible"
				variants={{
					visible: {
						transition: { staggerChildren: 0.12 },
					},
				}}
			>
				{portfolioItems.map((item, idx) => (
					<PortfolioCard key={item.title} {...item} idx={idx} />
				))}
			</motion.div>
			{/* Latest Hashnode Blogs */}
			<HashnodeBlogs />
			<style jsx global>{`
				.font-display {
					font-family: "Poppins", "Inter", "Segoe UI", Arial, sans-serif;
				}
				.animate-bounce-slow {
					animation: bounce 2.2s infinite;
				}
				@keyframes bounce {
					0%,
					100% {
						transform: translateY(0);
					}
					50% {
						transform: translateY(-10px);
					}
				}
			`}</style>
		</section>
	);
}