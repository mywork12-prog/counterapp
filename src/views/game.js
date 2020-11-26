import Sidebar from "../component/sidebar";
import Header from "../component/header";
import Gamepage from "../component/gamepage";
import React from "react";


export default function Game(){
    return(
        <div className="container-fluid d-flex">
            <Sidebar/>
            <div className="w-100">
                <Header/>
                <Gamepage/>
            </div>
        </div>
    )
}