import React from "react";
import avatar from '../assets/img/avataaars.svg'
export default function Header() {
  return (
   <div>
       <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
          <img className="masthead-avatar mb-5" src={avatar} alt="..." />
          <h1 className="masthead-heading text-uppercase mb-0">Start Bootstrap</h1>
          <div className="divider-custom divider-light">
            <div className="divider-custom-line" />
            <div className="divider-custom-icon"><i className="fas fa-star" /></div>
            <div className="divider-custom-line" />
          </div>
          <p className="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </header>
   </div>
  );
}