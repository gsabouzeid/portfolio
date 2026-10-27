import type { Skill } from "../../constants";
import "./styles.css";

interface SkillProps {
  skill: Skill;
}

const SkillPill = ({ skill }: SkillProps) => {
  const name = skill.name;
  const image = skill.image;

  return (
    <div className="skillPill">
      <img src={image.src} width={25} height={25} alt={image.altText} />
      <p>{name}</p>
    </div>
  );
};

export default SkillPill;
