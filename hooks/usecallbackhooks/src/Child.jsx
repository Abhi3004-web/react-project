import React from "react";

function Child(props) {
    console.log("child component")
    return (
        <>
            <p>{props.data}</p>
            <button onClick={props.handleCheck}>on click</button>
        </>
    )
}
export default React.memo(Child)