export interface SkillBadgesProps {
  badges: string[];
}

export const SkilllBadges = ({ badges = [] }: SkillBadgesProps) => {
  return (
    <div className="grid grid-cols-5">
      {badges.map((badge, i) => (
        <div key={i}>
          <div className="w-[80px] h-[80px] m-auto bg-black relative rounded-full">
            <img
              className="absolute bottom-0 left-0 right-0 m-auto p-3"
              src={"./logo-straight-big-gold.svg"}
              alt={badge}
            />
          </div>
          <p className="text-md font-bold my-[10px] text-black text-center">{badge}</p>
        </div>
      ))}
      <div></div>
    </div>
  );
};
