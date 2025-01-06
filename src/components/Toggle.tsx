import { m } from "framer-motion";
import { useState, ReactNode } from "react";

interface ToggleProps {
  children: ReactNode;
  title: string;
}

const Toggle = ({ children, title }: ToggleProps) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <m.div layout className="question" onClick={() => setToggle(!toggle)}>
      <m.h4 layout className={toggle ? "active" : ""}>
        {title}
      </m.h4>
      {toggle && children}
      <div className="faq-line"></div>
    </m.div>
  );
};

export default Toggle;
