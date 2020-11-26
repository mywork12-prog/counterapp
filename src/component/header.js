import React,{useEffect,useContext} from 'react';
import {GameContext} from "../context/gameContext";

export default function Header(){
    const {gameId,time } = useContext(GameContext)
    useEffect(()=>{

    },[])

    return(
        <div className="w-100">
            <div className="p-4 d-flex justify-content-between" style={{backgroundColor:'#FFD166'}}>
            <h4>Current Game ID:{gameId}</h4>
                <span>Time:{time}</span>
            </div>
            <div className="p-4" style={{backgroundColor:'#06D6A0'}}>
            <h4>Winners By Game ID | </h4>
            </div>
        </div>
    )
}