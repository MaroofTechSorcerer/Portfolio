"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { achievements } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Achievements() {
    const { ref } = useSectionInView("Achievements");

    return (
        <section id="achievements" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
            <SectionHeading>My Achievements</SectionHeading>
            <div className="flex flex-wrap justify-center gap-8">
                {achievements.map((item, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-100 max-w-[20rem] border border-black/5 rounded-xl overflow-hidden shadow-lg hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="relative h-40 w-full">
                            <Image
                                src={item.imageUrl}
                                alt={item.title}
                                fill
                                className="object-cover"
                                quality={95}
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-700 dark:text-white/70 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
