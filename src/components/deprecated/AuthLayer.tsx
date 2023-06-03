import { useOutlet } from "react-router-dom";
import { AuthProvider } from "components/deprecated/AuthProvider";
export const AuthLayout = () => {
  const outlet = useOutlet();

  return <AuthProvider>{outlet}</AuthProvider>;
};
