import Sidebar from "../component/sidebar";
import Header from "../component/header";
import Dash from "../component/dashboardpage";
import React from "react";

export default function Dashboard(){
    return(
        <div className="container-fluid d-flex">
            <Sidebar/>
            <div className="w-100">
                <Header/>
               <Dash/>
            </div>
        </div>
    )
}