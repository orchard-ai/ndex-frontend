import { useOutlet } from 'react-router-dom';
import { AuthProvider } from 'components/Auth/AuthProvider';
export const AuthLayout = () => {
  const outlet = useOutlet();

  return <AuthProvider>{outlet}</AuthProvider>;
};
