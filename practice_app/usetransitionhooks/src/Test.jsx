import { useState, useTransition } from "react";
function Test() {
    const data = ["apple", "banana", "grape", "orange", "mango"];
    const [input, setInput] = useState("");
    const [list, setList] = useState(data);
    const [isPending, startTransition] = useTransition();

    const handleChange = (e) => {
        let value = e.target.value;
        setInput(value);
        startTransition(async () => {
           
            await new Promise(res => setTimeout(res, 2000));
            const filterData = data.filter(item => item.toLowerCase().includes(value.toLowerCase()));
            setList(filterData);
        })
    }
    // const handleClick = () => {
    //     startTransition(async () => {
    //         await new Promise(res => setTimeout(res, 2000));
    //     })
    // }
    return (
        <>
            <input type="text" value={input} onChange={handleChange} />
            {isPending ? <p>Loading....</p> : null}
            <ul>
                {
                    list.map((item, i) => <li key={i}>{item}</li>)
                }
            </ul>
            {/* <button disabled={isPending} onClick={handleClick}>{isPending ? "clicked...." : "click"}</button> */}
        </>
    )
}
export default Test;