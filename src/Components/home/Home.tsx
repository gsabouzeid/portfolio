import { useTranslation } from "react-i18next";
import "./styles.css";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="homePageClass">
      <h1 className="header">{t("home.title")}</h1>
      <p className="subTitle">{t("home.subTitle")}</p>
    </div>
  );
};

export default Home;
