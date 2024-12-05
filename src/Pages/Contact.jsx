import React from 'react'
import Wrapper from "../Wrapper.jsx";
import car from "../assets/car2.jpg";
const Contact = () => {
    let desc="Welcome, your one-stop solution for all car-related needs. From routine maintenance to advanced repairs, we ensure your vehicle runs at its best. Explore our range of services, including oil changes, brake inspections, tire services, and detailing. With skilled technicians and high-quality parts, we deliver excellence for every ride. Book your service today and give your car the care it deserves!";
  return (
    <div>
        <Wrapper
            BgImg={car}
            headBanner="Rev up your ride!."
            description={desc}
        />
    </div>
  )
}

export default Contact