import React, { Component } from "react";
import "../App.css";
import Intro from "../intro/intro.js";
import Nav from "../nav/nav.js";
import Secnav from "../nav/secnav.js";
import Blog from "../intro/blog.js";
import Pro from "../img/wayne.jpg";
import Blogimg from "../img/blogimg.webp";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default class Home extends Component {
    render() {
      return (
  <div className="App">
  <div className="test"> 
  </div>
          <div className="headerbody">
          <Nav/>
          <Intro/>
          <Secnav/>
          <div className="row">
      <Blog
      category="Engineering"
      heading="European payment methods available worldwide in minutes, not months" 
      content="Stripe businesses around the world can accept payments from more European buyers in minutes. 
      No matter where you are in the world, there’s now no foreign incorporation, no new bank accounts,
      and no manual activation steps to get started with Bancontact, EPS, giropay, iDEAL, Przelewy24, and Sofort.    "
       more="Read more"
      date="october 5,2020"
       image={Pro}
       name="aboo"
        desc="developer"
      />
      <Blog
     category="Engineering"
     heading="European payment methods available worldwide in minutes, not months" 
     content="Stripe businesses around the world can accept payments from more European buyers in minutes. 
     No matter where you are in the world, there’s now no foreign incorporation, no new bank accounts,
     and no manual activation steps to get started with Bancontact, EPS, giropay, iDEAL, Przelewy24, and Sofort.    "
      more="Read more"
     date="october 5,2020"
      image={Pro}
      name="aboo"
       desc="developer"
       blogimg={Blogimg}
     />
     <Blog
     category="Engineering"
     heading="European payment methods available worldwide in minutes, not months" 
     content="Stripe businesses around the world can accept payments from more European buyers in minutes. 
     No matter where you are in the world, there’s now no foreign incorporation, no new bank accounts,
     and no manual activation steps to get started with Bancontact, EPS, giropay, iDEAL, Przelewy24, and Sofort.    "
      more="Read more"
     date="october 5,2020"
      image={Pro}
      name="aboo"
       desc="developer"
     />
      </div>
          </div>
          </div>
      );
    }
}