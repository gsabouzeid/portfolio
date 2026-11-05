import { Trans, useTranslation } from "react-i18next";
import aboutImage from "../../assets/about.jpeg";
import boulderingImage from "../../assets/bouldering.jpg";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="aboutPage grid grid-cols-[auto] items-center justify-items-center md:grid-cols-2">
      <div className="w-[75%]" data-aos="fade-right">
        <img
          src={aboutImage}
          alt={t("about.picture1Alt")}
          className="h-auto w-125 rounded-[25px] shadow-[10px_10px_5px_black] transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <div
        className="p-10 text-[15px] md:[&>p]:text-[20px]"
        data-aos="fade-left"
      >
        <h2 className="text-center text-[30px] md:text-[40px]">
          <Trans
            i18nKey="about.section1Title"
            components={[<></>, <span className="text-sky-400" />]}
          />
        </h2>
        <p>
          <Trans
            i18nKey="about.section1Description1"
            components={[<></>, <span className="text-sky-400" />]}
          />
        </p>
        <p>
          <Trans
            i18nKey="about.section1Description2"
            components={[
              <></>,
              <span className="text-sky-400" />,
              <span className="text-sky-400" />,
              <span className="text-sky-400" />,
            ]}
          />
        </p>
        <ul className="text-[15px] text-sky-400 md:text-[20px]">
          <li>{t("about.skill1")}</li>
          <li>{t("about.skill2")}</li>
          <li>{t("about.skill3")}</li>
        </ul>
        <p>{t("about.expertiseIn")}</p>
        <ul className="text-[15px] text-sky-400 md:text-[20px]">
          <li>{t("about.skill4")}</li>
          <li>{t("about.skill5")}</li>
          <li>{t("about.skill6")}</li>
        </ul>
      </div>
      <div
        className="order-1 p-10 text-[15px] md:order-0 md:[&>p]:text-[20px]"
        data-aos="fade-right"
      >
        <h2 className="text-center text-[30px] md:text-[40px]">
          {t("about.section2Title")}
        </h2>
        <p>
          <Trans
            i18nKey="about.section2Description1"
            components={[<></>, <span className="text-sky-400" />]}
          />
        </p>
        <ul className="text-[15px] md:text-[20px]">
          <li>{t("about.section2Description1Subitem1")}</li>
          <li>{t("about.section2Description1Subitem2")}</li>
        </ul>
        <p>
          <Trans
            i18nKey="about.section2Description2"
            components={[<></>, <span className="text-sky-400" />]}
          />
        </p>
        <ul className="text-[15px] md:text-[20px]">
          <li>{t("about.section2Description2Subitem1")}</li>
        </ul>
        <p>
          <Trans
            i18nKey="about.section2Description3"
            components={[<></>, <span className="text-sky-400" />]}
          />
        </p>
        <ul className="text-[15px] md:text-[20px]">
          <li>{t("about.section2Description3Subitem1")}</li>
          <li>{t("about.section2Description3Subitem2")}</li>
        </ul>
      </div>
      <div className="w-[75%]" data-aos="fade-left">
        <img
          src={boulderingImage}
          alt={t("about.picture2Alt")}
          className="h-auto w-125 rounded-[25px] shadow-[10px_10px_5px_black] transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
    </div>
  );
};

export default About;
