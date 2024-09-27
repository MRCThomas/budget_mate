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
    <div className='vh-100 d-flex justify-content-center align-items-center'>
      <form onSubmit={handleSubmit} className='d-flex flex-column'>
        <input type='email' placeholder='Email' className='mb-4' required />
        <input
          type='password'
          placeholder='Mot de passe'
          className='mb-4'
          required
        />
        <button type='submit' className='btn btn-primary'>
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Login;
