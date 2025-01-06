import { Link } from "react-router-dom";
import Wave from "../components/Wave";
import cake1 from "../img/Cakes/cake1.jpg";
import { m } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";

const AboutMe = () => {
  return (
    <m.div className="about" initial="hidden" animate="show">
      <div className="description">
        <m.div className="title">
          <div className="hide">
            <m.h2 variants={titleAnim}>
              The More<span> Cake</span>,
            </m.h2>
          </div>
          <div className="hide">
            <m.h2 variants={titleAnim}>Batter</m.h2>
          </div>
        </m.div>
        <m.p variants={fade}>Contact me for all your sweet tooth needs!</m.p>
        <Link to="/contact">
          <m.button variants={fade}>Contact Me</m.button>
        </Link>
      </div>
      <div className="image">
        <m.img variants={photoAnim} src={cake1} alt="cake" />
      </div>
      <Wave />
    </m.div>
  );
};

export default AboutMe;
