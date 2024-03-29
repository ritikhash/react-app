import React, { Component } from 'react'
import defaultBcg from "../images/room-1.jpeg"
//import Hero from "../components/hero"
import Banner from "../components/banner"
import {Link} from "react-router-dom"
import {RoomContext} from "../context"
import StyledHero from "../components/styledHero"


export default class SingleRoom extends Component {
    constructor(props){
        super(props)
       console.log(this.props)
        this.state={
            slug :this.props.match.params.slug,
            defaultBcg
        }
    }
    //componentDidMount
static contextType = RoomContext
    render() {
      const{getRoom} = this.context
      const room = getRoom(this.state.slug)  
      
     if (!room){
          return <div className="error">
              <h3>no such room could be found...</h3>
          <Link to='/room' className="btn-primary">back to room</Link>
          </div>;
          
      }
      const{name,description,capacity,size ,price,extras,breakfast,pets,images
    }= room;
    const[mainImg,...defaultImg] =images;
        return (
            <React.Fragment>
            <StyledHero img ={ mainImg|| this.state.defaultBcg} >
              <Banner tittle ={`${name} room`}>
                  <Link to ='/room' className="btn-primary">Back to rooms</Link>

                  </Banner>
            </StyledHero>
            <section className="single-room" >
                <div className="single-room-images">
                {defaultImg.map((item,index)=>{
                   return  <img key={index} src ={item} alt ={name} />
                })}
                </div>
                <div className= "single-room-info">
                    <article className ="desc"> 
                    <h3>details</h3>
                    <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>Info</h3>
            <h6>price: ${price}</h6>
            <h6>size: {size} sqft</h6>
            <h6>max capacity: {capacity>1 ?`${capacity} people`:`${capacity}person`}</h6>
            <h6>pets :{pets ?"pets  allowed":"no pets allowed"}</h6>   
            <h6>breakfast:{breakfast && "free breafast included"}</h6>      
              </article>
                </div>
            
                </section>
            <section className ="room-extras"></section>
            <h6>extras</h6>
             <ul>{extras.map((item,index)=>{return <li key={index} >-{item}</li>}    )}
                </ul> 
            </React.Fragment>
        )
    }
}
