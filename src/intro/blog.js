import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../App.css";
export default function blog(props){
        let {category, heading, content, more, date, image, name, desc, blogimg} = props   
        return(
<div className="blog">
    <div className="left">
<a className="line">{category}</a>
<h1>{heading}</h1>

<p>{content}</p>
<div className="blogimg">
    <img src={blogimg}/>
    </div>
<div className="link">
<Link to="/dashboard">
<a>{more}</a>
</Link>
</div>
</div>
<div className="right">
<div className="pro">
    <p className="line">{date}</p>
    <img src={image}/>
    </div>
    <div className="name">
        <a>{name}</a>
        <div className="desc">
        <a>{desc}</a>
    </div>

    </div>
    
</div>
</div>
        );

    }
