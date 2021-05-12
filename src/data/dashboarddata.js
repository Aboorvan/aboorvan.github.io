import React from "react";
import "../App.css";
import {ImQuotesLeft} from 'react-icons/im';
export default function Dashboarddata(props){
    let{heading, date, cont1, topic1,cont2, topic2,cont3, cont4,topic3,image1, 
        image2, image3,comments1,comments2,
        caption1,caption2,proimg,name,desc,commname,commrole,commname1,commrole1,end}=props;
        return(
    <div className="datas">

        <div className="dataright">
    <h1>{heading}</h1>
    <a className="line">{date}</a>
    <div className="dataleft">
<div className="pro">
    <img src={proimg}/>
    </div>
    <div className="name">
        <a>{name}</a>
        <div className="desc">
        <a>{desc}</a>
    </div>
    </div>
        </div>
    <p className="cont">{cont1}</p>
    <h1>{topic1}</h1>
    <p className="cont">{cont2}</p>
    <img className="img1" src={image1}/>
    <div className="caption">
    <a className="line">{caption1}</a>
    </div>
    <p className="cont">{caption2}</p>
    <h1>{topic2}</h1>
    <p className="cont">{cont3}</p>
    <p className="comment"><ImQuotesLeft/> {comments1}</p>
    <div className="comments">
    <a className="comname">{commname}</a>,<a>{commrole}</a>
    </div>
    <h1>{topic3}</h1>
    <p className="cont">{cont4}</p>
    <p className="comment"><ImQuotesLeft/> {comments2}</p>
    <div className="comments">
    <a className="comname">{commname1}</a>,<a>{commrole1}</a>
    </div>
<p className="cont">{end}</p>
    </div>
    </div>
        );
    
    }

    