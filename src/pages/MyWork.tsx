import { Link } from "react-router-dom";
import cake7 from "../img/Cakes/cake7.jpg";
import cake11 from "../img/Cakes/cake11.jpg";
import cake4 from "../img/Cakes/cake4.jpg";
import { m } from "framer-motion";
import { pageAnimation, fade, photoAnim, lineAnim } from "../animation";
import { useScroll } from "../components/useScroll";

const MyWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <m.div
      className="work"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="cake">
        <m.h2 variants={fade}>Cake 1</m.h2>
        <m.div variants={lineAnim} className="line" />
        <Link to="/work/cake1">
          <div className="hide">
            <m.img variants={photoAnim} src={cake7} alt="cake" />
            <div className="review-indicator">👆 Click to view reviews</div>
          </div>
        </Link>
      </div>
      <m.div
        className="cake"
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden"
      >
        <h2>Cake 2</h2>
        <m.div variants={lineAnim} className="line" />
        <Link to="/work/cake2">
          <div className="hide">
            <img src={cake11} alt="cake" />
            <div className="review-indicator">👆 Click to view reviews</div>
          </div>
        </Link>
      </m.div>
      <m.div
        className="cake"
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <h2>Cake 3</h2>
        <m.div variants={lineAnim} className="line" />
        <Link to="/work/cake3">
          <img src={cake4} alt="cake" />
        </Link>
      </m.div>
    </m.div>
  );
};

export default MyWork;
