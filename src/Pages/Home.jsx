import React from 'react'
import car from "../assets/car5.jpg";
import Wrapper from "../Wrapper.jsx";
const Home = () => {
    let desc = "Cars symbolize freedom and innovation, offering comfort and convenience in daily life. They connect people, enabling memorable road trips and adventures. With advancements in technology, modern cars prioritize safety, efficiency, and style. Electric vehicles promote sustainability, blending performance with eco-consciousness.A car is more than transport—it's a lifestyle statement !";
  return (
    <div>
        <Wrapper 
            BgImg={car}
            headBanner="Cars are not just a passion, they are an expression of freedom."
            description ={desc}
        />

    </div>
  )
}

export default Home;