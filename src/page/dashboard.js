import React,{Component} from 'react';
import "../App.css";
import Nav from "../nav/nav.js";
import Dashboarddata from "../data/dashboarddata.js";
import Pro from "../img/wayne.jpg";
import Img1 from "../img/img1.webp";
export default class Dashboard extends Component{
    render(){
    return(

    <div className="dashboard">
        <Nav/>
        <div className="dashboarddata">
 <Dashboarddata
    heading="European payment methods available worldwide in minutes, not months" 
    cont1="A great promise of the internet is to eliminate the impact of physical distance on our lives. But 35+ years after the internet’s founding, selling cross-border remains shockingly difficult. Why?


    Online commerce is fragmented. The top 50 ecommerce markets have over 75 popular payment methods—including wallets, bank methods, and even cash at convenience stores. Accepting more payment methods is important: buyers
     often abandon checkout if they can’t use their preferred way to pay. But it can take months to add local payment options. Before engineering work can even begin,
     you need to register foreign corporate entities,  open new bank accounts, pay local taxes, and fill out reams of compliance forms. It shouldn’t be this hard."
    cont2="Starting today, Stripe businesses around the world can accept payments from more European buyers in minutes. Whether you’re a retailer in Hong Kong or a 
    subscription service in Mexico, you can boost revenue from European buyers, who drive nearly 20% of the world’s ecommerce. No matter where you are in the world, there’s now no foreign incorporation, no new bank accounts, 
    and no manual activation steps to get started with Bancontact, EPS, giropay, iDEAL, Przelewy24, and Sofort."
    cont3="We’ve piloted European payments with businesses around the world, and they immediately saw higher conversion and lower costs. For example, a SaaS company in Hong Kong integrated iDEAL and conversion from Dutch 
    customers increased by nearly 50%. All they had to do was update a single line of code in Stripe Checkout. Businesses also saved as much as 1% in transaction costs and saw fewer chargebacks, since these payment methods don’t 
    support disputes."
    cont4="Businesses are increasingly relying on platforms and marketplaces to grow globally. Offering European payment methods is a great way for marketplaces and platforms to win and retain businesses. Now, platforms like 
    BigCommerce can make payment methods available by default, with no extra verification requirements, incorporation hassle, or activation steps for their users."
    topic1="Reach more European customers in minutes"
    topic2="Increase revenue and lower payment costs"
    topic3="Winning more sellers for platforms and marketplaces "
    date="January 5,2021"
     image1={Img1}
     image2=""
     image3=""
     comments1="To appeal to today’s international shopper, merchants need to offer a variety of payment methods at checkout to encourage a purchase regardless of the customer’s location. Working with Stripe, BigCommerce
     has added more payment methods to expand our international capabilities for merchants looking to sell globally."
     comments2="Accepting local payment methods on Stripe has been a game-changer. Not only has it saved us
      time and money, but we’re getting much higher conversion with European customers."
     caption1="Adding payment methods in Stripe Checkout is as easy as updating a parameter."
     caption2="You’ll receive payouts in your local currency with unified reporting for all payment methods. Stripe manages cross-border
      money movement, currency conversion, and local compliance—so you don’t have to."
   proimg={Pro}
   name="Aboorvan"
   desc="Billing"
   commname="Mark Rosales"
   commrole="Vice President of Payments,BigCommerce"
   commname1="Becs Percasky and Kate Bezar"
   commrole1="Founders, The Better Packaging Co., based in New Zealand"
   end="This is just the beginning. Over the next year, we’ll be making more payment methods available worldwide. Our goal is to make it seamless for customers to pay how they want and help more businesses sell globally in minutes.

   Visit your Dashboard to see the payment methods available for your business 
    read our docs to get started. Let us know how we can help your business grow globally."
/>
    
        </div>
    </div>
        );
    }
}