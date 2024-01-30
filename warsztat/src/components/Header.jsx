import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider.jsx";
import React, { useContext } from 'react';

export default function Header() {
  const { isLoggedIn, logOut } = useContext(AuthContext);


  const handleLogout = () => {
    logOut();
  };
  
    return ( 
      <header className="sticky top-0 flex justify-around bg-black p-4">
      <Link to="/"><h1 className="inline-block bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-400 bg-clip-text text-transparent text-4xl font-black">[NAZWA WARSZTATU]</h1></Link>
      <div className="gap-10 flex">
      {isLoggedIn ? <button onClick={handleLogout} className="text-white leading-10">Logout</button> : <Link to="/LoginPage"><a className="text-white leading-10">Login</a></Link>}
      {isLoggedIn ? <></> : <Link to="/Register"><a className="text-white leading-10">Create account</a></Link>}
      </div>
      
    </header>
    )
  };
