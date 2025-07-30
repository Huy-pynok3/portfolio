import React from "react";
import SkillItem from "@/components/Skill/SkillItem";
import img from "@/image";

const skillData = [
    { name: "React", icon: img.react_icon },
    { name: "JavaScript", icon: img.javascript_icon },
    { name: "Tailwind", icon: img.tailwind_icon },
    { name: "HTML", icon: img.html_icon },
    { name: "CSS", icon: img.css_icon },
];

const Skills = () => {
    return (
        <div className="flex flex-col mt-7">
            <h2 className="font-bold text-lg tracking-widest text-white uppercase mb-10">Tech stack</h2>
            <div className="text-white grid grid-cols-5 gap-5 max-md:grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2">
                {skillData.map((skill, index) => (
                    <SkillItem key={index} name={skill.name} icon={skill.icon} />
                ))}
            </div>
        </div>
    );
};

export default Skills;
