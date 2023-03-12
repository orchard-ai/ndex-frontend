import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from 'hooks/useAuth';

export default function Login() {
  const navigate = useNavigate();
  const userInfo = useAuth();

  const handleSuccess = (credentialRes: any) => {
    console.log('success, current user: ', credentialRes);
    userInfo.login(credentialRes);
  };
  const handleFailure = () => {
    console.log('failure');
  };

  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <h1 className='text-2xl font-bold'>Login</h1>
      <div className='flex flex-col items-center justify-center w-full h-full'>
        {/* if doesn't work, replace 127.0.0.1 with localhost in URL */}
        <div id='signInButton'>
          <GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
        </div>
      </div>
    </div>
  );
}
