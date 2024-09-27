import React from 'react'
import { useContext } from "react"
import { data } from "./App"

function SubChild() {
    const count = useContext(data);
    return (
        <div>
            Five times incremented Data : {count * 5}
        </div>
    )
}

export default SubChild
