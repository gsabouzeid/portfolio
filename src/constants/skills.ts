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
import i18n from "../i18n.ts";

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
        altText: i18n.t("skills.logoText.js"),
      },
    },
    {
      name: "TypeScript",
      image: {
        src: tsIcon,
        altText: i18n.t("skills.logoText.ts"),
      },
    },
    {
      name: "HTML5",
      image: {
        src: html5Icon,
        altText: i18n.t("skills.logoText.html"),
      },
    },
    {
      name: "CSS3",
      image: {
        src: cssIcon,
        altText: i18n.t("skills.logoText.css"),
      },
    },
    {
      name: "Python",
      image: {
        src: pythonIcon,
        altText: i18n.t("skills.logoText.python"),
      },
    },
  ],
  frameworks: [
    {
      name: "React.js",
      image: {
        src: reactIcon,
        altText: i18n.t("skills.logoText.react"),
      },
    },
    {
      name: "Jest",
      image: {
        src: jestIcon,
        altText: i18n.t("skills.logoText.jest"),
      },
    },
  ],
  tools: [
    {
      name: "Snyk",
      image: {
        src: snykIcon,
        altText: i18n.t("skills.logoText.snyk"),
      },
    },
    {
      name: "Datadog",
      image: {
        src: datadogIcon,
        altText: i18n.t("skills.logoText.datadog"),
      },
    },
    {
      name: "Selenium",
      image: {
        src: seleniumIcon,
        altText: i18n.t("skills.logoText.selenium"),
      },
    },
    {
      name: "Playwright",
      image: {
        src: playwrightIcon,
        altText: i18n.t("skills.logoText.playwright"),
      },
    },
    {
      name: "Cypress",
      image: {
        src: cypressIcon,
        altText: i18n.t("skills.logoText.cypress"),
      },
    },
    {
      name: "Sauce Labs",
      image: {
        src: saucelabsIcon,
        altText: i18n.t("skills.logoText.saucelabs"),
      },
    },
    {
      name: "Kiro IDE",
      image: {
        src: kiroIcon,
        altText: i18n.t("skills.logoText.kiro"),
      },
    },
  ],
  misc: [
    {
      name: "Git",
      image: {
        src: gitIcon,
        altText: i18n.t("skills.logoText.git"),
      },
    },
    {
      name: "AWS",
      image: {
        src: awsIcon,
        altText: i18n.t("skills.logoText.aws"),
      },
    },
  ],
};
