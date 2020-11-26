import React from 'react'
import { useHistory } from "react-router-dom";

export default function Gamepage(){
    const history = useHistory()

    return(
        <div className="gamee" >
            <div className="row">
                <div className="col-md-2">
                    <img className="img" src="/assets/Group -1.png" alt="a" onClick={()=> history.push('/gamescreen')} />
                </div>
                <div className="col-md-2">
                    <img className="img" src="/assets/Group -2.png" alt="b" />
                </div>
                <div className="col-md-2">
                    <img className="img" src="/assets/Group -3.png" alt="c" />
                </div>
                <div className="col-md-2">
                    <img  className="img" src="/assets/Group -4.png" alt="d" />
                </div>
                <div className="col-md-2">
                    <img className="img" src="/assets/Group 5.png" alt="f" />
                </div>
                <div className="col-md-2">
                    <img className="img" src="/assets/Group 11.png" alt="b" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <img className="img" src="/assets/Group 12.png" alt="c" />
                </div>
                <div className="col-md-2">
                    <img className="img" src="/assets/Group 13.png" alt="d" />
                </div>
                <div className="col-md-2">
                    <img className="img" src="/assets/Group 15.png" alt="a" />
                </div>
                <div className="col-md-2">
                    <img className="img" src="/assets/Group 16.png" alt="b" />
                </div>
                <div className="col-md-2">
                    <img className="img" src="/assets/Group 17.png" alt="c" />
                </div>
                <div className="col-md-2">
                    <img className="img" src="/assets/Group 18.png" alt="d" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <img className="img" src="/assets/Group 19.png" alt="f" />
                </div>
                <div className="col-md-2">
                    <img className="img" src="/assets/Group 20.png" alt="f" />
                </div>
            </div>

        </div>
    )
}