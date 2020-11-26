import React,{createContext,useState,useEffect} from 'react'
import axios from "axios";



export const GameContext = createContext();

export default function GamesContext (props) {

    const [gameId,setGameId] = useState(null)
    const [time,setTime] = useState(null)


    const timer = () =>{
         setInterval(()=>{
            axios.get('http://localhost:4000/timer')
                .then((res)=>{
                    setTime(res.data.timer);
                })
        },1000)

    }


    const game = ()=> {
        axios.get('http://localhost:4000/gameid')
            .then((res) => {
                setGameId(res.data.gameid);
            })

    }


    useEffect(()=>{
        timer()
        game()
    },[])
    return(
        <GameContext.Provider value={{gameId, time}} >
            {props.children}
        </GameContext.Provider>
    )
}