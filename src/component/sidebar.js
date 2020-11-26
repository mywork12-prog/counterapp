import React from 'react'
import {Link,useLocation} from "react-router-dom";


export default  function Sidebar(){
    const location = useLocation();
    let loca = location.pathname;
   return(
       <div className="side" >
           <div className="bg-info w-100 sidehead">
               <img src="assets/Mask Group 1.png" className="logo" alt="logo" />
           </div>
           {/*<hr className="bg-primary p-2"/>*/}

               <div className={ loca === "/dashboard" ? "text-center p-4 active" : "text-center p-4"}>
                   <h4><Link to='/dashboard' className="link" >Dashboard </Link> </h4>
               </div>
               <div className={ loca === "/profile" ? "text-center p-4 active" : "text-center p-4"} >
                   <h4><Link to='/profile' className="link" >Profile </Link></h4>
               </div>
               <div className={ loca === "/wallet" ? "text-center p-4 active" : "text-center p-4"}>
                   <h4><Link to='/wallet' className="link" >Wallet </Link></h4>
               </div>
               <div className={ loca === "/game" ? "text-center p-4 active" : "text-center p-4"}>
                   <h4><Link to='/game' className="link" >Games </Link></h4>
               </div>
               <div className={ loca === "/bids" ? "text-center p-4 active" : "text-center p-4"}>
                   <h4><Link to='/bids' className="link" >Bids </Link></h4>
               </div>


       </div>
   )
}
