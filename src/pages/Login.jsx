import { useAuth } from '../components/Auth/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='email' placeholder='Email' required />
      <input type='password' placeholder='Mot de passe' required />
      <button type='submit'>Se connecter</button>
    </form>
  );
};

export default Login;
