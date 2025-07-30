import SkillBadge from "./SkillBadge";
import techMeta from "@/data/techMeta";

const SkillList = ({ techs, badgeClassName = "", badgeTextSize = "text-xs" }) => {
    return (
        <div className="grid grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2 items-center gap-2 mt-5">
            {techs.map((name, index) => {
                const meta = techMeta[name];

                if (!meta) return null;

                return (
                    <SkillBadge
                        key={index}
                        name={name}
                        icon={meta.icon}
                        bgColor={meta.bgColor}
                        textColor={meta.textColor}
                        size={meta.size}
                        className={badgeClassName}
                        textSize={badgeTextSize}
                    />
                );
            })}
        </div>
    );
};

export default SkillList;
