
import './App.css';
import React, { useState } from 'react';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import {Route,Switch,BrowserRouter, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Login from './Pages/Login';
import Hello from './Pages/Hello';
import Axios from 'axios';
import Test from "./Pages/Dashfinal";

// import YoutubeForm from './Pages/YoutubeForm';
// import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
                 <Switch>
                                 <Route path='/' component={Hello} exact={true} />
                                 <Route path='/signup' component={Register} />
                                 <Route path='/login' component={Login} />
                                 <Route path='/dashboard' component={Test} />
                                 
                   </Switch>
        </BrowserRouter>
    )
  }
}


export default App;
