"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiences } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Experience() {
    const { ref } = useSectionInView("Experience");

    return (
        <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
            <SectionHeading>My experience</SectionHeading>
            <div className="flex flex-col gap-8 max-w-[53rem] mx-auto">
                {experiences.map((experience, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-100 dark:bg-white/10 p-8 rounded-xl relative overflow-hidden border border-black/5 dark:border-white/5 flex gap-4 sm:gap-8 items-start"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <div className="shrink-0">
                            <Image
                                src={experience.logo}
                                alt={experience.company}
                                width={64}
                                height={64}
                                className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-full bg-white p-1"
                            />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold capitalize">{experience.title}</h3>
                            <p className="font-normal !mt-0 text-gray-700 dark:text-white/75">{experience.company}</p>
                            <p className="font-normal text-gray-600 dark:text-white/60 mb-4">{experience.date}</p>
                            <p className="mt-2 text-gray-700 dark:text-white/75">
                                {experience.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
