'use client';

import CanvasLoader from "./components/common/CanvasLoader";
import ScrollWrapper from "./components/common/ScrollWrapper";
import Experience from "./components/Experience";
import Hero from "./components/hero";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <CanvasLoader>
      <ScrollWrapper>
        <Hero />
        <Hero />
        <Experience />
        <Footer />
      </ScrollWrapper>
    </CanvasLoader>
  );
};
export default Home;
