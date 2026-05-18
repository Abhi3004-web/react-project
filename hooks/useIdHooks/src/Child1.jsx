import { startTransition, useState, useTransition } from "react";
function Child1() {
    const [text, setText] = useState("");
    const [list, setList] = useState([]);
    const [ispending, StartTransition] = useTransition();
    const handleChange = (e) => {
        const val = e.target.value;
        setText(val);
        const bigList = [];
        startTransition(() => {
            for (let i = 0; i < 10; i++) {
                bigList.push(val);
            }
            setList(bigList);
        })
    }
    return (
        <>
            <input type="text" value={text} placeholder="Enter name" onChange={handleChange} />
            {/* {ispending && <h3>Loading...</h3>} */}
            {
                list.map((item, index) => (
                    <p key={index}>{item}</p>
                ))
            }
        </>
    )
}
export default Child1;