import React, { Component } from 'react'
import Tittle from "./tittle"
import {FaCocktail,FaBeer,FaHiking,FaShuttleVan} from "react-icons/fa"
export default class Services extends Component {
    state ={
        services:[
            {   icon: <FaCocktail/>,
                title:"Cocktail",
                info:"You're in for a huge treat, because here we've compiled 100 totally random"
                } ,
            {   icon: <FaBeer/>,
                    title:"Beer",
                    info:"You're in for a huge treat, because here we've compiled 100 totally random"
             }, 
             {   icon: <FaHiking/>,
                        title:"Hiking",
                        info:"You're in for a huge treat, because here we've compiled 100 totally random"
              } ,
              {   icon: <FaShuttleVan/>,
                            title:"Shuttle Van",
                            info:"You're in for a huge treat, because here we've compiled 100 totally random"
             }

        ]
    }
    render() {
        return (
            <section className = "services">
                <Tittle title = "Services"/>
                <div className="services-center">
                {this.state.services.map((item,index) =>{
                    return <article key={index} className="service">
                        <span>{item.icon}</span>
                           <h6>{item.title}</h6>
                          <p>{item.info}</p>
                          
                          </article>
                })}
                </div>
            </section>
        )
    }
}
