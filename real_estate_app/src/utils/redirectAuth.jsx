// src/components/RedirectIfAuth.jsx
import { Navigate } from "react-router-dom";
import { useFrappeAuth } from "frappe-react-sdk";

export function RedirectIfAuth({ children }) {
    const { currentUser, isLoading } = useFrappeAuth();
    console.log('The currentUser is ', currentUser);

    if (isLoading) {
        return <div></div>;
    }

    if (currentUser) {
        return <Navigate to="/" replace />;
    }

    return children;
}
