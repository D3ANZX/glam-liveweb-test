import './cstyles.css'
import home from '../assets/home.png'
import settings from '../assets/settings.png'
import logo from '../assets/ico.png'
import b_eilish from '../assets/profilePics/billie_eilish.png'
import accountIcon from '../assets/user.png'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Homepage from '../Homepage'
import Settings from '../Settings'
import AccountMenu from '../AccountMenu'
import LoginPage from '../LoginPage'
import TriviaPage from '../TriviaPage'
import TrueFalse from '../TrueFalse'
import RegisterPage from '../RegisterPage'
function BottomNav(){
    return(
        <BrowserRouter>
        <div className="w-screen flex justify-center">
            <div className="mb-5 w-50 h-14 fixed bottom-0 border-5 border-orange-900 bg-red-900 rounded-full flex justify-around items-center z-10">
                <div className="w-65 flex justify-center gap-4">
                    <button><Link to='/account'><img src={accountIcon} alt="" id="nav-icon" className='w-8 h-8'/></Link></button>
                    <button><Link to='/'><img src={home} alt="" id="nav-icon" className='w-8 h-8'/></Link></button>
                    <button><Link to='/settings'><img src={settings} alt="" id="nav-icon" className='w-8 h-8'/></Link></button>
                </div>
            </div>
        </div>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="/account" element={<AccountMenu/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/trivia' element={<TriviaPage/>}/>
                <Route path='/quiz' element={<TrueFalse/>}/>
            </Routes>

        </BrowserRouter>
    );
}

export default BottomNav;