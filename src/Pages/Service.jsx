import React from 'react'
import Wrapper from "../Wrapper.jsx";
import car from "../assets/car3.jpg";
const Service = () => {
    let desc ="Expert car services offering maintenance, repairs, detailing, and diagnostics. Ensuring your vehicle's peak performance, safety, and reliability with skilled technicians and top-quality care.";
    
  return (
    <div>
        <Wrapper
        BgImg={car}
        headBanner="Shiny paint, roaring engines, endless vibes"
        description={desc}
        />
    </div>
  )
}

export default Service;