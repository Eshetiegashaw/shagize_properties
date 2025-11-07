import { useNavigate } from "react-router-dom";
import { useFrappeAuth } from "frappe-react-sdk";

export const useLogout = () => {
	const navigate = useNavigate();
	const { logout } = useFrappeAuth();

	const handleLogout = async () => {
		try {
			await logout();
			navigate("/login", { replace: true });
		} catch (error) {
			console.error("Logout failed:", error);
			alert("Logout failed. Please try again.");
		}
	};

	return handleLogout;
};
