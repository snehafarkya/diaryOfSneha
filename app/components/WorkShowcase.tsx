"use client";

import { useEffect, useState } from "react";
import WorkCard from "./WorkCard";

const SELECTED_REPOS = [
  "todo-extension",
  "ai-meme-generator",
  "hashnode-api-use",
  "github-repo-evolution-finder",
  "Context-api-example",
  "peerlist-assignment",
  "Translate-Lingo"
];

const AI_IMAGES: Record<string, string> = {
  "todo-extension": "./work/todo.png",
  "ai-meme-generator": "./work/meme.png",
  "hashnode-api-use": "./work/hashnode.png",
  "github-repo-evolution-finder": "./work/github.png",
  "Context-api-example": "./work/context.png",
  "peerlist-assignment": "./work/peerlist.png",
  "Translate-Lingo": "./work/translateLingo.png"
};

// Helper: Capitalize and clean repo name
const formatRepoName = (name: string) =>
  name.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

export default function WorkShowcase() {
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      setLoading(true);
      const repoData = await Promise.all(
        SELECTED_REPOS.map(async (repo) => {
          try {
            const res = await fetch(`https://api.github.com/repos/snehafarkya/${repo}`);
            if (!res.ok) return null;
            return await res.json();
          } catch {
            return null;
          }
        })
      );
      setRepos(repoData.filter(Boolean));
      setLoading(false);
    }

    fetchRepos();
  }, []);

  return (
    <section id="work" className="mb-20 px-6 md:px-0 animate-fade-in-up">
      <h2 className="text-3xl font-bold mb-2 text-center text-green-900">
        🚀 Interface Engineering: A Frontend Showcase
      </h2>
      <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
        Explore a selection of React + Next.js projects enhanced with Tailwind CSS, Firebase Auth, and SEO-first performance thinking.
        Built with scalability, responsiveness, and modern UI/UX practices in mind.
      </p>

      {loading ? (
        <div className="text-center py-10 text-blue-500 animate-pulse">Loading projects...</div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {repos.length === 0 ? (
            <div className="col-span-full text-center text-gray-400">No projects found.</div>
          ) : (
            repos.map((repo) => (
              <WorkCard
                key={repo.id}
                image={AI_IMAGES[repo.name] || "/vercel.svg"}
                title={formatRepoName(repo.name)}
                description={repo.description || "No description provided."}
                tags={repo.topics?.length ? repo.topics : [repo.language || "JavaScript"]}
                repoUrl={repo.html_url}
              />
            ))
          )}
        </div>
      )}
    </section>
  );
}
