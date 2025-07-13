"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BlogPost {
  title: string;
  brief: string;
  url: string;
  coverImage?: { url: string };
  publishedAt: string;
  featured?: boolean;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 60, rotate: 4, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
  hover: {
    scale: 1.025,
    x: -4,
    boxShadow: "0 8px 32px 0 rgba(34,197,94,0.13)",
    transition: { type: "spring", stiffness: 300, damping: 18 },
  },
};

export default function HashnodeBlogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      setLoading(true);
      try {
        const query = `
          query {
            publication(host: "snehafarkya.hashnode.dev") {
              posts(first: 5) {
                edges {
                  node {
                    title
                    brief
                    url
                    featured
                    publishedAt
                    coverImage {
                      url
                    }
                  }
                }
              }
            }
          }
        `;
        const res = await fetch("https://gql.hashnode.com/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query }),
        });
        const data = await res.json();
        const posts =
          data?.data?.publication?.posts?.edges?.map((e: any) => e.node) || [];
        setBlogs(posts);
      } catch {
        setBlogs([]);
      }
      setLoading(false);
    }
    fetchBlogs();
  }, []);

  return (
    <div className="w-full mt-8 text-left">
      <h3 className="text-2xl text-center font-bold mb-6 text-green-900">
        Latest on My Hashnode Blog
      </h3>
      {loading ? (
        <div className="text-gray-500">Loading blogs...</div>
      ) : blogs.length === 0 ? (
        <div className="text-gray-500">No blogs found.</div>
      ) : (
        <motion.div
          className="grid gap-8 md:grid-cols-2 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {blogs.map((blog, idx) => (
              <motion.a
                key={blog.url + idx}
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group bg-white rounded-2xl shadow-lg p-0 flex flex-col overflow-hidden border border-green-100 hover:border-green-300 transition text-left"
                variants={cardVariants}
                whileHover="hover"
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {/* Animated gradient bar on left */}
                <motion.div
                  className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-green-200 via-green-400 to-green-100 opacity-80"
                  layoutId={`gradient-bar-${idx}`}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{
                    delay: 0.1 * idx,
                    duration: 0.5,
                    type: "spring",
                  }}
                  style={{
                    borderTopLeftRadius: 12,
                    borderBottomLeftRadius: 12,
                  }}
                />
                {blog.coverImage?.url && (
                  <motion.img
                    src={blog.coverImage.url}
                    alt={blog.title}
                    className="w-full h-44 object-cover rounded-t-2xl group-hover:brightness-105 transition"
                    initial={{ scale: 1.04, opacity: 0.85 }}
                    whileHover={{ scale: 1.09, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 180, damping: 18 }}
                  />
                )}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <h4 className="font-bold text-green-900 text-lg mb-1 group-hover:text-green-700 transition-colors">
                      {blog.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                      {blog.brief}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-auto">
                    <span className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded-full">
                      {new Date(blog.publishedAt).toLocaleDateString()}
                    </span>
                    {blog.featured && (
                      <span className="inline-block px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded-full ml-2">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
                {/* Subtle floating sparkle on hover */}
                <motion.div
                  className="absolute top-4 right-4 z-10"
                  initial={{ opacity: 0, scale: 0.7, rotate: 0 }}
                  whileHover={{ opacity: 1, scale: 1.1, rotate: 20 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <svg width="24" height="24" fill="none">
                    <circle cx="12" cy="12" r="6" fill="#bbf7d0" />
                    <circle cx="12" cy="12" r="3" fill="#fbbf24" />
                  </svg>
                </motion.div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}