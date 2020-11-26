import React from 'react'

import {imgs} from './card.js'


export default function Cardimg(props){


    if(props.img === 'cludJ'){
       return (
               <img className="bidimg" src={imgs.clubJ} alt='cludJ' style={{height:'300px',width:'300px'}}/>
           )
    }else if(props.img === 'clubK'){
        return (
                <img className="bidimg" src={imgs.clubK} alt='clubK' style={{height:'300px',width:'300px'}}/>
        )
    }else if(props.img === 'clubQ'){
        return (
                <img className="bidimg" src={imgs.clubQ} alt='clubQ' style={{height:'300px',width:'300px'}}/>
        )
    }else if(props.img === 'DiaJ'){
        return (
                <img className="bidimg" src={imgs.DiaJ} alt='DiaJ' style={{height:'300px',width:'300px'}} />
        )
    }
    else if(props.img === 'DiaK'){
        return (
                <img className="bidimg" src={imgs.DiaK} alt='DiaK' style={{height:'300px',width:'300px'}}/>
        )
    }
    else if(props.img === 'DiaQ'){
        return (
                <img className="bidimg" src={imgs.DiaQ} alt='DiaQ' style={{height:'300px',width:'300px'}}/>
        )
    }
    else if(props.img === 'heartJ'){
        return (
                <img className="bidimg" src={imgs.heartJ} alt='heartJ' style={{height:'300px',width:'300px'}}/>
        )
    }
    else if(props.img === 'heartK'){
        return (
                <img className="bidimg" src={imgs.heartK} alt='heartK' style={{height:'300px',width:'300px'}}/>
        )
    }else if(props.img === 'heartQ'){
        return (
                <img className="bidimg" src={imgs.heartQ} alt='heartQ' style={{height:'300px',width:'300px'}}/>
        )
    }
    else if(props.img === 'SpadeJ'){
        return (
                <img className="bidimg" src={imgs.SpadeJ} alt='SpadeJ' style={{height:'300px',width:'300px'}}/>
        )
    }
    else if(props.img === 'SpadeK'){
        return (
                <img className="bidimg" src={imgs.SpadeK} alt='SpadeK' style={{height:'300px',width:'300px'}}/>
        )
    }
    else if(props.img === 'SpadeQ'){
        return (
                <img className="bidimg" src={imgs.SpadeQ} alt='SpadeQ' style={{height:'300px',width:'300px'}}/>
        )
    }else {
        return(
            <span style={{height:'300px',width:'300px',marginLeft:'70px'}} >No Winner</span>
            )

    }


}