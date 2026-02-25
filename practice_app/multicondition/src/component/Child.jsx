import { useState } from "react";

function Child({ children, color = "green" }) {
    const [data, setData] = useState("");
    return (
        <div style={{ border: "1px solid #dfdfdf", color: color }}>
            {children}
            <input type="text" value={data} onChange={(e) => setData(e.target.value)}></input>
            <p>{data}</p>
            <button onClick={() => setData("")}>clear</button>
        </div>
    )
}
export default Child;