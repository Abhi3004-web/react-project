import React from 'react'
import { TheamContext } from './Context/TheamContext'
import { useContext } from 'react'
import ChildC from './ChildC';

const ChildB = () => {
    let data = useContext(TheamContext);
    return (
        <>
            <div>
                application theam is {data}
            </div>
            <ChildC></ChildC>
        </>
    )
}

export default ChildB
