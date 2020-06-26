import React from 'react'
import Hero from "../components/hero"
import Banner from "../components/banner"
import {Link} from "react-router-dom"

export default function error() {
    return (
        <div>
            <Hero>
            <Banner 
            tittle ="ERROR 404" subTittle ="page not found"  > 
            
            <Link to ="/" className="btn-primary">HOME</Link></Banner>
            </Hero>
            </div>
    )
}
