import React from "react";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import useScrollToHash from "@/hooks/useScrollToHash";
import FadeInSection from "@/components/FadeInSection";

const Home = () => {
    useScrollToHash();

    return (
        <>
            <main className="w-full min-h-screen h-full flex justify-center pb-10">
                <div className="h-full w-full mx-auto">
                    <FadeInSection>
                        <About />
                    </FadeInSection>
                    <FadeInSection delay={0.2}>
                        <Skills />
                    </FadeInSection>
                    <section id="work-experience">
                        <FadeInSection delay={0.3}>
                            <Experience />
                        </FadeInSection>
                    </section>
                    <section id="projects">
                    <FadeInSection delay={0.3}>
                        <Projects />
                        </FadeInSection>
                    </section>
                </div>
            </main>
        </>
    );
};

export default Home;
