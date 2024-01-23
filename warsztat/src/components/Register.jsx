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
    <div className=' mt-10 bg-slate-100 w-1/4 p-10 rounded-xl m-auto'>
     <form className='flex justify-center flex-col' onSubmit={handleSubmit}>
      <label  htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        id='name'
        value={form.name}
        onChange={handleChange}
      /> <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        id='email'
        value={form.email}
        onChange={handleChange}
      /> <br />
      <label  htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        id='password'
        value={form.password}
        onChange={handleChange}
      /> <br />
      <button className='px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow' type="submit">Register</button>
        </form>
    </div>
    </>
  );
};

export default RegisterForm;
