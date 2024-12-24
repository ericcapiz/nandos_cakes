import AboutMe from "./pages/AboutMe";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import MyWork from "./pages/MyWork";
import CakeDetail from "./pages/CakeDetail";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import ScrollTop from "./components/ScrollTop";

const App: React.FC = () => {
  const location = useLocation();

  return (
    <LazyMotion strict features={domAnimation}>
      <div className="App">
        <ScrollTop />
        <Nav />
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AboutMe />} />
            <Route path="/work" element={<MyWork />} />
            <Route path="/work/:id" element={<CakeDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </LazyMotion>
  );
};

export default App;
