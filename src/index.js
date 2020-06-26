import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import {RoomProvider} from "./context"
//import './index.css';

ReactDOM.render(
<RoomProvider>
    <Router>
  <App />
 </Router>
 </RoomProvider>
 
  ,
  document.getElementById('root')
);
