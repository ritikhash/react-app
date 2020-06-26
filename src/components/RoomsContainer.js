import React from 'react'
import RoomFilter from "./RoomFilter"
import RoomList from "./RoomList"
import {withRoomConsumer} from "../context"
import Loading from "./Loading"
import Room from './Room'

function RoomContainer({context})
{
const {loading,sortedRooms,rooms}=context;
     if(loading) {
          return  <Loading/>
}
return (
<div>
<RoomFilter rooms={rooms}/>
<RoomList rooms={sortedRooms}/>
</div>)

}



export default withRoomConsumer(RoomContainer)





/*export default function RoomsContainer() {
    return (
        <RoomConsumer>
            {
                (value) =>{
                    const{rooms,sortedRooms,loading}=value
                    if(loading) {
                        return  <Loading/>
                    }
                    return (
                    <div>
                    hello from rooms container 
                    <RoomFilter rooms={rooms}/>
                    <RoomList rooms={sortedRooms}/>
                   </div>)
                
                }
            }
        </RoomConsumer>
      
    )
}*/
