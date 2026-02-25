import { useState } from "react";

function First() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [check, setCheck] = useState(false);
    const handleSubmit = () => {
        if (name != "" && password != "" && email != "")
            setCheck(true);
    }
    return (
        <>
            <form method="get">
                Name : <input type="text" onChange={(e) => setName(e.target.value)} required></input>
                <br />
                Password : <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <br />
                Email : <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <br />
                <button type="submit" onClick={handleSubmit}>submit</button>
                {check ? <p>form submitted</p> : <p>fields are empty</p>}
            </form>
        </>
    )
}
export default First;