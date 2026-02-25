import { useContext } from "react";
import { AuthProvider } from "./AuthContext";
import { Navigate } from "react-router-dom";
function ProtectedRoute({ children }) {
    const { token } = useContext(AuthProvider);

    if (!token) {
        return <Navigate to="/" replace />;
    }

    return children;
}
export default ProtectedRoute;