import { useEffect } from "react";

function Child({ count, data }) {
    // const handleChild = () => {
    //     console.log("Child component call");
    // }
    useEffect(() => {
        console.log("Mounting component")
    })
    useEffect(() => {
        console.log("updating phase")
    }, []);
    useEffect(() => {
        console.log("updating phase", count)
    }, [count])
    useEffect(() => {
        return () => {
            console.log("unmount phase");
        }

    }, [])

    return (
        <>
            <h2>Child Component {count} and {data}</h2>
        </>
    )
}
export default Child;