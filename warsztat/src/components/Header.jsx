import { Link } from "react-router-dom";


export default function Header() {
    return ( 
      <header className="flex justify-around bg-black p-4">
      <Link to="/"><h1 className="inline-block bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-400 bg-clip-text text-transparent text-4xl">[NAZWA WARSZTATU]</h1></Link>
      <div className="gap-10 flex">
      <Link to="/LoginPage"><a className="text-white leading-10">Login</a></Link>
      <Link to="/Register"><a className="text-white leading-10">Create account</a></Link>
      </div>
      
    </header>
    )
  };
