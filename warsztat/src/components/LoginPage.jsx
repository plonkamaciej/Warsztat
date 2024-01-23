import React, { useState } from 'react';
import Nav from './nav';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
 // handle login logic here
  }

  
  return (
    <>
    <Nav />
    <div className='flex justify-center mt-10 bg-slate-100 w-1/2 p-10 rounded-xl m-auto'>
    <form onSubmit={handleSubmit} >
      <label className=' m-5'>
        Email:
        <input type="email" className=' m-5' value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label className=' m-5'>
        Password:
        <input type="password" className=' m-5' value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit" className='px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow'>Login</button>
    </form>
    </div>
    </>
  );
}

export default LoginPage;