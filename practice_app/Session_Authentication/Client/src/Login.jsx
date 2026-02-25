import { useState, useContext } from "react";
import axios from "axios";
import { authCreateContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { checkAuth } = useContext(authCreateContext);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post(
                "http://localhost:5000/login",
                { email, password },
                { withCredentials: true }
            );
            console.log(res.data);

            await checkAuth();
            navigate("/dashboard");
        } catch (err) {
            console.log(err.response.data);
            alert("Login failed");
        }
    };
    return (
        <div>
            <h2>Login</h2>
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
export default Login;