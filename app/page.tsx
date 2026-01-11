import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Achievements from "@/components/achievements";

export default function Home() {
    return (
        <main className="flex flex-col items-center px-4 relative">
            <Header />
            <Hero />
            <SectionDivider />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Education />
            <Achievements />
            <Contact />
            <Footer />
        </main>
    );
}

function SectionDivider() {
    return (
        <div className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20"></div>
    );
}
