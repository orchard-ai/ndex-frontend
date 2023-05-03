import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "store";
import { usertokenSelector } from "store/user/userAuthSlice";
import { ROUTES } from "utils/constants";

const PrivateRoute = () => {
    const token = useAppSelector(usertokenSelector);

    return token !== null ? (
        <Outlet />
    ) : (
        <Navigate to={ROUTES.AUTHENTICATE} />
    );
}

export default PrivateRoute;