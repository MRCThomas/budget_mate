import { useAuth } from './AuthProvider';

const Logout = () => {
  const { logout } = useAuth();

  return <button onClick={logout}>Se déconnecter</button>;
};

export default Logout;
