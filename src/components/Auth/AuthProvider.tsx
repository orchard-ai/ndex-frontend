import { AuthContext } from 'hooks/useAuth';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'hooks/useLocalStorage';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data: any) => {
    await setUser(data);
    navigate('/search');
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    navigate('/', { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
