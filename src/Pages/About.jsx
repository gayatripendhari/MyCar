import React from 'react';
import Wrapper from "../Wrapper.jsx";
import car from "../assets/car4.jpg";

const About = () => {
  return (
    <div>
        <Wrapper 
        BgImg={car}
        headBanner="In the end, it’s not the destination—it’s the drive."
        description ="Car love is more than just admiring vehicles; it’s a passion that fuels excitement, freedom, and connection. For car enthusiasts, every curve, engine rev, and polished surface tells a story of innovation and style. Whether it’s the thrill of speed, the elegance of design, or the satisfaction of a well-maintained ride, car love is about embracing the art and engineering behind these machines that take us places and create unforgettable journeys!"
        />

    </div>
  )
}

export default About