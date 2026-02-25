import { createContext, useState } from "react";
import axios from 'axios';
import { useEffect } from "react";

export const authCreateContext = createContext();

export function AuthContext({ children }) {
    const [user, setUser] = useState(null);
    const checkAuth = async () => {
        try {
            const res = await axios.get("http://localhost:5000/dashboard", {
                withCredentials: true,
            });
            setUser(res.data.user);
        } catch {
            setUser(null);
        }
    };
    useEffect(() => {
        checkAuth();
    }, [])

    return (
        <authCreateContext.Provider value={{user, setUser, checkAuth }}>
            {children}
        </authCreateContext.Provider>
    )
}