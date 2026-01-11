"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { projects } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, Globe } from "lucide-react";
import { useSectionInView } from "@/lib/hooks";

type ProjectProps = (typeof projects)[number];

function Project({ title, description, tags, imageUrl, githubUrl, liveUrl, slug }: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
            <Link href={`/projects/${slug}`} className="block h-full">
                <article className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 cursor-pointer h-full">
                    <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
                        <h3 className="text-2xl font-bold">{title}</h3>
                        <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                            {description}
                        </p>
                        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto mb-4">
                            {tags.map((tag, index) => (
                                <li
                                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                                    key={index}
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>
                        <div className="flex gap-2 mt-auto z-20">
                            {githubUrl && (
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        window.open(githubUrl, '_blank');
                                    }}
                                    className="p-2 bg-white rounded-full text-gray-700 hover:text-black transition borderBlack flex items-center gap-1 text-sm font-semibold px-4"
                                >
                                    <Github size={16} /> Code
                                </button>
                            )}
                            {liveUrl && (
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        window.open(liveUrl, '_blank');
                                    }}
                                    className="p-2 bg-gray-900 text-white rounded-full hover:bg-black transition borderBlack flex items-center gap-1 text-sm font-semibold px-4"
                                >
                                    <Globe size={16} /> Live
                                </button>
                            )}
                        </div>
                    </div>

                    <Image
                        src={imageUrl}
                        alt="Project I worked on"
                        quality={95}
                        width={400}
                        height={200} // Approximate aspect ratio
                        className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
            transition
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2

            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2

            group-even:right-[initial]
            group-even:-left-40"
                    />
                </article>
            </Link>
        </motion.div>
    );
}

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.5);

    return (
        <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
            <SectionHeading>My projects</SectionHeading>
            <div>
                {projects.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}
