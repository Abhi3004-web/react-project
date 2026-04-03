import { useState } from "react";

function ArrayUpdate() {
    const items = ["Abhijit", "Soun", "Atul", "Ravi", "Muskan", " Komal"];
    const empDetails = [
        { name: "Abhijit", age: 30 },
        { name: "Abhishek", age: 35 },
        { name: "Abhilasha", age: 29 },
        { name: "Akansha", age: 20 },
        { name: "Anurag", age: 22 }
    ]
    const [data, setData] = useState(items);
    const [emps, setEmps]=useState(empDetails);
    const updateValue = (name) => {
        items[items.length - 1] = name;
        setData([...items]);
    }
    return (
        <>
            <h3>Array Updating</h3>
            <input type="text" placeholder="enter value" onChange={(e) => updateValue(e.target.value)} />
            {
                data.map((item, index) =>
                    <p key={index}>{item}</p>)
            }
        </>
    )
}
export default ArrayUpdate;