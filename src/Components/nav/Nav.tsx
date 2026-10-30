import {
  HouseDoor,
  Lightbulb,
  Link as LinkIcon,
  List,
  Person,
} from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";
import { resumeDownloadUrl } from "../../constants/resume";
import { playNavSound } from "../utils/utils";
import "./styles.css";

interface NavProps {
  onToggleNav: () => void;
}

const Nav = ({ onToggleNav }: NavProps) => {
  const { t } = useTranslation();

  return (
    <nav className="nav">
      <h1 className="navTitle">GSA (website in progress)</h1>
      <div className="navItems">
        <Link className="routeLink" to={ROUTES.HOME} onClick={playNavSound}>
          <div className="navItem">
            <HouseDoor />
            {t("nav.home")}
          </div>
        </Link>
        <Link className="routeLink" to={ROUTES.ABOUT} onClick={playNavSound}>
          <div className="navItem">
            <Person />
            {t("nav.about")}
          </div>
        </Link>
        <Link className="routeLink" to={ROUTES.SKILLS} onClick={playNavSound}>
          <div className="navItem">
            <Lightbulb />
            {t("nav.skills")}
          </div>
        </Link>
        <a
          className="resumeLink"
          href={resumeDownloadUrl}
          download="garrett-abouzeid-resume.pdf"
          onClick={playNavSound}
        >
          <div className="navItem">
            <LinkIcon />
            Resume
          </div>
        </a>
      </div>
      <button
        className="navItemsButton"
        aria-label={t("nav.toggleNav")}
        onClick={() => {
          playNavSound();
          onToggleNav();
        }}
      >
        <List />
      </button>
    </nav>
  );
};

export default Nav;
