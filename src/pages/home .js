import React from 'react'
import Hero from "../components/hero"
import Banner from "../components/banner"
import {Link} from "react-router-dom"
import Services from '../components/services'
import FeaturedRoom from "../components/featuredRoom"

export default function Home () {
    return (
       <div> 
                      <Hero hero ="defaultHero" >
               <Banner tittle = "Luxurious Rooms " subTittle = "at a cheap price of $599">
                   <Link to ="/Room" className= "btn-primary">OUR ROOMS</Link>
                   </Banner>
                   </Hero>   
                   <Services/>
                   <FeaturedRoom/>
                   
                   
                      
        </div>
    )
}
