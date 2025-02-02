import { useState } from "react";
import { useNavigate, Navigate, Link } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';
// import toast from 'react-hot-toast';
import ErrorAlert from '../components/ErrorAlert';


const apiUrl = import.meta.env.VITE_API_BASE_URL

const Login = () => {
 
const [email,setEmail] = useState ('');
const [password,setPassword] = useState ('');
const [error,setError] = useState ('');
const [isLoading, setIsLoading] = useState(false);

const navigate =useNavigate();


if (localStorage.getItem('token')) {
  return <Navigate to='/notes' replace />;
}

const handleSubmit = async e => {
  e.preventDefault();
  if (!email.trim() || !password.trim()) return;

  setIsLoading(true);
  setError('');

try {
  const response = await fetch(`${apiUrl} /v1/auth/login`,{
    method: "POST",
    headers:{"Content-Type": "application/json"},
    body: JSON.stringify({
      email: email.trim(),
      password: password.trim(),
    }),
  });

const data = await response.json()
  //  console.log(data,);
  
if (data.ok){
  localStorage.setItem('note-app-token', data.token);
  navigate('/notes');
  setIsLoading(false);
}else{
  throw new Error(data.message || 'Login failed');
}

}catch(error) {
  console.log(error.message)
  setError(error.message || 'Failed to login. Please try again.')
}finally{
    setIsLoading(false);
  }
}


  return (
    <main className=" h-screen p-6 md:p-8 bg-slate-800 flex items-center justify-center">
      <div className="w-full max-w-md">
    
        <h1 className="text-4xl mb-8 font-extrabold text-center text-white">Login</h1>

       <form
        onSubmit={handleSubmit}

       className="bg-slate-700 p-6 rounded-xl  border border-slate-300 
       transition-all">

          {error && (
            <ErrorAlert
              className='mb-6 p-4 bg-error/10 text-error rounded-lg border
               border-error/50 flex items-center gap-3'
              message={error}
            />
          )}

        <input type="email" 
        placeholder="Email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
         className="  w-full mb-4 text-white p-2 rounded-lg border border-slate-300 px-4 py-3
         outline-none focus:border-gray-400 transition-all duration-700 font-medium"/>

         <input
          type="password" 
         placeholder="Password" 
         required
         value={password}
         onChange={e => setPassword(e.target.value)}
         className="w-full mb-4  p-2 rounded-lg border border-slate-300 px-4 py-3 
         outline-none text-white focus:border-gray-400 transition-all duration-700 font-medium"/>
        
        <button
        type='submit'
        disabled={isLoading}
         className="w-full bg-slate-800 text-white px-6 py-3 flex items-center justify-center 
         transition-all rounded-xl disabled:opacity-70 disabled:cursor-not-allowed gap-2">

            {isLoading ? <Loader2 className='animate-spin' size={20} /> : null}
            <span>{isLoading? 'Logging in...' : 'Login'}</span>

          </button>
          
          <div className='mt-6 text-center'>
            <Link
              to='/signup'
              type='button'
              className=' text-white/60 hover:text-white transition-colors inline-flex items-center gap-2'
            >
              Don't have an account? Sign up
              <ArrowRight size={16} />
            </Link>
          </div>
        </form>
        </div>
    
      </main>
  
  )
};

export default Login
