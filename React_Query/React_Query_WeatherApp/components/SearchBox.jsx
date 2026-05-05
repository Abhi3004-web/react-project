import { useState } from "react";

function SearchBox({ setCity }) {
    const [inputVal, setInputVal] = useState("");
    const handleSearch = () => {
        setCity(inputVal);
    }
    return (
        <>
            <input type="text" value={inputVal} placeholder="Enter city name" onChange={(e) => setInputVal(e.target.value)} />
            <button onClick={handleSearch}>Submit</button>
        </>
    )
}
export default SearchBox;