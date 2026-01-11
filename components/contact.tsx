"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { Mail } from "lucide-react";

export default function Contact() {
    const { ref } = useSectionInView("Contact");

    return (
        <motion.section
            id="contact"
            ref={ref}
            className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeading>Contact me</SectionHeading>

            <p className="text-gray-700 -mt-6 dark:text-white/80">
                Please contact me directly at{" "}
                <a className="underline" href="mailto:mohdmaroof12340@gmail.com">
                    mohdmaroof12340@gmail.com
                </a>{" "}
                or through this form.
            </p>

            <div className="mt-10 flex flex-col dark:text-black">
                <a
                    href="mailto:mohdmaroof12340@gmail.com"
                    className="group h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 flex items-center justify-center gap-2 mx-auto"
                >
                    Email Me <Mail className="text-white opacity-70 group-hover:translate-x-1 transition" />
                </a>
            </div>
        </motion.section>
    );
}
