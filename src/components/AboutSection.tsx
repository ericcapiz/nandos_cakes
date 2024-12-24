import { Link } from "react-router-dom";
import Wave from "../components/Wave";
import cake1 from "../img/Cakes/cake1.jpg";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";

const AboutSection = () => {
  return (
    <div className="about">
      <div className="description">
        <motion.div initial="hidden" animate="show" className="title">
          <div className="hide">
            <motion.h2 variants={titleAnim}>
              The More<span> Cake</span>,
            </motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnim}>The Batter</motion.h2>
          </div>
        </motion.div>
        <motion.p variants={fade}>
          Contact me for all your sweet tooth needs!
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fade}>Contact Me</motion.button>
        </Link>
      </div>
      <div className="image">
        <motion.img variants={photoAnim} src={cake1} alt="cake" />
      </div>
      <Wave />
    </div>
  );
};

export default AboutSection;
