import { LayoutGroup } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";
import { m } from "framer-motion";
import Toggle from "./Toggle";

const FaqSection = () => {
  const [element, controls] = useScroll();

  return (
    <m.div
      className="faq"
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Questions?
        <span>FAQ</span>
      </h2>
      <LayoutGroup>
        <Toggle title="How Long Does Delivery Take?">
          <div className="answer">
            <p>Delivery is available within 24hrs in most cases!</p>
          </div>
        </Toggle>
        <Toggle title="What's Your Specialty?">
          <div className="answer">
            <p>I specialize in custom cakes for any occasion!</p>
          </div>
        </Toggle>
        <Toggle title="What Forms Of Payment Do You Accept?">
          <div className="answer">
            <p>Cash, Venmo, Zelle, and Cash App.</p>
          </div>
        </Toggle>
        <Toggle title="Do You Deliver?">
          <div className="answer">
            <p>Yes! Delivery is available within a 25 mile radius.</p>
          </div>
        </Toggle>
      </LayoutGroup>
    </m.div>
  );
};

export default FaqSection;
