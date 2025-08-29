import React from "react";
import './styles/Bottom.css';

function Bottom() {
  return (
    <div className="bottom-main">
      <div className="bottom-bar">
            <div className="frame-center">
                <div className="left-column"> 
                   <p className="contact-left">
          CONTACT</p>
          <div className="numbers-con"> 
                  <p className="numbers"> 
                    +393317889359<br></br>
                    +972545408049  </p>
                    <p className="numbers-spec"> 
                    Phone<br></br>
                    WhatsApp  </p>
                    </div>
                    <div>
                      
                    <p className="email"> RAMIARIDE@GMAIL.COM </p>
                    </div>
                  </div>
                   <div className="right-column"> 
                    <p className="contact-right">
          CONTACT</p>
          <div > 
               <a href="https://www.linkedin.com/in/rami-aride-28ab43355/" className="in" target="_blank" rel="noopener noreferrer">
      LINKEDIN
    </a>

                    </div>
                    <div> 
                       <a href="https://www.instagram.com/ramides12n/" className="gram" target="_blank" rel="noopener noreferrer">
      INSTAGRAM
    </a>
    </div>

                 </div>
                 </div>
          <div className="contacts-frame"> </div>
      </div>
    </div>
  );
}

export default Bottom;
