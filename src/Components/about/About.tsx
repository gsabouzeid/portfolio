import { Trans, useTranslation } from "react-i18next";
import aboutImage from "../../assets/about.jpeg";
import boulderingImage from "../../assets/bouldering.jpg";
import "./styles.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="aboutPage">
      <div className="aboutItem" data-aos="fade-right">
        <img
          src={aboutImage}
          alt={t("about.picture1Alt")}
          className="aboutImage"
        />
      </div>
      <div className="aboutContainer" data-aos="fade-left">
        <h2 className="aboutHeading">
          <Trans
            i18nKey="about.section1Title"
            components={[<></>, <span className="coloredText" />]}
          />
        </h2>
        <p>
          <Trans
            i18nKey="about.section1Description1"
            components={[<></>, <span className="coloredText" />]}
          />
        </p>
        <p>
          <Trans
            i18nKey="about.section1Description2"
            components={[
              <></>,
              <span className="coloredText" />,
              <span className="coloredText" />,
              <span className="coloredText" />,
            ]}
          />
        </p>
        <ul className="coloredText">
          <li>{t("about.skill1")}</li>
          <li>{t("about.skill2")}</li>
          <li>{t("about.skill3")}</li>
        </ul>
        <p>{t("about.expertiseIn")}</p>
        <ul className="coloredText">
          <li>{t("about.skill4")}</li>
          <li>{t("about.skill5")}</li>
          <li>{t("about.skill6")}</li>
        </ul>
      </div>
      <div className="aboutContainer boulderingText" data-aos="fade-right">
        <h2 className="aboutHeading">{t("about.section2Title")}</h2>
        <p>
          <Trans
            i18nKey="about.section2Description1"
            components={[<></>, <span className="coloredText" />]}
          />
        </p>
        <ul>
          <li>{t("about.section2Description1Subitem1")}</li>
          <li>{t("about.section2Description1Subitem2")}</li>
        </ul>
        <p>
          <Trans
            i18nKey="about.section2Description2"
            components={[<></>, <span className="coloredText" />]}
          />
        </p>
        <ul>
          <li>{t("about.section2Description2Subitem1")}</li>
        </ul>
        <p>
          <Trans
            i18nKey="about.section2Description3"
            components={[<></>, <span className="coloredText" />]}
          />
        </p>
        <ul>
          <li>{t("about.section2Description3Subitem1")}</li>
          <li>{t("about.section2Description3Subitem2")}</li>
        </ul>
      </div>
      <div className="aboutItem" data-aos="fade-left">
        <img
          src={boulderingImage}
          alt={t("about.picture2Alt")}
          className="boulderingImage"
        />
      </div>
    </div>
  );
};

export default About;
