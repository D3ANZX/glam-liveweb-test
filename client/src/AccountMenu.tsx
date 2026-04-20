import './components/cstyles.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import banner from './assets/banner.png'
function AccountMenu(){
    return(
        <div className="mt-30 h-screen w-screen flex flex-col items-center overflow-hidden">

            <div className="h-max w-80 shadow-2xl">
                <img src={banner} alt="" className="rounded-2xl" />
            </div>

            <div className="mt-5 w-80 h-max shadow-2xl bg-purple-900 rounded-2xl text-white shadow-2xl">
                <Link to='/login'><button className="w-full h-15 border-b-1 flex items-center justify-center rounded-2xl">Login</button></Link>
                <Link to='/login'><button className="w-full h-15 border-b-1 flex items-center justify-center rounded-2xl">Register</button></Link>
                <Link to='/login'><button className="w-full h-15 border-b-1 flex items-center justify-center rounded-2xl">Logout</button></Link>
            </div>
        </div>
           
    );
}

export default AccountMenu;