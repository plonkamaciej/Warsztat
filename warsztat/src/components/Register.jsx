import React, { useState } from 'react';
import Nav from "./nav.jsx"
const RegisterForm = () => {
  const [form, setForm] = useState({
    name: '',
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

  fetch('http://localhost:8080/addClient', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  };


  return (
    <>
    <Nav />
    <div className=' mt-10 bg-slate-100 w-1/3 p-8 rounded-xl m-auto'>
     <form className='flex justify-center flex-col' onSubmit={handleSubmit}>
      <label className='m-auto font-extrabold mb-4 text-2xl'>Wprowadź dane aby się zarejestrować</label>
      <input
        type="text"
        name="name"
        id='name'
        value={form.name}
        onChange={handleChange}
        placeholder="Username" className='w-full block m-1 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
      /> 
      
      <input
        type="email"
        name="email"
        id='email'
        value={form.email}
        onChange={handleChange}
        placeholder="Email" className='w-full block m-1 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
      /> 
      
      <input
        type="password"
        name="password"
        id='password'
        value={form.password}
        onChange={handleChange}
        placeholder="Password" className='w-full block m-1 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
      /> 
      <button className='mt-4 px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow' type="submit">Register</button>
        </form>
    </div>
    </>
  );
};

export default RegisterForm;
