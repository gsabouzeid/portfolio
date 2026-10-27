import { t } from "i18next";
import awsIcon from "../assets/aws-icon.svg";
import cssIcon from "../assets/css3-icon.svg";
import cypressIcon from "../assets/cypress-icon.svg";
import datadogIcon from "../assets/datadog-icon.svg";
import gitIcon from "../assets/git-icon.svg";
import html5Icon from "../assets/html5-icon.svg";
import jestIcon from "../assets/jest-icon.svg";
import jsIcon from "../assets/js-icon.svg";
import kiroIcon from "../assets/kiro-icon.svg";
import playwrightIcon from "../assets/playwright-icon.svg";
import pythonIcon from "../assets/python-icon.svg";
import reactIcon from "../assets/react-icon.svg";
import saucelabsIcon from "../assets/saucelabs-icon.svg";
import seleniumIcon from "../assets/selenium-icon.svg";
import snykIcon from "../assets/snyk-icon.svg";
import tsIcon from "../assets/ts-icon.svg";

export interface Image {
  src: string;
  altText: string;
}

export interface Skill {
  name: string;
  image: Image;
}

interface Skills {
  languages: Skill[];
  frameworks: Skill[];
  tools: Skill[];
  misc: Skill[];
}

export const SKILLS: Skills = {
  languages: [
    {
      name: "JavaScript",
      image: {
        src: jsIcon,
        altText: t("skills.logoText.js"),
      },
    },
    {
      name: "TypeScript",
      image: {
        src: tsIcon,
        altText: t("skills.logoText.ts"),
      },
    },
    {
      name: "HTML5",
      image: {
        src: html5Icon,
        altText: t("skills.logoText.html"),
      },
    },
    {
      name: "CSS3",
      image: {
        src: cssIcon,
        altText: t("skills.logoText.css"),
      },
    },
    {
      name: "Python",
      image: {
        src: pythonIcon,
        altText: t("skills.logoText.python"),
      },
    },
  ],
  frameworks: [
    {
      name: "React.js",
      image: {
        src: reactIcon,
        altText: t("skills.logoText.react"),
      },
    },
    {
      name: "Jest",
      image: {
        src: jestIcon,
        altText: t("skills.logoText.jest"),
      },
    },
  ],
  tools: [
    {
      name: "Snyk",
      image: {
        src: datadogIcon,
        altText: t("skills.logoText.snyk"),
      },
    },
    {
      name: "Datadog",
      image: {
        src: snykIcon,
        altText: t("skills.logoText.datadog"),
      },
    },
    {
      name: "Selenium",
      image: {
        src: seleniumIcon,
        altText: t("skills.logoText.selenium"),
      },
    },
    {
      name: "Playwright",
      image: {
        src: playwrightIcon,
        altText: t("skills.logoText.playwright"),
      },
    },
    {
      name: "Cypress",
      image: {
        src: cypressIcon,
        altText: t("skills.logoText.cypress"),
      },
    },
    {
      name: "Sauce Labs",
      image: {
        src: saucelabsIcon,
        altText: t("skills.logoText.saucelabs"),
      },
    },
    {
      name: "Kiro IDE",
      image: {
        src: kiroIcon,
        altText: t("skills.logoText.kiro"),
      },
    },
  ],
  misc: [
    {
      name: "Git",
      image: {
        src: gitIcon,
        altText: t("skills.logoText.git"),
      },
    },
    {
      name: "AWS",
      image: {
        src: awsIcon,
        altText: t("skills.logoText.aws"),
      },
    },
  ],
};
