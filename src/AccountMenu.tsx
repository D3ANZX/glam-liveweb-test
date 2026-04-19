import './components/cstyles.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import LoginPage from './LoginPage';
function AccountMenu(){
    return(
        <div className="mt-30 h-100 w-screen flex justify-center">
            <div className="w-80 h-150 shadow-2xl shadow-yellow-900 rounded-2xl">
                
                <Link to='/login'><button className="w-full h-15 border-1 flex items-center justify-center rounded-2xl">Login</button></Link>
            </div>
        </div>
    );
}

export default AccountMenu;