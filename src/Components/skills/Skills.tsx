import { useTranslation } from "react-i18next";
import { SKILLS } from "../../constants";
import SkillPill from "./SkillPill";
import "./styles.css";

const Skills = () => {
  const { t } = useTranslation();

  SKILLS.languages.sort((a, b) => a.name.localeCompare(b.name));
  SKILLS.frameworks.sort((a, b) => a.name.localeCompare(b.name));
  SKILLS.tools.sort((a, b) => a.name.localeCompare(b.name));
  SKILLS.misc.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="skillsContainer">
      <div
        className="categoryContainer"
        style={{ "--i": 0 } as React.CSSProperties}
      >
        <h2 className="skillHeading">{t("skills.languages")}</h2>
        <div className="skillPillContainer">
          {SKILLS.languages.map((lan) => (
            <SkillPill key={lan.name} skill={lan} />
          ))}
        </div>
      </div>
      <div
        className="categoryContainer"
        style={{ "--i": 1 } as React.CSSProperties}
      >
        <h2 className="skillHeading">{t("skills.frameworks")}</h2>
        <div className="skillPillContainer">
          {SKILLS.frameworks.map((fw) => (
            <SkillPill key={fw.name} skill={fw} />
          ))}
        </div>
      </div>
      <div
        className="categoryContainer"
        style={{ "--i": 2 } as React.CSSProperties}
      >
        <h2 className="skillHeading">{t("skills.tools")}</h2>
        <div className="skillPillContainer">
          {SKILLS.tools.map((tool) => (
            <SkillPill key={tool.name} skill={tool} />
          ))}
        </div>
      </div>
      <div
        className="categoryContainer"
        style={{ "--i": 3 } as React.CSSProperties}
      >
        <h2 className="skillHeading">{t("skills.misc")}</h2>
        <div className="skillPillContainer">
          {SKILLS.misc.map((m) => (
            <SkillPill key={m.name} skill={m} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
