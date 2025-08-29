import React from "react";
import About from "../components/About";
import Bottom from "../components/Bottom";  
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import TopBar from "../components/TopBar" ; 

function MainPage() {
    return (
<div className="main-page"> 
  <TopBar/>
      <HeroSection/>
      <ProjectSection/>
      <About/>
      <Bottom/>
      </div>
    );
    
}
export default MainPage;