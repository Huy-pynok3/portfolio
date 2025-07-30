const SkillItem = ({ icon, name }) => {
    return (
        <button
            className="
            border border-light-gray/50 
            text-light-gray 
            rounded-lg p-3 h-24 
            flex flex-col items-center justify-center gap-1.5 
            transition-all ease-in-out duration-300 
            hover:bg-white/10 hover:text-white
            group cursor-pointer"
        >
            <img
                alt={`icon-${name}`}
                width="32"
                height="32"
                loading="lazy"
                decoding="async"
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110 text-transparent"
                src={icon}
            />
            <p className="text-light-gray group-hover:text-white">{name}</p>
        </button>
    );
};

export default SkillItem;
