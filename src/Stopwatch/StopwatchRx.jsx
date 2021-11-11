import React, {useState, useEffect} from 'react';
import s from './stopwatch.module.css'
import { fromEvent, Observable } from 'rxjs';
import { map, throttleTime, buffer, filter } from 'rxjs/operators';

function Stopwatch() {
    const [time, setTime] = useState(0);
    const [timerOn, setTimeOn] = useState(false);
    const [toggleStartStop, settoggleStartStop] = useState(false);

    function pad(value) { return String(value).padStart(2, '0') };
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    function toggleStartStopFunc () {
        if (!toggleStartStop) {
            setTimeOn(true)
            settoggleStartStop(true)
        } else if (timerOn && toggleStartStop) {
            setTimeOn(false)
            settoggleStartStop(false)
            setTime(0)
        }
    };

    function waitFunc() {
        settoggleStartStop(false)
        setTimeOn(false)
    };

    function resetFunc() {
        setTime(0)
        setTimeOn(true)
        settoggleStartStop(true)
    };

    useEffect(() => {
    const clicks = fromEvent(document.getElementById('clickMe'), 'click');
    const result = clicks.pipe(
    buffer(clicks.pipe(throttleTime(300))),
    map(arr => arr.length),
    filter( len => len === 2)
        );

    result.subscribe(()=>{waitFunc()});
       
    },[])
    
// useeffect for Observable
        useEffect(() => {
        let interval = null;

        if (timerOn) {
           const timerStrim = new Observable(obs => {
                return interval = setInterval(() => obs.next(1000), 1000);
           })
            timerStrim.subscribe(
                (val) => setTime(prevTime => prevTime + val), 
              );
        } else {
            clearInterval(interval)
        }
                
        return () => clearInterval(interval)
    },[timerOn])
   
    return (
        <div className={s.container}>
            <div className={s.timer}>
                <div className={s.timer_block}>
                    <div className={s.time}>{hours}</div>
                    <div className={s.title}>HH</div>
                </div>
              
                <div className={s.timer_block}>
                    <div className={s.time}>{mins}</div>
                    <div className={s.title}>MM</div>
                </div>

                <div className={s.timer_block}>
                    <div className={s.time}>{secs}</div>
                    <div className={s.title}>SS</div>
                </div>
            </div>
            <div className={s.buttons}>
                <button type='button' className={s.button} onClick = {toggleStartStopFunc}>Start/Stop</button>
                <button type='button' id="clickMe" className={s.button} >Wait</button>
                <button type='button' className = {s.button} onClick={resetFunc} >Reset</button>
            </div>
    </div>)
    
}

export default Stopwatch;