import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClock, faMoneyBillWave, faBirthdayCake, faUserTie } from '@fortawesome/free-solid-svg-icons';
import bake from '../img/bake.jfif';
import {About, Description, Image} from '../styles';
import styled from 'styled-components';
import {scrollReveal, fade} from '../animation';
import {useScroll} from './useScroll';
import {motion} from 'framer-motion';

const ServicesSection = () => {
    const [element, controls] = useScroll();
    const style = {
        fontSize: "1.5rem", 
        color:"#2b737c"
    }
    return ( 
        <Services animate={controls} ref={element} initial="hidden" variants={scrollReveal}>
            <Description>
                <h2>High <span>Quality </span>Cakes</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon style={style} icon={faClock} />
                            <h3>Fast Service</h3>
                        </div>
                        <p>Within 24hrs in most cases!</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon style={style} icon={faMoneyBillWave} />
                            <h3>Affordable</h3>
                        </div>
                        <p>Feel free to reach out for any promotial pricing/discounts!</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon style={style} icon={faBirthdayCake} />
                            <h3>Custom Made</h3>
                        </div>
                        <p>Dream Big!</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon style={style} icon={faUserTie} />
                            <h3>Professional Service</h3>
                        </div>
                        <p>I’ve been baking since I was young but professionally for eight years.</p>
                    </Card>
                </Cards>
            </Description>
            {/* <Image>
                <img src={bake} alt='bake' />
            </Image> */}
            <Image>
                <motion.img variants={fade} src={bake} alt="cake"/>
            </Image>
        </Services>
     );
}

const Services = styled(About)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width:70%;
        padding: 2rem 0rem 4rem 0rem; 
    }
   
    @media (max-width: 400px){
        h2{
        padding: 5rem 0rem;
    }
    }

    @media only screen and (min-width: 401px)  and  (max-width: 768px){
        p{
            width:100%;
        }
    }
`

const Cards = styled.div `
    display: flex;
    flex-wrap: wrap;
    @media only screen and (max-width: 400px){
       justify-content:center;
    }

`

const Card = styled.div `
    flex-basis: 20rem;
    .icon{
        display: flex;
        align-items: center;
        h3{
            margin-left: 1rem;
            padding: 1rem;
        }
    }
    @media only screen and (max-width: 400px){
        flex-basis: 15rem;
    }
    h3{
        font-size: 2rem;
    }
    @media only screen and (min-width: 401px)  and  (max-width: 768px){
        flex-basis: 25rem;
        text-align:center;
    }

`
 
export default ServicesSection;