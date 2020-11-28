import React,{useContext} from 'react'
import {GameContext} from "../context/gameContext";

export default function Walletpage(){
    const { balance } = useContext(GameContext)
    return(
        <div className="sectiona ml-5 mt-5">
        <img src="assets/02.png" alt="j" style={{height:150,width:150}} />
        <div className="section">
            <span style={{marginTop:30,marginLeft:200,fontSize:30}}><strong >Balance :</strong> Rs {balance}/-</span>

        </div>
    </div>
    )
}