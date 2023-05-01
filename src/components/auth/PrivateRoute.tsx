import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "store";
import { userIdSelector, userNdexTokenSelector } from "store/user/userAuthSlice";
import { ROUTES } from "utils/constants";

const PrivateRoute = () => {
    // const ndexToken = useAppSelector(userNdexTokenSelector);
    const userId = useAppSelector(userIdSelector);

    return userId !== null ? (
        <Outlet />
    ) : (
        <Navigate to={ROUTES.AUTHENTICATE} />
    );
}

export default PrivateRoute;