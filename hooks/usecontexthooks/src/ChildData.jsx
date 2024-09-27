import { useContext } from "react"
import React from 'react'

import { data } from "./App"
import SubChild from "./SubChild";


function ChildData() {
    const count1 = useContext(data);
    return (
        <div>
            Count : {count1}
            <SubChild></SubChild>
        </div>
    )
}

export default ChildData
