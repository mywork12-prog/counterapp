import React,{createContext,useState,useEffect} from 'react'
import axios from "axios";



export const GameContext = createContext();

export default function GameProvider (props) {
    let token = localStorage.getItem('jwt')
    let id = localStorage.getItem('id')
    const [gameId,setGameId] = useState(null)
    const [time,setTime] = useState(null)
    const [balance,setBalance] = useState(0)


    const newwallet = () =>{
        setInterval(()=>{
        axios.defaults.headers.common['Authorization'] =`Bearer ${token}`;
        axios.get('http://localhost:4000/counter/'+id)
            .then(res=> setBalance(res.data.balance))
        },9000)
    }
    const timer = () =>{
         setInterval(()=>{
            axios.get('http://localhost:4000/timer')
                .then((res)=>{
                    setTime(res.data.timer);
                })
        },1000)

    }


    const newGame = ()=> {
        setInterval(()=>{
            axios.get('http://localhost:4000/gameid')
                .then((res) => {
                    setGameId(res.data.gameid);
                })
        },1000)


    }



    useEffect(()=>{
        timer()
        newGame();
        newwallet()
    },[])
    return(
        <GameContext.Provider value={{gameId, time, balance,token,id}} >
            {props.children}
        </GameContext.Provider>
    )
}