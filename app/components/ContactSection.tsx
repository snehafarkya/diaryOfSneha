"use client";
import { useState } from "react";
import { FaTwitter, FaLinkedin, FaYoutube, FaUserFriends } from "react-icons/fa";
import { SiPeerlist } from "react-icons/si";



export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
const socials = [
  {
    name: "Twitter",
    href: "https://twitter.com/sneha_farkya",
    icon: <FaTwitter className="text-sky-500 group-hover:scale-110 transition" />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/snehafarkya",
    icon: <FaLinkedin className="text-blue-700 group-hover:scale-110 transition" />,
  },
  {
    name: "Hashnode",
    href: "https://snehafarkya.hashnode.dev",
    icon: <SiPeerlist className="text-[#2962ff] group-hover:scale-110 transition" />,
  },
  {
    name: "Peerlist",
    href: "https://peerlist.io/snehafarkya",
    icon: <SiPeerlist className="text-green-700 group-hover:scale-110 transition" />,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@snehafarkya",
    icon: <FaYoutube className="text-red-500 group-hover:scale-110 transition" />,
  },
];
  // Simple validation
  function validate() {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.match(/^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/)) return "Please enter a valid email.";
    if (!form.message.trim()) return "Please enter your message.";
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    setStatus("sending");

    // Use Formspree (or similar) for real email delivery
    const res = await fetch("https://formspree.io/f/movlavre", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    });

    if (res.ok) {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
      setError("Something went wrong. Please try again later.");
    }
  }

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] py-8 px-2 sm:px-6 max-w-xl mx-auto  rounded-2xl my-12">
      {/* Decorative Sparkle */}
      <svg className="absolute top-4 left-4 w-8 h-8 opacity-30" viewBox="0 0 24 24" fill="none">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      <h2 className="text-2xl md:text-3xl font-extrabold mb-2 text-green-900 tracking-tight text-center drop-shadow">
        Let’s Make Something <span className="bg-yellow-100 px-2 rounded">Great</span> Together!
      </h2>
      <p className="text-base text-gray-700 mb-4 max-w-md mx-auto">
        Want to build, collaborate, or just connect? <br />
        Reach out via the form, email, or any of my socials below. <br />
        <span className="inline-flex items-center gap-1 font-semibold text-green-700">
          <FaUserFriends className="inline-block" /> Always happy to chat!
        </span>
      </p>
     
      <div className="flex items-center justify-center gap-3 mb-6">
        {socials.map(s => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            className="group bg-white/70 hover:bg-white border border-green-100 rounded-full p-2 shadow transition"
          >
            {s.icon}
          </a>
        ))}
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mx-auto rounded-xl shadow-none p-3 flex flex-col gap-3 bg-transparent"
        autoComplete="off"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="px-4 py-2 rounded-lg border border-green-100 focus:border-green-400 outline-none text-base"
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="px-4 py-2 rounded-lg border border-green-100 focus:border-green-400 outline-none text-base"
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={3}
          className="px-4 py-2 rounded-lg border border-green-100 focus:border-green-400 outline-none resize-none text-base"
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          required
        />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition font-semibold shadow mt-1 disabled:opacity-60 text-base"
        >
          {status === "sending" ? "Sending..." : "🚀 Send Message"}
        </button>
        {status === "sent" && (
          <div className="text-green-700 font-semibold mt-2">Thank you! Your message has been sent.</div>
        )}
      </form>
      <p className="mt-4 text-xs text-gray-500">
        Or just drop a line at{" "}
        <a
          href="mailto:sneha06.work@gmail.com"
          className="underline text-green-700"
        >
          sneha06.work@gmail.com
        </a>
      </p>
      {/* Decorative Sparkle */}
      <svg className="absolute bottom-4 right-4 w-8 h-8 opacity-20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" fill="#bbf7d0" />
        <circle cx="12" cy="12" r="4" fill="#fbbf24" />
      </svg>
    </section>
  );
}
