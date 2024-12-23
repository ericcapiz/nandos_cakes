import cake7 from '../img/Cakes/cake7.jpg';
import cake11 from '../img/Cakes/cake11.jpg';
import cake4 from '../img/Cakes/cake4.jpg';
import {motion} from 'framer-motion';
import {pageAnimation, scrollReveal, fade, photoAnim, lineAnim,slider, sliderContainer} from '../animation';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {useScroll} from '../components/useScroll';


const MyWork = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    return ( 
        
        <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            <Cake>
                <motion.h2 variants={fade}>Cake 1</motion.h2> 
                <motion.div variants={lineAnim} className="line"> </motion.div>
                    <Link to="/work/cake1">
                        <Hide>
                            <motion.img variants={photoAnim} src={cake7} alt="cake" />
                        </Hide>
                    </Link>
               
            </Cake>
            <Cake ref={element} variants={scrollReveal} animate={controls} initial="hidden">
                <h2>Cake 2</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                    <Link to="/work/cake2">
                        <Hide>
                            <img src={cake11} alt="cake" />
                        </Hide>
                    </Link>
                
            </Cake>
            <Cake ref={element2} variants={scrollReveal} animate={controls2} initial="hidden">
                <h2>Cake 3</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                    <Link to="/work/cake3">
                        <img src={cake4} alt="cake" />
                    </Link>
                
            </Cake>
        </Work>
     );
}

const Work = styled(motion.div) `
    min-height: 100vh;
    overflow:hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
    }

`
const Cake = styled(motion.div) `
    padding-bottom: 10rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    .line{
        width:60%;
        height: 0.5rem;
        background: white;
        margin-bottom: 3rem;
    }
    img{
        
        width: 100%;
        height: 70%;
        object-fit:cover;
        border-radius: 15%;
        opacity: 85%;

    }
    @media only screen and (max-width: 400px){
        
        h2{
            font-size: 2.3rem;
        }
        img{
            width:80vw;
        }
    }
    @media only screen and (min-width: 401px)  and  (max-width: 768px){
        img{
            width:60vw;
        }
    }
`
const Hide = styled.div `
    overflow:hidden;
`

const Frame1 = styled(motion.div)`
    position: fixed;
    left:0;
    top:10%;
    width:100%;
    height:100vh;
    background: #fffebf;
    z-index: 2;

`
const Frame2 = styled(Frame1) `
background:#ff8efb;
`
const Frame3 = styled(Frame1) `
background:#8ed2ff;
`
const Frame4 = styled(Frame1) `
background:#8effa0;
`
 
export default MyWork;