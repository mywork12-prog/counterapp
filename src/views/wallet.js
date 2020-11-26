import Sidebar from "../component/sidebar";
import Header from "../component/header";
import Wall from "../component/walletpage";
import React from "react";


export default function Wallet(){
    return(
        <div className="container-fluid d-flex">
            <Sidebar/>
            <div className="w-100">
                <Header/>
                <Wall/>
            </div>
        </div>
    )
}