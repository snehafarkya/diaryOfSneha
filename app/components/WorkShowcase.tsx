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
  "todo-extension": "https://source.unsplash.com/featured/?todo,productivity,app",
  "ai-meme-generator": "https://source.unsplash.com/featured/?ai,meme,funny",
  "hashnode-api-use": "https://source.unsplash.com/featured/?blog,api,hashnode",
  "github-repo-evolution-finder": "https://source.unsplash.com/featured/?github,code,search",
  "Context-api-example": "https://source.unsplash.com/featured/?react,context,api",
  "peerlist-assignment": "https://source.unsplash.com/featured/?team,network,assignment",
  "Translate-Lingo": "https://source.unsplash.com/featured/?translate,language,ai"
};

export default function WorkShowcase() {
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      setLoading(true);
      const repoData = await Promise.all(
        SELECTED_REPOS.map(async (repo) => {
          const res = await fetch(`https://api.github.com/repos/snehafarkya/${repo}`);
          if (!res.ok) return null;
          return await res.json();
        })
      );
      setRepos(repoData.filter(Boolean));
      setLoading(false);
    }
    fetchRepos();
  }, []);

  return (
    <section className="mb-20 animate-fade-in-up">
      <h2 className="text-3xl font-bold mb-6 text-center">Selected Work</h2>
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
                title={repo.name.replace(/-/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase())}
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
