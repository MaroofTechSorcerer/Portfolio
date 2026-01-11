"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, Globe } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ProjectPageProps {
    params: {
        slug: string;
    };
}

export default function ProjectPage({ params }: ProjectPageProps) {
    const project = projects.find((p) => p.slug === params.slug);
    const [readmeContent, setReadmeContent] = useState<string>("");
    const [loading, setLoading] = useState(true);

    if (!project) {
        notFound();
    }

    useEffect(() => {
        async function fetchReadme() {
            if (!project?.githubRepoName) return;

            try {
                const response = await fetch(
                    `https://raw.githubusercontent.com/MaroofTechSorcerer/${project.githubRepoName}/main/README.md`
                );
                if (response.ok) {
                    const text = await response.text();
                    setReadmeContent(text);
                } else {
                    // Fallback to searching master branch if main fails
                    const responseMaster = await fetch(
                        `https://raw.githubusercontent.com/MaroofTechSorcerer/${project.githubRepoName}/master/README.md`
                    );
                    if (responseMaster.ok) {
                        const text = await responseMaster.text();
                        setReadmeContent(text);
                    } else {
                        setReadmeContent("No README found for this project.");
                    }
                }
            } catch (error) {
                console.error("Failed to fetch README", error);
                setReadmeContent("Failed to load project details.");
            } finally {
                setLoading(false);
            }
        }

        fetchReadme();
    }, [project]);

    return (
        <main className="flex flex-col items-center px-4 py-24 mx-auto max-w-4xl">
            <Link
                href="/"
                className="self-start mb-8 flex items-center gap-2 text-gray-600 hover:text-gray-950 transition"
            >
                <ArrowLeft size={20} /> Back to Home
            </Link>

            <div className="w-full relative h-[20rem] sm:h-[25rem] mb-12 rounded-xl overflow-hidden shadow-2xl">
                <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                    quality={95}
                />
            </div>

            <h1 className="text-4xl font-bold mb-4 text-center">{project.title}</h1>
            <p className="text-xl text-gray-600 mb-8 text-center max-w-2xl">
                {project.description}
            </p>

            <div className="flex gap-4 mb-12">
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full hover:scale-105 transition"
                    >
                        <Github size={20} /> GitHub
                    </a>
                )}

                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        className="flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-full hover:scale-105 transition dark:bg-white/10 dark:border-white/10"
                    >
                        <Globe size={20} /> Live Demo
                    </a>
                )}
            </div>

            <div className="w-full prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Project Details</h2>
                {loading ? (
                    <div className="flex justify-center py-10">Loading details...</div>
                ) : (
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            img: ({ node, ...props }) => <img {...props} className="rounded-lg shadow-md max-w-full my-8" />,
                            a: ({ node, ...props }) => <a {...props} className="text-blue-600 hover:underline cursor-pointer" target="_blank" rel="noopener noreferrer" />,
                            h1: ({ node, ...props }) => <h1 {...props} className="text-3xl font-bold mt-10 mb-6" />,
                            h2: ({ node, ...props }) => <h2 {...props} className="text-2xl font-bold mt-8 mb-4 border-b pb-2" />,
                            h3: ({ node, ...props }) => <h3 {...props} className="text-xl font-bold mt-6 mb-3" />,
                            p: ({ node, ...props }) => <p {...props} className="mb-6 leading-relaxed" />,
                            ul: ({ node, ...props }) => <ul {...props} className="list-disc pl-5 my-6 space-y-2" />,
                            ol: ({ node, ...props }) => <ol {...props} className="list-decimal pl-5 my-6 space-y-2" />,
                            li: ({ node, ...props }) => <li {...props} className="mb-2" />,
                            code: ({ node, ...props }) => <code {...props} className="bg-gray-100 dark:bg-white/10 rounded px-1 py-0.5 text-sm font-mono" />
                        }}
                    >
                        {readmeContent}
                    </ReactMarkdown>
                )}
            </div>
        </main>
    );
}
