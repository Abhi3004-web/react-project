import { useContext, useState } from "react";
import { AuthProvider } from "./AuthContext";
import { useNavigate } from 'react-router-dom'
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthProvider);
    const navigator = useNavigate();
    const handleLogin=async()=>{
        try{
        await login(email, password);
        navigator("/dashboard");
        }catch{
            alert("Login Failed");
        }

    }
    return (
        <>
            <input type="text" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </>
    )
}
export default Login;