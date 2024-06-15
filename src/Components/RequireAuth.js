import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    const userHasRequiredRole = auth?.role && Array.isArray(auth.role)
        ? auth.role.some(role => allowedRoles.includes(role))
        : allowedRoles.includes(auth?.role);

    return (
        userHasRequiredRole
            ? <Outlet />
            : auth?.user
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
};

export default RequireAuth;
