import React from "react";
import About from "../components/About";
import Bottom from "../components/Bottom";  
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import TopBar from "../components/TopBar" ; 
import useWindowSize from '../components/useWindowSize';
import BottomMobile from "../components/BottomMobile";

function MainPage() {
  const { width } = useWindowSize();
    return (
<div className="main-page"> 
  <TopBar/>
      <HeroSection/>
      <ProjectSection/>
      <About/>
      { width > 768?
      <Bottom/>:
      <BottomMobile/>
       }
      </div>
    );
    
}
export default MainPage;