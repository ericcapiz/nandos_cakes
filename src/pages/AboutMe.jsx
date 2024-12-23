import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ServicesSection from "../components/ServicesSection";
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';
import { Hide } from "../styles";

const AboutMe = () => {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <AboutSection/>
        <Hide>
            <ServicesSection/>
            <FaqSection />
        </Hide>
        </motion.div>
    );
}

export default AboutMe;