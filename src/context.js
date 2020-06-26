import React, { Component } from 'react'
import items from "./data"



const RoomContext = React.createContext();
 class RoomProvider extends Component {
  
    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
        type: "all",
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        maxSize:0,
        minSize:0,
        breakfast:false,
        pets: false
    };
     


    componentDidMount(){
        let rooms = this.formatData(items)
        let featuredRooms = rooms.filter(room => room.featured=== true)
         
        let maxPrice =  Math.max(...rooms.map(item => item.price)) 
              let maxSize =  Math.max(...rooms.map(item => item.size))
              this.setState({
                 rooms,
                  featuredRooms,
                  sortedRooms:rooms
                  ,loading:false,
                  price: maxPrice,
                  maxPrice
                  , maxSize
              })

    }
    formatData(items){
        let tempItems = items.map(item =>{
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url
            )

         let room ={...item.fields,images,id}
        
         return room;

        })
        return tempItems;
    }


    getRoom=(slug)=>{
        let tempRooms = [...this.state.rooms]
        const room  = tempRooms.find(room => room.slug == slug
            )
            return room
    }

handleChange = event=> {
    const target= event.target 
    const value = target.type === "checkbox" ? target.checked : target.value 
    const name =event.target.name;
    this.setState({[name]:value},this.filterRooms)
    
  
}
filterRooms = ()=>{
    let{rooms,type,  price,minSize,maxSize,breakfast,pets}= this.state
    
    price = parseInt(price)

    let tempRooms=[...rooms];
  
    //for room types
    if (type !== "all"
    ){tempRooms = tempRooms.filter(rooms => rooms.type===type)

    }
     

// for room capacity 


// for room prize 

tempRooms = tempRooms.filter(rooms => rooms.price <= price )

// for room size 
tempRooms =tempRooms.filter(rooms => rooms.size>=minSize && rooms.size <= maxSize )
// for breakfast 
if (breakfast){
tempRooms =tempRooms.filter(rooms => rooms.breakfast === true  )}
// for pets 
if(pets){
tempRooms =tempRooms.filter(rooms => rooms.pets=== true)}

 this.setState({
     sortedRooms:tempRooms
 })







    }


    render() {
        return (
            <div>
                <RoomContext.Provider value = {{...this.state, getRoom:this.getRoom,handleChange:this.handleChange,filterRooms:this.filterRooms }}>
                   {this.props.children}
                    </RoomContext.Provider>
            </div>
        )
    }
}




const RoomConsumer = RoomContext.Consumer;


export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return <RoomConsumer>
                  { value => <Component {...props}  context ={value}/>}
            </RoomConsumer>
    }
    }

export {RoomProvider,RoomConsumer,RoomContext}