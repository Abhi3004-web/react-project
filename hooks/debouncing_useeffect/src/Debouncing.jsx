import React from "react";
import { useEffect, useState } from "react";

function Debouncing() {
    let [pincode, setPincode] = useState("");
    let [data, setData] = useState(null);
    useEffect(() => {
        let timer = setTimeout(() => {
            if (!pincode || pincode.length !== 6) {
                setData(null);
                return;
            }
            fetch(`https://api.postalpincode.in/pincode/${pincode}`)
                .then((response) => response.json())
                .then((data) => setData(data[0]))
                .catch((err) => console.log(err));
            console.log("data fetch");

        }, 2000);
        return () => clearTimeout(timer);
    }, [pincode])

    return (
        <>
            Please enter any pincode : <input type="text" value={pincode} placeholder="Enter Pincode" onChange={(e) => setPincode(e.target.value)}></input>
            {data && data.Status === "Success" ? (
                <div style={{ marginTop: '20px' }}>
                    <h4>Post Office(s) for PIN {pincode}:</h4>
                    <ul>
                        {data.PostOffice.map((office, index) => (
                            <li key={index}>
                                <strong>{office.Name}</strong> - {office.District}, {office.State}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : data && (
                <p style={{ color: 'red' }}>No data found for this PIN code.</p>
            )}
        </>
    )
}
export default Debouncing;