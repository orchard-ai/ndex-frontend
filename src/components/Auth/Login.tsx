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
      <div className='flex flex-col items-center justify-center w-full h-full space-y-3'>
        <h1 className='text-6xl tracking-title'>Ndex</h1>
        <h2 className='text-2xl tracking-title'>Index anthing, search <b>everything</b></h2>
        <div className="font-bold">
          Login with:
        </div>
        {/* if doesn't work, replace 127.0.0.1 with localhost in URL */}
        <div id='signInButton'>
          <GoogleLogin text="continue_with" onSuccess={handleSuccess} onError={handleFailure} />
        </div>
        <div>
          <button> Login </button>
        </div>
      </div>
    </div>
  );
}
