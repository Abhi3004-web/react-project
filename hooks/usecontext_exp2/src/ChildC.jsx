import React from 'react'
import { UserContext } from './Context/UserContext'
import { TheamContext } from './Context/TheamContext'
import { useContext, useState } from 'react'

const ChildC = () => {
    let [data, setValue] = useContext(UserContext);
    let theam = useContext(TheamContext);
    let [data1, setData1] = useState("");
    let [city, setCity] = useState("")
    let handleData = (e) => {
        setData1(e.target.value);
    }
    let handleCity = (e) => {
        setCity(e.target.value);
    }
    let handleClick = () => {
        setValue(data1, city);
        setData1("");
        setCity("");
    }
    return (
        <>
            <div>
                my friend name is <strong>[{data.Name.join(", ")}]</strong> and {data.City.length > 1 ? "they are" : "he is"} coming from <strong>[{data.City.join(", ")}]</strong>.
            </div>
            <p>Application theam is {theam}</p>
            Name : <input type="text" onChange={handleData} value={data1}></input><br />
            City : <input type="text" onChange={handleCity} value={city}></input><br />
            <button onClick={handleClick}>add Data</button>
        </>
    )
}

export default ChildC
