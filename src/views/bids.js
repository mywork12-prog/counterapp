import Sidebar from "../component/sidebar";
import Header from "../component/header";
import Bid from "../component/bidspage";
import React from "react";


export default function Bids(){

    console.log()
    return(
        <div className="container-fluid d-flex">
            <Sidebar/>
            <div className="w-100">
                <Header/>
               <Bid/>
            </div>
        </div>
    )
}