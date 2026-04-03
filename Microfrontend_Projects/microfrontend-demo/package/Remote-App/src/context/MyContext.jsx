
import { useContext, createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount((prev) => prev + 1);
    }
    return (
        <>
        <MyContext.Provider value={{ count, increment }}>
            {children}
        </MyContext.Provider>
        </>
    )
}

export const useSharedState = () => {
    const context = useContext(MyContext);
    if (!context) throw new Error('useSharedState must use within provider');
    return context;
}