import { Navigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import { ROUTES } from "utils/constants";

type PropType = {
  children: React.ReactNode;
};

export const ProtectedRoute = ({ children }: PropType) => {
  const { user } = useAuth();
  if (
    user === null ||
    (Object.keys(user).length === 0 && user.constructor === Object)
  ) {
    // user is not authenticated
    return <Navigate to={ROUTES.AUTHENTICATE} />;
  }
  return children;
};
