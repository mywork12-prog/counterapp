// import axios from "axios";
//
// const timer = () =>{
//     setInterval(()=>{
//         axios.get('http://localhost:4000/timer')
//             .then((res)=>{
//                 settime(res.data.timer);
//
//             })
//     },900)
//
// }
// const onetime = () =>{
//     axios.get('http://localhost:4000/gameid')
//         .then((res)=>{
//             setGameId(res.data.gameid);
//         })
// }
// const game = ()=>{
//     setInterval(()=>{
//         axios.get('http://localhost:4000/gameid')
//             .then((res)=>{
//                 console.log(res.data)
//                 setGameId(res.data.gameid);
//             })
//     },60000)
// }
// useEffect(()=>{
//     timer()
//     game()
//     onetime()
// },[])
