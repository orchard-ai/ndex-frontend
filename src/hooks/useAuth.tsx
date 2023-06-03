import { createContext, useContext } from "react";
import { User } from "utils/types";

type AuthContextType = {
  user: User;
  login: (
    data: any,
    onSuccess: () => void,
    onFailure?: (error: Error) => void
  ) => void;
  logout: (onSuccess: () => void, onFailure?: (error: Error) => void) => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: {} as User,
  login: (onSuccess: () => void, onFailure?: (error: Error) => void) => {},
  logout: (onSuccess: () => void, onFailure?: (error: Error) => void) => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const useIsLoggedIn = () => {
  const { user } = useAuth();

  if (
    user?.clientId !== "" &&
    user?.clientId !== undefined &&
    user?.clientId !== null
  ) {
    return true;
  }

  return false;
};
