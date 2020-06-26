import React, { Component } from 'react'
import logo from "../images/logo.svg"
import {FaAlignRight} from "react-icons/fa"
import {Link} from "react-router-dom"

export default class navbar extends Component 
{
    constructor(props) {
        super(props);
        this.state = { isOpen:false }
        this.handleClick = this.handleClick.bind(this);
      }

   handleClick(){
       this.setState({isOpen:!this.state.isOpen})
   } 
    render() {
        return (
            <nav className ="navbar">
                <div className ="nav-centre" >
                     <div className ="nav-header" >
                       <Link to ="/">
                           <img src ={logo} alt ="beach resort" />
                           </Link>
                          <button type="button" className = "nav-btn"
                          onClick={this.handleClick}
                          ><FaAlignRight/></button>
                          
                       </div>
                            <ul className = {this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                                 <li> <Link to="/">Home</Link></li>
                                  <li> <Link  to="/Room" >Rooms</Link></li>
                             </ul>

                </div>
            </nav>
        )
    }
}

   
  