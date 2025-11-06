// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useFrappeAuth } from "frappe-react-sdk";

export function ProtectedRoute({ children }) {
    const { currentUser, isLoading } = useFrappeAuth();

    if (isLoading) {
        return <div>{currentUser}</div>;
    }

    if (!currentUser) {
        return <Navigate to="/login" replace />;
    }
    return children;
}
