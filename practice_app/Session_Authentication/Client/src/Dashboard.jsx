import { useContext } from "react";
import axios from "axios";
import { authCreateContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
function Dashboard() {
    const { user, setUser } = useContext(authCreateContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        await axios.post("http://localhost:5000/logout", {}, { withCredentials: true });
        setUser(null);
        navigate("/");
    };

    if (!user) return <h2>Unauthorized</h2>;

    return (
        <div>
            <h2>Welcome {user.email}</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
export default Dashboard;