import styled from "styled-components";
import { Link } from "react-router-dom";
import cake7 from "../img/Cakes/cake7.jpg";
import cake11 from "../img/Cakes/cake11.jpg";
import cake4 from "../img/Cakes/cake4.jpg";
import { m } from "framer-motion";
import { pageAnimation, fade, photoAnim, lineAnim } from "../animation";
import { useScroll } from "../components/useScroll";
import { Hide } from "../styles";

const MyWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <Cake>
        <m.h2 variants={fade}>Cake 1</m.h2>
        <m.div variants={lineAnim} className="line" />
        <Link to="/work/cake1">
          <Hide>
            <m.img variants={photoAnim} src={cake7} alt="cake" />
          </Hide>
        </Link>
      </Cake>
      <Cake ref={element} variants={fade} animate={controls} initial="hidden">
        <h2>Cake 2</h2>
        <m.div variants={lineAnim} className="line" />
        <Link to="/work/cake2">
          <Hide>
            <img src={cake11} alt="cake" />
          </Hide>
        </Link>
      </Cake>
      <Cake ref={element2} variants={fade} animate={controls2} initial="hidden">
        <h2>Cake 3</h2>
        <m.div variants={lineAnim} className="line" />
        <Link to="/work/cake3">
          <img src={cake4} alt="cake" />
        </Link>
      </Cake>
    </Work>
  );
};

const Work = styled(m.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Cake = styled(m.div)`
  padding-bottom: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .line {
    width: 60%;
    height: 0.5rem;
    background: white;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70%;
    object-fit: cover;
    border-radius: 15%;
    opacity: 85%;
  }
`;

export default MyWork;
