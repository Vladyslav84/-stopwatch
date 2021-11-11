// import React, {useState, useEffect} from 'react';
// import s from './stopwatch.module.css'

// function Stopwatch() {

//     const [time, setTime] = useState(0);
//     const [timerOn, setTimeOn] = useState(false);
//     const [toggle, setToggle] = useState(false)
//     function pad(value) { return String(value).padStart(2, '0') };
//     const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//     function toggleFunc () {
//         if (!toggle) {
//             setTimeOn(true)
//             setToggle(true)
//         } else if (timerOn && toggle) {
//             setTimeOn(false)
//             setToggle(false)
//             setTime(0)
//         }
//     };

//     function waitFunc() {
//            setTimeOn(false)
//            setToggle(false)
//     };

//     useEffect(() => {
//         let interval = null;

//         if (timerOn) {
//             interval = setInterval(() => {
//                 setTime(prevTime => prevTime + 1000)
//            }, 1000);
//         } else {
//             clearInterval(interval)
//         }
        
//         return () => clearInterval(interval)
//     },[timerOn])


//     return (
//         <div className={s.container}>
//             <div className={s.timer}>
//                 <div className={s.timer_block}>
//                     <div className={s.time}>{ hours }</div>
//                     <div className={s.title}>HH</div>
//                 </div>
              
//                 <div className={s.timer_block}>
//                     <div className={s.time}>{ mins}</div>
//                     <div className={s.title}>MM</div>
//                 </div>

//                 <div className={s.timer_block}>
//                     <div className={s.time}>{secs}</div>
//                     <div className={s.title}>SS</div>
//                 </div>
//             </div>
//             <div className={s.buttons}>
//                 <button type='button' className={s.button} onClick={toggleFunc}>Start/Stop</button>
//                 <button type='button' className={s.button} onDoubleClick={waitFunc}>Wait</button>
//                 <button type='button' className = {s.button} onClick={() => setTime(0)} >Reset</button>
//             </div>

//     </div>)
    
// }

// export default Stopwatch;