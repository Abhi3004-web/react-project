import React from "react";
const ChildA = () => {
    console.log("Child calling");
    return <></>
}
export default React.memo(ChildA)