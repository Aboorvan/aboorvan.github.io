import React, { Component } from "react";
import "../App.css";    
import {FaComment} from 'react-icons/fa';
import {FiNavigation} from 'react-icons/fi';
export default class Footer extends Component{
render(){
    return(
        <div className="footer">
            <div className="company">
                <h3>Stripe</h3>
                <a><FiNavigation/>United states</a>
                <a><FaComment/>English</a>
            </div>
            <div className="list">
                <a>Products</a>
                <li>Payments</li>
                <li>Billing</li>
                <li>Connect</li>
                <li>Payouts</li>
                <li>Atlas</li>
                <li>Radar</li>
                <li>Issuing</li>

            </div>
            <div className="list">
            <a>Developers</a>
                <li>Documentation</li>
                <li>API Reference</li>
                <li>API Status</li>
                <a>Company</a>
                <li>About</li>
                <li>Customers</li>
                <li>Enerprise</li>
                <li>Partners</li>

            </div>
            <div className="list">
            <a>Use cases</a>
                <li>SaaS</li>
                <li>Platform</li>
                <li>Marketplace</li>
                <a>Resources</a>
                <li>Support</li>
                <li>Contact</li>
                <li>Guides</li>
                <li>Covid19</li>


            </div>
        </div>
    );
}

}