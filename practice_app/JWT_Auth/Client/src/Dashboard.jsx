import { useContext, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
function Dashboard() {
    const { token, logout } = useContext(AuthProvider);
    const navigator = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:5000/dashboard", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log(res.data);
            }
            catch {
                logout();
                navigator("/")
            }
        }
        fetchData();
    }, [])
    return (
        <>
            <h2>Dashboard</h2>
            <button onClick={logout}>Logout</button></>
    )
}
export default Dashboard;