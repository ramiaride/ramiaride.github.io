import React from 'react';
import ShowcaseItem from './components//Graphic-comp/ShowcaseItem';
import './styles/graphicdesign.css'; 

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

// 👆 Replace with real 2024 assets as needed

function GraphicDesign() {
  const itemobjects2025 = [
    { src: A2, title: "ACAI SANTO SPIRITO", width: 500, height: 300 },
    { src: A1, title: "", width: 200, height: 300 },
    { src: A3, title: "RAMI ARIDE LOGO", width: 500, height: 300 },
    { src: A4, title: "", width: 200, height: 300 },
    { src: A5, title: "TWELVE DESIGN LOGO", width: 200, height: 300 },
    { src: A6, title: "SANTO FALAFEL BUSINESS CARD", width: 500, height: 300 },
    { src: A7, title: "", width: 500, height: 300 },
    { src: A8, title: "", width: 500, height: 300 },
    { src: A9, title: "BEDROOM POSTER ", width: 280, height: 300 },
    { src: A10, title: "", width: 280, height: 300 },
    { src: A11, title: "", width: 500, height: 300 },
  ];

  const itemobjects2024 = [
   
    { src: B2, title: "PERFUME POSTER", width:200, height: 300 },
     { src: B3, title: "MUG POSTER", width:200, height: 300 },
   { src: B4, title: "BLACK PEPPER POSTER", width:200, height: 300 },
    { src: B5, title: "LAILA LOGO", width:200, height: 300 },
     { src: B7, title: "TORRE DIVINA LOGO", width:200, height: 300 },
    { src: B8, title: "", width:200, height: 300 },
    { src: B6, title: "LION LOGO", width:480, height: 300 },
     { src: B1, title: "ACCADEMIA ITALIANA ENTRANCE WALLPAPER", width:1200, height: 300 },
    

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
