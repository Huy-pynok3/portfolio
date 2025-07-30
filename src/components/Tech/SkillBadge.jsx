const SkillBadge = ({ icon, name, bgColor, textColor, size = 18, className = "", textSize = ""}) => {
    return (
      <div
        className={`flex h-6 items-center justify-center gap-1.5 px-4 rounded-full
          ${bgColor} ${textColor} ${className}`}
      >
        <img
          src={icon}
          alt={name}
          width={size}
          height={size}
          loading="lazy"
          decoding="async"
          className="text-transparent"
        />
        <p className={`${textSize} whitespace-nowrap`}>{name}</p>
      </div>
    );
  };
  
  export default SkillBadge;
  