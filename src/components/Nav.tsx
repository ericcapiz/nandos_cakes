import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <h1>
        <Link id="logo" to="/">
          Nando's Cakes
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/sample-cakes">Sample Cakes</Link>
        </li>
        <li>
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
