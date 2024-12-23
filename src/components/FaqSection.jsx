import { About } from "../styles";
import Toggle from "./Toggle";
import styled from "styled-components";
import { LayoutGroup } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, control] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={control}
      initial="hidden"
    >
      <h2>Questions?</h2>
      <LayoutGroup>
        <Toggle title="How Do I Place An Order?">
          <div className="answer">
            <p>
              New customers must send me a message through the contact form or
              througn the Nando's Cakes FB group!
            </p>
            <p>Family, friends and repeat customers can text/call!</p>
          </div>
        </Toggle>
        <Toggle title="When Can I Expect My Order?">
          <div className="answer">
            <p>
              I understand time is important! As clients are always putting in
              orders, I recommend 24-48hrs notice to give me ample time to put
              in my best quality work!
            </p>
          </div>
        </Toggle>
        <Toggle title="How Do I Pay?">
          <div className="answer">
            <p>
              As a new customer I would ask to pay half up front and the rest
              upon delivery!
            </p>
            <p>
              I can take payment via Cashapp, PayPall, Zelle and in some cases
              cash. I will be implementing updates to take payments through the
              site!
            </p>
          </div>
        </Toggle>
        <Toggle title="What Pastries/Baked Foods Do You Make?">
          <div className="answer">
            <p>Any and everything that your sweet tooth desires!</p>
            <p>
              I just ask you be as detailed as possible with what you want and
              I'll work my magic.
            </p>
          </div>
        </Toggle>
      </LayoutGroup>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #063b42;
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

  /* @media (max-width: 400px){
        h2{
            font-size:2.3rem;
        }
        
    } */
`;

export default FaqSection;
