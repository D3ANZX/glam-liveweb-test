import './components/cstyles.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import banner from './assets/banner.png';
function AccountMenu(){
    return(
        <div className="w-screen flex-col items-center justify-center">
            <div className="mt-30 h-screen w-screen flex justify-center items-end">
                
                <div className="w-80 h-130 shadow-2xl bg-purple-900 rounded-2xl text-white shadow-2xl">
                    <img src={banner} alt="" className='w-80' />
                    <Link to='/login'><button className="w-full h-15 border-b-1 flex items-center justify-center rounded-2xl">Login</button></Link>
                    <Link to='/login'><button className="w-full h-15 border-b-1 flex items-center justify-center rounded-2xl">Register</button></Link>
                    <Link to='/login'><button className="w-full h-15 border-b-1 flex items-center justify-center rounded-2xl">Logout</button></Link>
                </div>
            </div>
        </div>
    );
}

export default AccountMenu;