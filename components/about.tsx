"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                I am currently studying <span className="font-medium">Computer Science and Engineering</span> at PSIT Kanpur.
                I have a strong passion for <span className="font-medium">Artificial Intelligence, Machine Learning, and Full-Stack Development</span>.
                I successfully interned at <span className="font-medium">Bracketworks.io</span>, where I built AI-driven tools.
            </p>
            <p>
                My core stack involves <span className="font-medium">Python, C++, Next.js, and Machine Learning libraries</span> like Pandas and NumPy.
                I am also a continuous learner, currently exploring <span className="font-medium">Agentic AI and Advanced NLP</span>.
                Outside of code, I enjoy solving algorithmic problems on <span className="font-medium">LeetCode (400+ solved)</span>.
            </p>
        </motion.section>
    );
}
