import {Link} from 'react-router-dom';
import Wave from './Wave';
import cake1 from '../img/Cakes/cake1.jpg'
import {About, Description, Image, Hide} from '../styles';
import {motion} from 'framer-motion';
import {titleAnim, fade, photoAnim} from '../animation';



const AboutSection = () => {

    

    return (
        <About>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim}>The More
                            <span> Cake</span>,</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>The Batter</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact me for all your sweet tooth needs!</motion.p>
                <Link to="/contact">
                <motion.button variants={fade}>Contact Me</motion.button>
                </Link>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={cake1} alt="cake"/>
            </Image>
            <Wave />
        </About>
    );
}


export default AboutSection;