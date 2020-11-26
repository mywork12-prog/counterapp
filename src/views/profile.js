import Sidebar from "../component/sidebar";
import Header from "../component/header";
import Prof from "../component/profilepage";
import React from "react";

export default function Profile(){
    return(
        <div className="container-fluid d-flex">
            <Sidebar/>
            <div className="w-100">
                <Header/>
                <Prof/>
            </div>
        </div>
    )
}