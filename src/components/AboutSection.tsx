import { m } from "framer-motion";
import { pageAnimation } from "../animation";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";

const About = () => {
  return (
    <m.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <div className="about-container">
        <h2>
          About <span>Nando's Cakes</span>
        </h2>
        <p>
          Bringing your sweet dreams to life with custom-made cakes for any
          occasion.
        </p>
      </div>
      <ServicesSection />
      <FaqSection />
    </m.div>
  );
};

export default About;
