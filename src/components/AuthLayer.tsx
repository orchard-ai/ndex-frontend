import { useLoaderData, useOutlet } from 'react-router-dom';
import { AuthProvider } from './Auth/AuthProvider';
export const AuthLayout = () => {
  const outlet = useOutlet();

  return <AuthProvider>{outlet}</AuthProvider>;
};
