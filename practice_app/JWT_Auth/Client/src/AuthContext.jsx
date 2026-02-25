
import { createContext, useState } from "react";
import axios from 'axios';
export const AuthProvider = createContext();
export function AuthContext({ children }) {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState(null);
    const login = async (email, password) => {
        try {
            const res = await axios.post("http://localhost:5000/login", { email, password });
            localStorage.setItem("token", res.data.token);
            setToken(res.data.token);
        } catch (error) {
            console.log("FULL ERROR:", error);
            console.log("RESPONSE:", error.response);
            throw error;
        }
    };
    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
        setToken(null);
    }
    return (
        <AuthProvider.Provider value={{ login, logout, token, user, setUser }}>
            {children}
        </AuthProvider.Provider>
    )
}
