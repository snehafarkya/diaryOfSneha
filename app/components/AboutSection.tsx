"use client";

import Image from "next/image";
import { Sparkles, PenTool, Code, Activity } from "lucide-react";

export default function AboutSection() {
  return (
    <div className="relative py-0 text-center">
      {/* Background SVG */}
      <svg
        className="absolute top-0 left-0 w-full opacity-10 pointer-events-none"
        viewBox="0 0 1440 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="url(#gradient1)"
          d="M0,96L48,80C96,64,192,32,288,48C384,64,480,128,576,133.3C672,139,768,85,864,80C960,75,1056,117,1152,138.7C1248,160,1344,160,1392,160L1440,160V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0Z"
        ></path>
        <defs>
          <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Illustration */}
      <div className="  md:pb-20 py-20  max-w-5xl mx-auto sm:px-8 px-6 animate-fade-in">
      <div className="mb-10">
        <Image
          src="/about.png"
          alt="Creative Illustration"
          width={180}
          height={10}
          className="mx-auto rounded-full shadow-lg"
        />
      </div>

      <h2 className="text-4xl font-bold mb-4 text-green-900 ">
         Sneha: Coder, Creator, Connector ✨
      </h2>
      <p className="text-gray-700  text-lg mb-6">
        A passionate frontend developer & content creator blending code, creativity, and community. I build engaging user experiences with <strong>React</strong>, <strong>Next.js</strong>, <strong>Firebase</strong>, and <strong>Tailwind CSS</strong> — and I write about it too.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
        <div className="flex items-start gap-3">
          <Code className="text-blue-500 w-6 h-6 mt-1" />
          <div>
            <h4 className="font-semibold text-green-900 ">Code is my canvas</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              From browser APIs to micro-interactions, I bring ideas to life through performant and scalable UI systems.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <PenTool className="text-pink-500 w-6 h-6 mt-1" />
          <div>
            <h4 className="font-semibold text-green-900 ">Words that resonate</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              People from 50+ countries have engaged with my blogs — I break down tech and share stories that stick.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Sparkles className="text-yellow-500 w-6 h-6 mt-1" />
          <div>
            <h4 className="font-semibold text-green-900 ">Creative by nature</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Whether it’s a UI interaction or a storytelling hook — creativity fuels everything I do.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Activity className="text-green-500 w-6 h-6 mt-1" />
          <div>
            <h4 className="font-semibold text-green-900 ">Community driven</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              From speaking at conferences to contributing to open-source, I thrive on tech conversations.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
