import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import profileImg from "@/public/profile.png";
import sentimentImg from "@/public/project_sentiment_1768121747170.png";
import dashboardImg from "@/public/project_dashboard_1768121765300.png";
import pdfImg from "@/public/project_pdf_1768121779958.png";
import chatImg from "@/public/project_chat_1768121794545.png";
import bracketLogo from "@/public/bracketworks.png";
import psitLogo from "@/public/psit.png";
import achievementPatent from "@/public/achievement_patent_v2.png";
import achievementCoding from "@/public/achievement_coding_1768124361037.png";
import achievementHackathon from "@/public/achievement_hackathon_1768124375270.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Achievements",
        hash: "#achievements",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiences = [
    {
        title: "Summer Intern",
        location: "Remote",
        description:
            "Collaborated with the tech team to develop an AI-based tool answering GA4 data queries using natural language.",
        icon: React.createElement(CgWorkAlt),
        date: "July 2025 - Nov 2025",
        company: "Bracketworks.io",
        logo: "/bracketworks.png",
    },
    {
        title: "B.Tech in CSE",
        location: "PSIT Kanpur",
        description:
            "Currently pursuing B.Tech with 8.29 SGPA.",
        icon: React.createElement(LuGraduationCap),
        date: "2022 - 2026",
        company: "Pranveer Singh Institute of Technology",
        logo: "/psit.png",
    },
] as const;

export const projects = [
    {
        title: "Voice-Driven Sentiment Analysis",
        description:
            "Speech-to-text pipeline for sentiment/sarcasm detection. Patent Pending.",
        tags: ["Python", "ML", "Patent Published"],
        imageUrl: "/project_sentiment_1768121747170.png",
        githubUrl: "https://github.com/MaroofTechSorcerer/Voice-Driven-Sentiment-Analysis-with-Intelligent-Sarcasm-Detection",
        slug: "voice-sentiment-analysis",
        githubRepoName: "Voice-Driven-Sentiment-Analysis-with-Intelligent-Sarcasm-Detection",
        liveUrl: null,
    },
    {
        title: "AI Agent Dashboard",
        description:
            "Engineered an AI-powered dashboard for monitoring datasets using Pattern Matching and Google Sheets API.",
        tags: ["Python", "Streamlit", "Google Sheets"],
        imageUrl: "/project_dashboard_1768121765300.png",
        githubUrl: "https://github.com/MaroofTechSorcerer/AI-AGENT-DASHBOARD",
        slug: "ai-agent-dashboard",
        githubRepoName: "AI-AGENT-DASHBOARD",
        liveUrl: "https://ai-agent-dashboard-maroof.streamlit.app/",
    },
    {
        title: "AI PDF Interpreter",
        description:
            "Built a web app to extract, summarize, translate, and convert PDF content using OpenAI's GPT model.",
        tags: ["React", "Python", "OpenAI API"],
        imageUrl: "/project_pdf_1768121779958.png",
        githubUrl: "https://github.com/MaroofTechSorcerer/Ai-PDF-Interpreter",
        slug: "ai-pdf-interpreter",
        githubRepoName: "Ai-PDF-Interpreter",
        liveUrl: null,
    },
    {
        title: "Realtime Chatting App",
        description:
            "Real-time chat with instant messaging via WebSockets.",
        tags: ["Node.js", "Socket.IO", "WebSockets"],
        imageUrl: "/project_chat_1768121794545.png",
        githubUrl: "https://github.com/MaroofTechSorcerer/Realtime-Chatting-App-Using-WebSockets",
        slug: "realtime-chat-app",
        githubRepoName: "Realtime-Chatting-App-Using-WebSockets",
        liveUrl: "https://realtime-chat-bot-using-websockets-maroof.onrender.com/",
    },
] as const;

export const skills = [
    "Python",
    "C++",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Streamlit",
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "Machine Learning",
    "Natural Language Processing",
    "SQL",
    "Git",
    "GitHub",
    "VS Code",
    "Google Collab",
] as const;

export const achievements = [
    {
        title: "Patent Published",
        description: "Voice-Driven Sentiment Analysis Application No. 202511046765",
        imageUrl: "/achievement_patent_v2.png",
    },
    {
        title: "Hackathon Winner",
        description: "Ranked 50th among 1000+ teams in a national hackathon.",
        imageUrl: "/achievement_hackathon_1768124375270.png",
    },
    {
        title: "Coding Excellence",
        description: "5-Star Problem Solver on HackerRank, 400+ LeetCode problems solved.",
        imageUrl: "/achievement_coding_1768124361037.png",
    },
] as const;
