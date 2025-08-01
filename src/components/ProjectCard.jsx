import SkillList from "./Tech/SkillList";
import img from "@/image";

const ProjectCard = ({ project }) => {
    return (
        <div className="flex items-start gap-8 w-full">
            <div className="rounded-lg w-[640px] border border-light-gray/50 p-5 flex flex-col gap-5">
                <a aria-label={`See more about ${project.name}`} href={project.url}>
                    <img
                        alt="project-screenshot"
                        loading="lazy"
                        width="600"
                        height="380"
                        decoding="async"
                        src={project.image}
                        className="rounded-md object-cover text-transparent"
                    />
                </a>
                <div className="flex flex-col">
                    <p className="font-semibold text-white text-xl tracking-widest">{project.name}</p>
                    <p className="text-light-gray mt-3">{project.description}</p>
                    <SkillList techs={project.techs}/>
                    <div className="flex items-center gap-2 w-full mt-8 max-md:flex-col">
                        {/* {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                className="w-1/3 bg-gray-200/10 uppercase text-xs transition-all hover:bg-gray-200/20 rounded-full font-bold text-white flex items-center justify-center px-4 py-2 gap-2 max-md:w-full"
                            >
                                🌐 Live Demo
                            </a>
                        )} */}
                        {project.demos?.map((demo, index) => (
                            <a
                                key={index}
                                href={demo.url}
                                target="_blank"
                                className="w-1/3 bg-gray-200/10 uppercase text-xs transition-all hover:bg-gray-200/20 rounded-full font-bold text-white flex items-center justify-center px-4 py-2 gap-2 max-md:w-full"
                            >
                                🌐 {demo.label || `Live Demo ${index + 1}`}
                            </a>
                        ))}

                        {project.source && (
                            <a
                                href={project.source}
                                target="_blank"
                                className="w-1/3 bg-gray-200/10 uppercase text-xs transition-all hover:bg-gray-200/20 rounded-full font-bold text-white flex items-center justify-center px-4 py-2 gap-2 max-md:w-full"
                            >
                                <img className="invert" src={img.brand_github} alt="" />
                                Source Code
                            </a>
                        )}
                        {project.video && (
                            <a
                                href={project.video}
                                target="_blank"
                                className="w-1/3 bg-gray-200/10 uppercase text-xs transition-all hover:bg-gray-200/20 rounded-full font-bold text-white flex items-center justify-center px-4 py-2 gap-2 max-md:w-full"
                            >
                                <img className="invert" src={img.brand_ytb} alt="" />
                                Watch Video
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <a
                href={project.url}
                aria-label={`See more about ${project.name}`}
                className="flex flex-col p-2 max-sm:hidden rounded-full bg-gray-200/20 text-white font-medium text-sm"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                    <path d="M11 13l9 -9" />
                    <path d="M15 4h5v5" />
                </svg>
            </a>
        </div>
    );
};

export default ProjectCard;
