import { About } from "../styles";
import Toggle from "./Toggle";
import styled from "styled-components";
import { LayoutGroup } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";
import { m } from "framer-motion";

const FaqSection = () => {
  const [element, controls] = useScroll();

  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Questions? <span>FAQ</span>
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
    </Faq>
  );
};

const Faq = styled(m(About))`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
