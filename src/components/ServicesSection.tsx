import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMoneyBillWave,
  faBirthdayCake,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import bake from "../img/bake.jfif";
import { scrollReveal, fade } from "../animation";
import { useScroll } from "./useScroll";
import { m } from "framer-motion";
import type { CSSProperties } from "react";

const ServicesSection = () => {
  const [element, controls] = useScroll();

  const style: CSSProperties = {
    fontSize: "1.5rem",
    color: "#2b737c",
  };

  return (
    <m.div
      className="about services"
      animate={controls}
      ref={element}
      initial="hidden"
      variants={scrollReveal}
    >
      <div className="description">
        <h2>
          High <span>Quality </span>Cakes
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <FontAwesomeIcon style={style} icon={faClock} />
              <h3>Fast Service</h3>
            </div>
            <p>Within 24hrs in most cases!</p>
          </div>
          <div className="card">
            <div className="icon">
              <FontAwesomeIcon style={style} icon={faMoneyBillWave} />
              <h3>Affordable</h3>
            </div>
            <p>Feel free to reach out for any promotional pricing/discounts!</p>
          </div>
          <div className="card">
            <div className="icon">
              <FontAwesomeIcon style={style} icon={faBirthdayCake} />
              <h3>Custom Made</h3>
            </div>
            <p>Dream Big!</p>
          </div>
          <div className="card">
            <div className="icon">
              <FontAwesomeIcon style={style} icon={faUserTie} />
              <h3>Professional Service</h3>
            </div>
            <p>
              I've been baking since I was young but professionally for eight
              years.
            </p>
          </div>
        </div>
      </div>
      <div className="image">
        <m.img variants={fade} src={bake} alt="cake" />
      </div>
    </m.div>
  );
};

export default ServicesSection;
