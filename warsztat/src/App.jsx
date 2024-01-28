import './output.css'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx'
import Naprawy from './components/Naprawy.jsx'
import Pomoc from './components/Pomoc.jsx'
import Wypozyczalnia from './components/Wypozyczalnia.jsx'
import ErrorPage from './components/Error.jsx'
import LoginPage from './components/LoginPage.jsx';
import RegisterForm from './components/Register.jsx';
import { AuthProvider } from './components/AuthProvider.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

function App() {
  
  return (
      <div className=' min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-500 via-sky-700 to-purple-900 scroll-smooth h-full'>
         <AuthProvider>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/naprawy" element={<Naprawy />} />
          <Route path="/pomoc" element={<Pomoc />} />
          <Route path="/wypozyczalnia" element={<PrivateRoute><Wypozyczalnia /></PrivateRoute>} />
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/LoginPage" element={<LoginPage/>} />
          <Route path="/Register" element={<RegisterForm/>} />
        </Routes>
        </AuthProvider>
      </div>
  )
}

export default App