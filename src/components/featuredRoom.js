import React, { Component } from 'react'
import { RoomContext } from "../context";
import Loading from "./Loading"
import Room from "./Room" 
import Tittle from "./tittle"
export default class FeaturedRoom extends Component {
    static contextType = RoomContext ;
    render() {
      let {loading,featuredRooms:rooms} = this.context
      let room = rooms.map(room => {return <Room key={room.id} room = {room} />})

        return (
            <section className="featuredRooms">
              <Tittle title={"Featured Rooms"}/>
              <div className ="featured-rooms-center">{loading?<Loading/>:room}</div>
              
                 </section>
        )
    }
}
