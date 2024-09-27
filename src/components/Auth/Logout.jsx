import { useAuth } from './AuthProvider';

const Logout = () => {
  const { logout } = useAuth();

  return <button onClick={logout} className='btn btn-primary'>Se déconnecter</button>;
};

export default Logout;
