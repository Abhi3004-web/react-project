import { useState } from "react";

function Third() {
    const [skills, setSkills] = useState([]);
    const [gender, setGender] = useState("male");
    const [city, setCity] = useState("");
    const [check, setCheck] = useState(false);

    const handleCheck = (e) => {
        if (e.target.checked) {
            setSkills([...skills, e.target.value]);
        } else {
            setSkills(skills.filter((item) => item !== e.target.value));
        }
    }

    const handleCity = (e) => {
        if (e.target.value === "") {
            setCheck(false);
        } else {
            setCheck(true);
            setCity(e.target.value);
        }
    }


    return (
        <>
            <input type="checkbox" id="php" value="PHP" onChange={handleCheck} />
            <label htmlFor="php">PHP</label>

            <input type="checkbox" id="js" value="JS" onChange={handleCheck} />
            <label htmlFor="js">Javascript</label>

            <input type="checkbox" id="react" value="React" onChange={handleCheck} />
            <label htmlFor="react">React</label>

            <input type="checkbox" id="redux" value="Redux" onChange={handleCheck} />
            <label htmlFor="redux">Redux</label>
            <br />

            <h1>{skills.join(",")}</h1>

            <br /><br />
            Gender :
            <input type="radio" id="male" name="gender" value="male" onChange={(e) => setGender(e.target.value)} checked={gender === "male"} />
            <label htmlFor="male">Male</label>

            <input type="radio" id="female" name="gender" value="female" onChange={(e) => setGender(e.target.value)} checked={gender === "female"} />
            <label htmlFor="female">Female</label>

            <h3>Select Gender : {gender}</h3>
            <br /><br />
            Select city :
            <select onChange={handleCity} defaultValue={"Delhi"}>
                <option value="">--select--</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalor">Bangalor</option>
                <option value="Kolkatta">Kolkatta</option>
                <option value="Chennai">Chennai</option>
            </select>
            {check && <h3>selected city : {city}</h3>}
        </>
    )
}
export default Third;