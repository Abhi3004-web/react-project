import { useEffect, useState } from "react";

function Clock({ color }) {
    const [time, setTime] = useState(0);
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000)
    }, [])
    return (
        <div style={{ background: '#dedede', border: '1px solid black', borderRadius: '5px', padding: '5px', color: color }}>
            <label>{time}</label>

        </div>
    )
}
export default Clock;