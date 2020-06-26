import React from 'react'
import { useContext} from "react"
import {RoomContext} from "../context"
import Tittle from "../components/tittle"
const getUnique =(items,value)=>{
    return[...new Set(items.map(item => item[value]))]

    
}
export default function RoomFilter({rooms}) {
 const context = useContext(RoomContext)
 const{handleChange,type,
  price,
 minPrice,
 maxPrice,
 maxSize,
 minSize,
 breakfast,
 pets}=context;

 
 let types = getUnique(rooms,'type')
 types =["all",...types]
 
  types = types.map((item,index)=>{
     return <option value={item} key={index}>{item}</option>
     
 } )
 
    return (
        <section className="filter-container">
            <Tittle title="Search Room" />
            <form className="filter-form">
                {/*select type*/}
                <div className="form-group">

                    <label htmlFor="type">Room type</label>
                    <select
                     name='type'
                     id='type'
                      value={type}
                      className="form-control"
                       onChange={handleChange}>
                        {types}
                    </select>
                </div>
                 {/* enf of select type */}
                 {/* start of the capacity */}
                
           
                {/* enf of capacity type */}
                <div className="form-group">
    <label htmlFor="price">Room Price ${price}</label>
  
    <input type="range"
    id ="price"
    name="price"
    min={minPrice}
    max={maxPrice}
    value={price}
    onChange={handleChange}
    className="form-control"
    />
      </div>

                {/* start of number */}
                <div className="form-group">
                    <label htmlFor="size">Room size</label>
                    <div className="size-inputs">
                    <input type="number"name="minsize"id="size
                     " value={minSize} onChange={handleChange}className="size-input"/>
                    <input type="number"name="maxsize"id="size
                     " value={maxSize} onChange={handleChange}className="size-input"/>
                    </div>
                </div>

                {/* end  of number type */}
                <div className="form-group">
                    <div className="single-extra">
                        
                    <input type="checkbox"name="breakfast"id="breakfast
                     " checked={breakfast} onChange={handleChange}/><label htmlFor="breakfast">Breakfast</label>
                    </div>
                    <div className="single-extra">
                        
                    <input type="checkbox"name="pets"id="pets " checked={pets} onChange={handleChange}/><label htmlFor="pets">pets</label>
                    </div>

                    </div>




            </form>
            
            
        </section>
    )
}
