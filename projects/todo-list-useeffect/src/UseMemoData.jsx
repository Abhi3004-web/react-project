import { useState, useMemo } from "react";

const UseMemoData = () => {

    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    const cubenumber = (num) => {

        console.log("call first", num);
        return Math.pow(num, 3);
    }
    //const result = cubenumber(number);
    const result = useMemo(() => cubenumber(number), [number])
    return <>
        <input type="number" onChange={(e) => setNumber(e.target.value)} value={number}></input>
        <p>result : {result}</p>
        <button type="button" onClick={() => setCount(count + 1)}>trigger</button>
        <p>added Value :{count}</p>
    </>
}
export default UseMemoData;