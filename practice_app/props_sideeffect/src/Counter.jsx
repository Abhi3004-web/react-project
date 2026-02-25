import { useEffect } from "react";

function Counter({ count, data }) {
    const callCounter = () => {
        console.log("child call");
    }
    useEffect(() => {
        callCounter();
    }, [count])

    return (
        <>
            <p>{count} and {data} </p>
        </>
    )
}
export default Counter;