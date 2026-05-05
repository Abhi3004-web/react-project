import { useRef, useState } from "react";

function Countup() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");
    const [isrunning, setIsrunning] = useState(false);
    let timerval = useRef(null);
    const start = () => {
        let val = Number(input) | 0;
        setCount(val)
        setIsrunning(true);
        if (timerval.current) return;
        timerval.current = setInterval(() => {
            setCount((prev) => prev + 1)
        }, 1000)
    }
    const pause_resume = () => {
        if (isrunning) {
            setIsrunning(false);
            clearInterval(timerval.current);
            timerval.current = null;

        } else {
            setIsrunning(true);
            timerval.current = setInterval(() => {
                setCount((prev) => prev + 1)
            }, 1000)
        }
    }
    const stop = () => {
        setIsrunning(false);
        setCount(0);
        setInput("");
        clearInterval(timerval.current);
        timerval.current = null;

    }
    return (
        <>
            Count : {count}
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={start}>start</button>
            <button onClick={pause_resume}>{isrunning ? "pause" : "resume"}</button>
            <button onClick={stop}>stop</button>
        </>
    )
}
export default Countup;