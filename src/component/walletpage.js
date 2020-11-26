import React,{useEffect,useState} from 'react'
import axios from 'axios'

export default function Walletpage(){
    const [balance,setBalance] = useState(0)
    const wallet = () =>{
        let token = localStorage.getItem('jwt')
        let id = localStorage.getItem('id')
        axios.defaults.headers.common['Authorization'] =`Bearer ${token}`;
        axios.get('http://localhost:4000/counter/'+id)
            .then(res=> setBalance(res.data.balance))
    }
    useEffect( ()=>{

       wallet()

    },[])
    return(
        <div className="sectiona ml-5 mt-5">
        <img src="assets/02.png" alt="j" style={{height:150,width:150}} />
        <div className="section">
            <span style={{marginTop:30,marginLeft:200,fontSize:30}}><strong >Balance :</strong> Rs {balance}/-</span>

        </div>
    </div>
    )
}