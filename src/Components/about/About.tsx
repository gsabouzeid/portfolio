import aboutImage from "../../assets/about.jpeg";
import boulderingImage from "../../assets/bouldering.jpg";
import "./styles.css";

const About = () => {
  return (
    <div className="aboutPage">
      <div className="aboutItem portraitImage" data-aos="fade-right">
        <img
          src={aboutImage}
          width={500}
          height={500}
          alt="Picture of Garrett"
          className="aboutImage"
        />
      </div>
      <div className="aboutItem" data-aos="fade-left">
        <p>Who am I?</p>
        <p>
          My name is Garrett Abou-Zeid, I am from the greater Twin Cities area
          in Minnesota. I grew interest in software development when I watched
          my mom develop mobile apps. I took my first programming class my
          senior year of high school and was instantly hooked.
        </p>
        <p>
          I graduated from the University of Minnesota Twin Cities in Spring
          2023 with a Bachelor of Science degree in Computer Science. I have
          been working professionally as a Frontend Engineer and have developed
          proficient skills in React.js, JavaScript, CSS, and much more.
        </p>
      </div>
      <div className="aboutItem boulderingText" data-aos="fade-right">
        <p>In my freetime...</p>
        <p>Bouldering (Climb in the V4 to V6 range)</p>
        <p>Bowling (Highest game I scored is 276)</p>
        <p>Endurance Events (Have done a tough mudder & sprint triathlon)</p>
      </div>
      <div className="aboutIte boulderingImage" data-aos="fade-left">
        <img
          src={boulderingImage}
          alt="Picture of Garrett"
          className="boulderingImage"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default About;
