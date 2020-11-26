import React from 'react'


export default function Dashboardpage(){
    return(
        <div className="main"  >
        <div className='detail'>
        <img src="/assets/ELEMENTS.png" style={{width:150,height:150}} alt="play" />
        <span style={{marginTop:50,fontSize:30}}><strong>Welcome </strong>{localStorage.getItem('name')}</span>
        </div>
            <hr/>
            <div >
            <h1 className="text-center m-5">Most Played</h1>
                <div className="items">
                    <img src="/assets/Group -1.png" alt="a" />
                    <img src="/assets/Group -2.png" alt="b" />
                    <img src="/assets/Group -3.png" alt="c" />
                    <img src="/assets/Group -4.png" alt="d" />
                    <img src="/assets/Group -4.png" alt="f" />
                 </div>

            </div>
        </div>
    )
}