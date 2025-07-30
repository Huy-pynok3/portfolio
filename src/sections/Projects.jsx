import React from "react";
import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
    return (
        <div id="projects" className="flex flex-col w-full mt-24">
            <h2 className="font-bold text-lg tracking-widest text-white uppercase mb-10">Projects</h2>
            <div className="flex flex-col w-full gap-12">
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
