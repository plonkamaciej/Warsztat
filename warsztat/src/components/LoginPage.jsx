import React, { useContext, useState } from 'react';
import axios from 'axios';
import Nav from './nav.jsx';
import { AuthContext } from './AuthProvider.jsx';

const LoginPage = () => {
  const { logIn } = useContext(AuthContext);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    
    try  {
      logIn(form.email, form.password);
    }
    catch(error) {
      console.error('Error:', error);
    };
  };

  
  return (
    <>
      <Nav />
      <div className='mt-10 bg-slate-100 w-1/3 p-4 rounded-xl m-auto'>
        <form className='flex justify-center flex-col' onSubmit={handleSubmit}>
          <label className='m-auto mt-2 font-extrabold mb-4 text-2xl'>Login</label>

          <input type='email' placeholder="Username" className='w-full block m-1 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500' value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />

          <input type="password" placeholder="Password" className='w-full block m-1 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500' value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} />

          <button type="submit" className='m-1 px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow'>Login</button>
        </form>
      </div>
    </>
  );
}

export default LoginPage;