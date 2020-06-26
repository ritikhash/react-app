import React from 'react'
import Hero from '../components/hero'
import {Link} from "react-router-dom"
import Banner from "../components/banner"
import RoomsContainer from '../components/RoomsContainer'
export default function Room() {
    return (
        <div>
          <Hero hero = "roomsHero">
            <Banner tittle = "Our Rooms" ><Link to="/" className ="btn-primary">HOME</Link></Banner>
          </Hero>
          <RoomsContainer/>
        </div>
    )
}
