import React, { useState } from "react";
import img from '@/image'
import { useParams } from "react-router-dom";
import projects from "@/data/projects";
import SkillList from "@/components/Tech/SkillList";
import InlineLiveDemoDropdown from "@/components/InlineLiveDemoDropdown";

const ProjectDetails = () => {
    const { slug } = useParams();
    const project = projects.find(p => p.slug === slug);
    const [previewImage, setPreviewImage] = useState(null);

    if (!project) return <div className="text-white">Project not found</div>;

    return (
        <>  <div className="pt-10">
            <div className="w-full flex flex-wrap items-center justify-between gap-5 mb-10 max-md:flex-col">
                <h1 className="font-bold text-xl tracking-widest text-white max-sm:mb-4">{project.title}</h1>
                <div className="flex items-center gap-3 text-sm text-white max-sm:flex-col max-sm:w-full">
                    <a
                        target="_blank"
                        className="flex items-center gap-1 bg-gray-200/10 max-sm:w-full max-sm:justify-center rounded-full py-1 px-6 hover:bg-gray-200/20 transition-all"
                        href={project.source}
                    >
                        <img className='invert' src={img.brand_github} alt="" />
                        Github
                    </a>
                    {/* <a
                        target="_blank"
                        className="flex items-center gap-1 bg-gray-200/10 max-sm:w-full max-sm:justify-center rounded-full py-1 px-6 hover:bg-gray-200/20 transition-all"
                        href={project.demo}
                    >
                        <img className='invert' src={img.brand_world} alt="" />
                        Live Demo
                    </a> */}
                    {project.demos?.length > 1 ? (
                            <InlineLiveDemoDropdown demos={project.demos} />
                        ) : project.demos?.length === 1 ? (
                            <a
                                target="_blank"
                                className="flex items-center gap-1 bg-gray-200/10 max-sm:w-full max-sm:justify-center rounded-full py-1 px-6 hover:bg-gray-200/20 transition-all text-white text-sm"
                                href={project.demos[0].url}
                            >
                                <img className='invert' src={img.brand_world} alt="" />
                                {project.demos[0].label || "Live Demo"}
                            </a>
                        ) : null}

                    <a
                        target="_blank"
                        className="flex items-center gap-1 bg-gray-200/10 max-sm:w-full max-sm:justify-center rounded-full py-1 px-6 hover:bg-gray-200/20 transition-all"
                        href={project.video}
                    >
                        <img className='invert' src={img.brand_ytb} alt="" />
                        Video
                    </a>
                </div>
            </div>

            <p className="text-light-gray">{project.des}</p>

            <h2 className="font-bold text-base mt-16 tracking-widest text-white mb-5 uppercase">Tech stack</h2>
            <SkillList techs={project.techs} badgeClassName="h-7" badgeTextSize="text-sm" />

            <h2 className="font-bold text-base mt-16 tracking-widest text-white mb-5 uppercase">Key features</h2>
            <ul className="text-light-gray w-full space-y-2">
                {project.features.map((f, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: f }} />
                ))}
            </ul>

            <h2 className="font-bold text-base mt-16 tracking-widest text-white mb-5 uppercase">Project overview</h2>
            <div className="flex flex-col gap-4 w-full max-w-[700px]">
                <div className="border-2 border-light-gray/50 rounded-xl w-full h-[400px] overflow-hidden">
                    <iframe
                        src={project.videoEmbed}
                        width="100%"
                        height="100%"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        className="w-full h-full"
                        title={`${project.name} overview`}
                    ></iframe>
                </div>

                {project.screenshots.map((img, idx) => (
                <img
                    key={idx}
                    className="border-2 border-light-gray/50 rounded-xl cursor-pointer"
                    src={img}
                    alt={`${project.name} screenshot ${idx + 1}`}
                    onClick={() => setPreviewImage(img)}
                />
                ))}

                {/* Preview image modal */}
                {previewImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
                    onClick={() => setPreviewImage(null)}
                >
                    <img
                        src={previewImage}
                        alt="Preview"
                        className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
                    />
                </div>
                )}

            </div>
            </div>
        </>
    );
};

export default ProjectDetails;
