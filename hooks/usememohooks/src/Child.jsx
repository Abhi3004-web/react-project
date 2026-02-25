import React from "react";

function Child({ data }) {
    console.log("child component")
    return (
        <>
            <p>Child Component : {data}</p>
        </>
    )
}

export default React.memo(Child);