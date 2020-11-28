import React, {useEffect, useState,useContext} from 'react'
import { useHistory } from "react-router-dom";
import {imgs} from './card.js'
import Cardimg from "./cardimg";
import axios from "axios";
import {GameContext} from "../context/gameContext";

export default function Gamescreen(){
    const {gameId,time,balance,token} = useContext(GameContext)
    const history = useHistory();
    const [bids,setBids] = useState(0);
    const [card,setCard] = useState([]);
    const [winCard,setWinCard] = useState(null)
    const [cardar,setCardar] = useState(['clubJ','DiaJ','SpadeJ','heartJ','clubK','DiaK','SpadeK','heartK','clubQ','DiaQ','SpadeQ','heartQ']);
    const [card1,setCard1] = useState(0)
    const [card2,setCard2] = useState(0)
    const [card3,setCard3] = useState(0)
    const [card4,setCard4] = useState(0)
    const [card6,setCard6] = useState(0)
    const [card5,setCard5] = useState(0)
    const [card7,setCard7] = useState(0)
    const [card8,setCard8] = useState(0)
    const [card9,setCard9] = useState(0)
    const [card10,setCard10] = useState(0)
    const [card11,setCard11] = useState(0)
    const [card12,setCard12] = useState(0)
    const [win,setWin] = useState(false)
    const [winammount,setWinammount] = useState(0)


    const place = () =>{
       let lenght = card.length;
       let divi = bids / lenght;
       let roun = Math.round(divi)
        card.forEach((items)=>{
                if(items === 'cludJ'){

                    setCard1(parseInt(card1) + parseInt(roun))

                }else if(items === 'DiaJ'){
                    setCard2(parseInt(card2) + parseInt(roun))
                }else if(items === 'SpadeJ'){
                    setCard3(parseInt(card3) + parseInt(roun))
                }else if(items === 'heartJ'){
                    setCard4(parseInt(card4) + parseInt(roun))
                }
                else if(items === 'clubK'){
                    setCard5(parseInt(card5) + parseInt(roun))
                }
                else if(items === 'DiaK'){
                    setCard6(parseInt(card6) + parseInt(roun))
                }
                else if(items === 'SpadeK'){
                    setCard7(parseInt(card7) + parseInt(roun))
                }
                else if(items === 'heartK'){
                    setCard8(parseInt(card8) + parseInt(roun))
                }else if(items === 'clubQ'){
                    setCard9(parseInt(card9) + parseInt(roun))
                }
                else if(items === 'DiaQ'){
                    setCard10(parseInt(card10) + parseInt(roun))
                }
                else if(items === 'SpadeQ'){
                    setCard11(parseInt(card11) + parseInt(roun))
                }
                else if(items === 'heartQ'){
                    setCard12(parseInt(card12) + parseInt(roun))
                }else {
                    console.log('no card select')
                }
        })

     setBids(0);
     setCard([])

    }

    useEffect( ()=>{
        let amount2 = 0
        async function fetchdata() {

            if(time === '00:02'){

                let date = new Date()
                let da = date.getDate()+'.'+date.getMonth()+'.'+date.getFullYear();
                let ar = [
                    {card:'clubJ',amount:card1},
                    {card:'DiaJ',amount:card2},
                    {card:'SpadeJ',amount:card3},
                    {card:'heartJ',amount:card4},
                    {card:'clubK',amount:card5},
                    {card:'DiaK',amount:card6},
                    {card:'SpadeK',amount:card7},
                    {card:'heartK',amount:card8},
                    {card:'clubQ',amount:card9},
                    {card:'DiaQ',amount:card10},
                    {card:'SpadeQ',amount:card11},
                    {card:'heartQ',amount:card12}
                ]
                let id = localStorage.getItem('id')
                let data = {
                    gameid:gameId,
                    counterid:id,
                    cards:ar,
                    date:da
                }
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                };
               fetch('http://localhost:4000/gamesdata', requestOptions)
               .then(response => response.json())
                    .then(data => console.log(data));

               let res = await axios.get('http://localhost:4000/winner')
                console.log(res.data.winner)
                setWinCard(res.data.winner)
                let wicard = res.data.winner
                if (wicard === 0){

                    setWinammount(parseInt(card1)*10)
                }else if(wicard === 1){

                    setWinammount(parseInt(card2)*10)

                }else if(wicard === 2){

                    setWinammount(parseInt(card3)*10)
                }else if(wicard === 3 ){

                    setWinammount(parseInt(card4)*10)
                }else if(wicard === 4){

                    setWinammount(parseInt(card5)*10)
                }else if(wicard === 5){

                    setWinammount(parseInt(card6)*10)
                }else if(wicard === 6){

                    setWinammount(parseInt(card7)*10)
                }else if(wicard === 7){

                    setWinammount(parseInt(card8)*10)
                }else if(wicard === 8){

                    setWinammount(parseInt(card9)*10)
                }else if(wicard === 9){

                    setWinammount(parseInt(card10)*10)
                }else if(wicard === 10){

                    setWinammount(parseInt(card11)*10)
                }else if(wicard === 11){

                    setWinammount(parseInt(card12)*10)
                }else {
                    console.log('no winner')
                }



            }

            if (time === '00:01'){
                setTimeout(()=>{
                    console.log(amount2)
                    let date = new Date()
                    let da = date.getDate()+'.'+date.getMonth()+'.'+date.getFullYear();
                    let id = localStorage.getItem('id')
                    let data = {
                        gameid:gameId,
                        counterid:id,
                        card:winCard,
                        amount:winammount,
                        date:da
                    }

                    fetch('http://localhost:4000/counterwinner',{
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(data)
                    })
                        .then(response => response.json())
                        .then(data => console.log(data));
                    let mainbal = card1 + card2 + card3 + card4 + card5 + card6 + card7 + card8 + card9 +card10 + card11 +card12;
                    let balnce = (parseInt(balance) - mainbal) + winammount;
                    fetch('http://localhost:4000/counter/balance/'+id,{
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json','Authorization':`Bearer ${token}` },
                        body: JSON.stringify({balance:balnce})
                    })
                        .then(response => response.json())
                        .then(data => console.log(data));
                },2000)
            }


        }

        fetchdata()
    },[time])

    return(
        <div className="main">
            <div className="gamehead">
            <button className="gamebtn" onClick={()=> history.goBack()}>Back</button>

                    <span className="m-2 font-weight-bold">Current game ID : {gameId} </span>
                    <span className="ml-5 font-weight-bold" >Counter Balance : {balance} </span>
                    <span className="float-right font-weight-bold m-4">Timer : {time} </span>


            </div>
            <div className="content">
            <div className="bg-info seca">
                <div className="bidder">
                    <button className="btam" onClick={()=> setBids(700)}>700</button>
                    <button className="btam" onClick={()=> setBids(500)}>500</button>
                    <button className="btam" onClick={()=> setBids(300)}>300</button>
                    <button className="btam" onClick={()=> setBids(100)}>100</button>
                </div>

                <div className="row">
                    <span style={{fontSize: 40,marginLeft:'25%'}}>Collections</span>
                    <div className=" col-sm-12  mt-3 ch">
                        <input type="checkbox" className="check" onClick={()=> setCard([...card,'cludJ','clubK','clubQ'])}   />
                        <input type="checkbox" className="check" onClick={()=> setCard([...card,'DiaJ','DiaK','DiaQ'])}   />
                        <input type="checkbox" className="check" onClick={()=> setCard([...card,'SpadeJ','SpadeK','SpadeQ'])}    />
                        <input type="checkbox" className="check" onClick={()=> setCard([...card,'heartJ','heartK','heartQ'])}   />

                    </div>
                   <div className=" col-sm-12   ">
                       <input type="checkbox" className="check1" onClick={()=> setCard([...card,'cludJ','DiaJ','SpadeJ','heartJ'])}   />
                       <img className={ card1>0 ?"cardimg cardimgsel" : 'cardimg'} onClick={()=> setCard([...card,'cludJ'])} src={imgs.clubJ}  alt="clubJ" />
                       <img className={ card2>0 ?"cardimg cardimgsel" : 'cardimg'} onClick={()=> setCard([...card,'DiaJ'])} src={imgs.DiaJ} alt="DiaJ"/>
                       <img className={ card3>0 ?"cardimg cardimgsel" : 'cardimg'} onClick={()=> setCard([...card,'SpadeJ'])} src={imgs.SpadeJ} alt="SpadeJ"/>
                       <img className={ card4>0 ?"cardimg cardimgsel" : 'cardimg'} onClick={()=> setCard([...card,'heartJ'])} src={imgs.heartJ} alt="heartJ"/>

                   </div>
                    <div className=" col-sm-12  mt-3">
                        <input type="checkbox" className="check1" onClick={()=> setCard([...card,'clubK','DiaK','SpadeK','heartK'])}   />
                        <img className={ card5>0 ?"cardimg cardimgsel" : 'cardimg'} onClick={()=> setCard([...card,'clubK'])} src={imgs.clubK} alt="clubK" />
                        <img className={ card6>0 ?"cardimg cardimgsel" : 'cardimg'} onClick={()=> setCard([...card,'DiaK'])} src={imgs.DiaK} alt="DiaK" />
                        <img className={ card7>0 ?"cardimg cardimgsel" : 'cardimg'} onClick={()=> setCard([...card,'SpadeK'])} src={imgs.SpadeK} alt="SpadeK" />
                        <img className={ card8>0 ?"cardimg cardimgsel" : 'cardimg'} onClick={()=> setCard([...card,'heartK'])} src={imgs.heartK} alt="heartK" />
                    </div>
                    <div className=" col-sm-12 mt-3">
                        <input type="checkbox" className="check1" onClick={()=> setCard([...card,'clubQ','DiaQ','SpadeQ','heartQ'])}   />
                        <img className={ card9>0 ?"cardimg cardimgsel" : 'cardimg'} onClick={()=> setCard([...card,'clubQ'])} src={imgs.clubQ} alt="clubQ" />
                        <img className={ card10>0 ?"cardimg cardimgsel" : 'cardimg'} onClick={()=> setCard([...card,'DiaQ'])} src={imgs.DiaQ} alt="DiaQ" />
                        <img className={ card11>0 ?"cardimg cardimgsel" : 'cardimg'} onClick={()=> setCard([...card,'SpadeQ'])} src={imgs.SpadeQ} alt="SpadeQ" />
                        <img className={ card12>0 ?"cardimg cardimgsel" : 'cardimg'} onClick={()=> setCard([...card,'heartQ'])} src={imgs.heartQ} alt="heartQ" />
                    </div>
                    <div className="placebid">
                       <input type="text" className="inputs" onChange={(e)=> setBids(e.target.value)} value={bids} />
                        <button type="button" className="bt" onClick={place}>Place Bid</button>
                    </div>
                </div>
            </div>
                <div className="bg-warning secb">
                    <span className="d-flex justify-content-center" style={{fontSize: 40}}>Winner</span>
                    <div className="winning">

                        <Cardimg img={cardar[winCard]} />
                            <div className="winamount" style={{fontSize:30}}>
                                <p>Winning Amount</p>
                                <p style={{marginLeft:50}}>₹{winammount}</p>
                            </div>
                    </div>
                </div>
                <div className="bg-danger secc">
                    <div className="bb">
                        <span className="bids-sec">Bids</span>
                    </div>

                    <div className="cardsec" >
                        <div  >
                            <img className="bidimg" src={imgs.clubJ} alt='SpadeQ'/>
                            <label style={{marginLeft: '35%'}} >Bids : {card1}</label>
                        </div>
                        <div  >
                            <img className="bidimg" src={imgs.DiaJ} alt='SpadeQ'/>
                            <label style={{marginLeft: '35%'}} >Bids : {card2}</label>
                        </div>
                        <div  >
                            <img className="bidimg" src={imgs.SpadeJ} alt='SpadeQ'/>
                            <label style={{marginLeft: '35%'}} >Bids : {card3}</label>
                        </div>
                        <div  >
                            <img className="bidimg" src={imgs.heartJ} alt='SpadeQ'/>
                            <label style={{marginLeft: '35%'}} >Bids : {card4}</label>
                        </div>
                        <div  >
                            <img className="bidimg" src={imgs.clubK} alt='SpadeQ'/>
                            <label style={{marginLeft: '35%'}} >Bids : {card5}</label>
                        </div>
                        <div  >
                            <img className="bidimg" src={imgs.DiaK} alt='SpadeQ'/>
                            <label style={{marginLeft: '35%'}} >Bids : {card6}</label>
                        </div>
                        <div  >
                            <img className="bidimg" src={imgs.SpadeK} alt='SpadeQ'/>
                            <label style={{marginLeft: '35%'}} >Bids : {card7}</label>
                        </div>
                        <div  >
                            <img className="bidimg" src={imgs.heartK} alt='SpadeQ'/>
                            <label style={{marginLeft: '35%'}} >Bids : {card8}</label>
                        </div>
                        <div  >
                            <img className="bidimg" src={imgs.clubQ} alt='SpadeQ'/>
                            <label style={{marginLeft: '35%'}} >Bids : {card9}</label>
                        </div>
                        <div  >
                            <img className="bidimg" src={imgs.DiaQ} alt='SpadeQ'/>
                            <label style={{marginLeft: '35%'}} >Bids : {card10}</label>
                        </div>
                        <div  >
                            <img className="bidimg" src={imgs.SpadeQ} alt='SpadeQ'/>
                            <label style={{marginLeft: '35%'}} >Bids : {card11}</label>
                        </div>
                        <div  >
                            <img className="bidimg" src={imgs.heartQ} alt='SpadeQ'/>
                            <label style={{marginLeft: '35%'}} >Bids : {card12}</label>
                        </div>



                    </div>

                </div>
            </div>

        </div>
    )
}