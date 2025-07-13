"use client";

import { useEffect, useState } from "react";

interface WorkCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  repoUrl: string;
}

const DUMMY_IMAGE = "/vercel.svg";

export default function WorkCard({ image, title, description, tags, repoUrl }: WorkCardProps) {
  const [clientImage, setClientImage] = useState<string>(DUMMY_IMAGE);
  const [imgError, setImgError] = useState(false);

  // Only set the image on the client to avoid hydration mismatch
  useEffect(() => {
    if (typeof window !== "undefined" && image) {
      setClientImage(image);
      setImgError(false);
    }
  }, [image]);

  return (
    <a
      href={repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 group"
    >
      <div className="relative h-40 w-full">
        <img
          src={imgError ? DUMMY_IMAGE : clientImage}
          alt={title}
          width={400}
          height={160}
          className="object-cover w-full h-full"
          onError={() => setImgError(true)}
          // Prevents SSR mismatch by only rendering the image after hydration
          style={{ display: clientImage ? "block" : "none" }}
        />
        {!clientImage && (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <img src={DUMMY_IMAGE} alt="dummy" width={80} height={32} />
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1 line-clamp-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-2 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <span key={tag} className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}