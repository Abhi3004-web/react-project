import React from 'react'
import { UserContext } from './Context/UserContext'
import { useContext } from 'react'
import ChildB from './ChildB';

const ChildA = () => {
    let [data] = useContext(UserContext);
    return (
        <>
            <ChildB></ChildB>
            <div>
                my friend name is {data.Name.join(", ")} and {data.City.length > 1 ? "they are" : "he is"} coming from {data.City.join(", ")}.
            </div>
        </>
    )
}

export default ChildA
