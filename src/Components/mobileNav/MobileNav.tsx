import {
  HouseDoor,
  Lightbulb,
  Link as LinkIcon,
  Person,
} from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";
import { resumeDownloadUrl } from "../../constants/resume";
import { playNavSound } from "../utils/utils";
import "./styles.css";

interface MobileNavProps {
  toggleNav: boolean;
  onDismissToggle: () => void;
}

const MobileNav = ({ toggleNav, onDismissToggle }: MobileNavProps) => {
  const { t } = useTranslation();

  function handleNavClick() {
    playNavSound();
    onDismissToggle();
  }

  return (
    <nav className={`popoverNav ${!toggleNav ? "is-hidden" : ""}`}>
      <div className="popoverNavItems">
        <Link to={ROUTES.HOME} onClick={handleNavClick}>
          <div className="popoverNavItem">
            <HouseDoor />
            {t("nav.home")}
          </div>
        </Link>
        <Link to={ROUTES.ABOUT} onClick={handleNavClick}>
          <div className="popoverNavItem">
            <Person />
            {t("nav.about")}
          </div>
        </Link>
        <Link to={ROUTES.SKILLS} onClick={handleNavClick}>
          <div className="popoverNavItem">
            <Lightbulb />
            {t("nav.skills")}
          </div>
        </Link>
        <a
          href={resumeDownloadUrl}
          download="garrett-abouzeid-resume.pdf"
          onClick={handleNavClick}
        >
          <div className="popoverNavItem">
            <LinkIcon />
            Resume
          </div>
        </a>
      </div>
    </nav>
  );
};

export default MobileNav;
