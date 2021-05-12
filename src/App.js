import React, { Component } from "react";
import "./App.css";
import Intro from "./intro/intro.js";
import Nav from "./nav/nav.js";
import Secnav from "./nav/secnav.js";
import Blog from "./intro/blog.js";
import Pro from "./img/wayne.jpg";
import Blogimg from "./img/blogimg.webp";
import Dashboard from"./page/dashboard.js";
import Home from"./page/home.js";
import Footer from "./page/footer.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
<div className="App">
  
<Router>  
  <Switch>
 <Route path ="/" exact><Home/></Route>
<Route exact path="/dashboard" exact><Dashboard/></Route>
<Route path="/" render={()=> <div><h1>Oops 404 </h1></div>}/>
</Switch>
                </Router>
                <Footer/>
                </div>
    );
  }
}

export default App;
