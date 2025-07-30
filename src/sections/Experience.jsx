import React from "react";

const Experience = () => {
    return (
        <div id="work-experience" className="flex flex-col w-full mt-24">
            <h2 className="font-bold text-lg tracking-widest text-white uppercase mb-10">Work Experience</h2>
            <div className="flex flex-col w-full gap-14">
                <div className="flex w-full gap-10">
                    <p className="text-light-gray whitespace-nowrap max-sm:hidden">2024 - Present </p>
                    <div className="flex flex-col">
                        <p className="text-white text-lg font-semibold">Frontend Developer (Personal Projects)</p>
                        {/* <p className='text-light-gray mb-4'> • Full-time</p> */}
            
                        <p className="text-light-gray leading-relaxed mt-4 mb-4 text-[15px]">
                            Over the past year, I have dedicated myself to learning modern frontend development through
                            online courses, documentation, and hands-on projects. I built several responsive web
                            applications using <span className="text-white">React</span>,{" "}
                            <span className="text-white">TailwindCSS</span>,<span className="text-white"> Node.js</span>
                            , and <span className="text-white">MongoDB</span>, applying concepts such as component-based
                            architecture, state management, and RESTful APIs.
                        </p>

                        <p className="text-light-gray leading-relaxed text-[15px]">
                            I also practiced using <span className="text-white">Git</span> for version control and
                            deployed projects to platforms like <span className="text-white">Vercel</span> and{" "}
                            <span className="text-white">Render</span>. Through this journey, I’ve gained a strong
                            understanding of UI/UX fundamentals, frontend tooling, and modern development workflows —
                            preparing me to contribute effectively as a frontend intern.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
