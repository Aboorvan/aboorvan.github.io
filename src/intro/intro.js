import React, { Component } from "react";
import "../App.css";
import Pro from "../img/wayne.jpg";
import Introimg from "../img/image.webp";
import { Link } from "react-router-dom";
export default class Intro extends Component {
    render() {
      return (
        <div className="intro">
         <div className="introcomponents">
             <div className="link">
             <a><Link to="/Product">Product</Link></a>
             </div>
             <div className="bloghead">
                 <a>Introducing the Billing customer portal</a>
                 
             </div>
             <div className="profile">
                     <img src={Pro}></img>
                     <div className="proid">
                     <a>Aboorvan</a>
                     <p>Developer</p>
                 </div>
                 </div>
                 <div className="postdesc">
                     <a>Stripe Billing is already the fastest way for businesses to
                 set up subscriptions or invoices.The customer portal makes it even easier to create a great experience 
               for your customers while minimizing engineering investment.</a>
                 </div>
                 <div className="link2">
                    <Link to="/dashboard"><a>Read more</a></Link>
                 </div>
         </div>
         <div className="introimg">
             <img src={Introimg}></img>
         </div>
          </div>
      );
    }
  }