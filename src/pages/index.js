import React, { useState } from 'react';
import Sidebar from '../comps/Sidebar';
import Navbar from '../comps/Navbar';
import HeroSection from '../comps/HeroSection';
import InfoSection from '../comps/InfoSection';
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from '../comps/InfoSection/Data';
import Services from '../comps/Services';
import Footer from '../comps/Footer/Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
