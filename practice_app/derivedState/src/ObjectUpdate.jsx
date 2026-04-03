import { useState } from "react";

function ObjectUpdate() {
    const [data, setData] = useState({
        name: "Abhijit",
        address: {
            city: "South Delhi",
            Pincode: 110030
        }
    })
    const handleChangeName = (name) => {
        setData({ ...data, name: name });
    }
    const handleChangeCity = (city) => {
        data.address.city = city;
        setData({ ...data, city: { ...data.address.city } });
    }
    return (
        <>
            <h2>Updating object</h2>
            <input type="text" placeholder="Enter name" onChange={(e) => handleChangeName(e.target.value)} />
            <input type="text" placeholder="Enter city" onChange={(e) => handleChangeCity(e.target.value)} />

            <h2>Name : {data.name}</h2>
            <h2>City : {data.address.city}</h2>
            <h2>Pin : {data.address.Pincode}</h2>
        </>
    )
}
export default ObjectUpdate;