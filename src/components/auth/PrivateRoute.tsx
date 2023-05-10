import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "store";
import { userTokenSelector } from "store/user/userAuthSlice";
import { ROUTES } from "utils/constants";

const PrivateRoute = () => {
    const token = useAppSelector(userTokenSelector);

    return token !== null ? (
        <Outlet />
    ) : (
        <Navigate to={ROUTES.AUTHENTICATE} />
    );
}

export default PrivateRoute;