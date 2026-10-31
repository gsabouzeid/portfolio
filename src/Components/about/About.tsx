import aboutImage from "../../assets/about.jpeg";
import boulderingImage from "../../assets/bouldering.jpg";
import "./styles.css";

const About = () => {
  return (
    <div className="aboutPage">
      <div className="aboutItem" data-aos="fade-right">
        <img src={aboutImage} alt="Picture of Garrett" className="aboutImage" />
      </div>
      <div className="aboutContainer" data-aos="fade-left">
        <h2 className="aboutHeading">
          Who am <span className="coloredText">I</span>?
        </h2>
        <p>
          My name is <span className="coloredText">Garrett Abou-Zeid</span>, I
          am from the greater Twin Cities area in Minnesota. I grew interest in
          software development when I watched my mom develop mobile apps. I took
          my first programming class my senior year of high school and was
          instantly hooked.
        </p>
        <p>
          I graduated from the{" "}
          <span className="coloredText">
            University of Minnesota Twin Cities
          </span>{" "}
          in Spring 2023 with a Bachelor of Science degree in{" "}
          <span className="coloredText">Computer Science</span>. I have been
          working professionally as a{" "}
          <span className="coloredText">Frontend Engineer</span> and have
          developed proficient skills in:
        </p>
        <ul className="coloredText">
          <li>React.js</li>
          <li>JavaScript</li>
          <li>CSS</li>
        </ul>
        <p>As well as developed expertise in:</p>
        <ul className="coloredText">
          <li>Responsive Web Design</li>
          <li>User Interface Design</li>
          <li>User Experience</li>
        </ul>
      </div>
      <div className="aboutContainer boulderingText" data-aos="fade-right">
        <h2 className="aboutHeading">In my freetime...</h2>
        <p>
          My main form of physical activity is{" "}
          <span className="coloredText">bouldering</span>:
        </p>
        <ul>
          <li>Climb in the V4 to V6 range</li>
          <li>Participated in a community climbing competition</li>
        </ul>
        <p>
          Team up with my friends in a{" "}
          <span className="coloredText">bowling</span> league:
        </p>
        <ul>
          <li>High game of 276 pins bowled (7 strikes in a row)</li>
        </ul>
        <p>
          Participate in <span className="coloredText">endurance events</span>:
        </p>
        <ul>
          <li>Tough Mudder 15k</li>
          <li>Sprint Triathlon</li>
        </ul>
      </div>
      <div className="aboutItem" data-aos="fade-left">
        <img
          src={boulderingImage}
          alt="Picture of Garrett Climbing"
          className="boulderingImage"
        />
      </div>
    </div>
  );
};

export default About;
