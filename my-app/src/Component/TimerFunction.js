import React, {useState,useEffect, memo} from "react";

function TimerFunction({userId}){
    const [time, setTime] = useState(new Date())
    const [show, setSHow] = useState(false)
    const timer = () => {
        setTime(new Date())
    }
    useEffect(()=>{
        const interval = setInterval(() => timer(), 1000)
        console.log()
        return ()=>{
           clearInterval(interval)
        }
    },[])


    return (
        <div>
            <h2>It is {time.toLocaleTimeString()}</h2>
        </div>
    );
}
export default memo(TimerFunction)
