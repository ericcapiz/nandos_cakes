import { Link } from "react-router-dom";
import Wave from "../components/Wave";
import cake1 from "../img/Cakes/cake1.jpg";
import { About, Description, Image, Hide } from "../styles";
import { m } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";

const AboutMe = () => {
  return (
    <About>
      <Description>
        <m.div initial="hidden" animate="show" className="title">
          <Hide>
            <m.h2 variants={titleAnim}>
              The More<span> Cake</span>,
            </m.h2>
          </Hide>
          <Hide>
            <m.h2 variants={titleAnim}>The Batter</m.h2>
          </Hide>
        </m.div>
        <m.p variants={fade}>Contact me for all your sweet tooth needs!</m.p>
        <Link to="/contact">
          <m.button variants={fade}>Contact Me</m.button>
        </Link>
      </Description>
      <Image>
        <m.img variants={photoAnim} src={cake1} alt="cake" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutMe;
