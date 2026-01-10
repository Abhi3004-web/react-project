import React from "react";
import { useState, useRef, useEffect } from "react";

function Throttling() {
    let [diamention, setDiamention] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })
    let initialVal = useRef(0);
    useEffect(() => {
        const Resize = () => {
            let timer = new Date().getTime();
            if (timer - initialVal.current >= 1000) {
                initialVal.current = timer;
                setDiamention({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            }
        };
        window.addEventListener("resize", Resize);
        return () => {
            window.removeEventListener("resize", Resize)
        };
    }, []);
    return (
        <>
            <h1>Window Size Calculation</h1>
            <div>Window Size : {diamention.width} X {diamention.height}</div>
        </>
    )
}
export default Throttling;