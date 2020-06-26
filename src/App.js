import React from "react"
import Home from "./pages/home "
import Error from "./pages/error"
import Room from "./pages/room"
import SingleRoom from "./pages/singleRoom"
import {Route,Switch} from "react-router-dom"
import Navbar from "./components/navbar"
import "./App.css"

function App (){
    return (
        <div><Navbar/> 
            <Switch>
            <Route exact  path="/" component= {Home}/>
            <Route exact path="/room" component= {Room}/>
            <Route exact path="/rooms/:slug" component= {SingleRoom}/>
            <Route exact component={Error}/>
            </Switch>
            
        </div>
    )
}
export default App