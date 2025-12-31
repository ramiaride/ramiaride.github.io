import React from 'react';
import ShowcaseItem from './components//Graphic-comp/ShowcaseItem';
import './styles/graphicdesign.css'; 
import Topbar from '../components/TopBar';

import A1 from '/assets/graphic/2025/acai.png';
import A2 from '/assets/graphic/2025/let-the-taste-speak.png';
import A3 from '/assets/graphic/2025/RAH.png';
import A4 from '/assets/graphic/2025/logzRA.png';
import A5 from '/assets/graphic/2025/12.png';
import A6 from '/assets/graphic/2025/sf1.jpg';
import A7 from '/assets/graphic/2025/sf2.png';
import A8 from '/assets/graphic/2025/sf3.jpg';
import A9 from '/assets/graphic/2025/OMAR6.png';
import A10 from '/assets/graphic/2025/OMARNIGHT.png';
import A11 from '/assets/graphic/2025/letsplay3.jpg';

import B1 from '/assets/graphic/2024/1.png';
import B2 from '/assets/graphic/2024/amarina.png';
import B3 from '/assets/graphic/2024/muggy.png';
import B4 from '/assets/graphic/2024/BP LOGO.png';
import B5 from '/assets/graphic/2024/Lailaw.png';
import B6 from '/assets/graphic/2024/Asset 2.png';
import B7 from '/assets/graphic/2024/Artboard 1-100.jpg';
import B8 from '/assets/graphic/2024/TORRE.png';
import useWindowSize from '../components/useWindowSize';

// 👆 Replace with real 2024 assets as needed

function GraphicDesign() {
  const { width } = useWindowSize();
  const mobilelimit=800;

   function ifm (a,b) {
    return width<mobilelimit? b:a ;
  }

  const itemobjects2025 = [
    { src: A2, title: "ACAI SANTO SPIRITO", width: ifm(500,265), height:ifm(300,160) },
    { src: A1, title: "", width: ifm(200,107), height:ifm(300,160) },
    { src: A3, title: "RAMI ARIDE LOGO", width: ifm(500,265), height:ifm(300,160) },
    { src: A4, title: "", width: ifm(200,107), height:ifm(300,160) },
    { src: A5, title: "TWELVE DESIGN LOGO", width: ifm(200,107), height:ifm(300,160) },
    { src: A6, title: "SANTO FALAFEL BUSINESS CARD", width: ifm(500,265), height:ifm(300,160) },
    { src: A7, title: "", width: ifm(500,265), height:ifm(300,160) },
    { src: A8, title: "", width: ifm(500,265), height:ifm(300,160) },
    { src: A9, title: "BEDROOM POSTER ", width: ifm(280,150), height:ifm(300,160) },
    { src: A10, title: "", width: ifm(280,150), height:ifm(300,160) },
    { src: A11, title: "", width: ifm(500,265), height:ifm(300,160) },
  ];

  const itemobjects2024 = [
   
    { src: B2, title: "PERFUME POSTER", width: ifm(200,107), height:ifm(300,160) },
     { src: B3, title: "MUG POSTER", width: ifm(200,107), height:ifm(300,160) },
   { src: B4, title: "BLACK PEPPER POSTER", width: ifm(200,107), height:ifm(300,160) },
    { src: B5, title: "LAILA LOGO", width: ifm(200,107), height:ifm(300,160) },
     { src: B7, title: "TORRE DIVINA LOGO", width: ifm(200,107), height:ifm(300,160) },
    { src: B8, title: "", width: ifm(200,107), height:ifm(300,160) },
    { src: B6, title: "LION LOGO", width: ifm(480,256), height:ifm(300,160) },
     { src: B1, title: "ACCADEMIA ITALIANA ENTRANCE WALLPAPER", width: ifm(1200,640), height:ifm(300,160) },
    

    // Add more images here
  ];

  return (
    
    <div className='GraphicD'>
      
      {/* First carousel - 2025 */}
      <ShowcaseItem
        title="2025"
        carouselImages={itemobjects2025}
      />

      {/* Second carousel - 2024 */}
      <ShowcaseItem
        title="2024"
        carouselImages={itemobjects2024}
      />
    </div>
  );
}

export default GraphicDesign;
