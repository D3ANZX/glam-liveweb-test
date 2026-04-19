import './cstyles.css'
import home from '../assets/home.png'
import settings from '../assets/settings.png'
import logo from '../assets/ico.png'
import b_eilish from '../assets/profilePics/billie_eilish.png'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Homepage from '../Homepage'
import Settings from '../Settings'

function BottomNav(){
    return(
        <BrowserRouter>
            <div className="w-screen h-12 fixed bottom-0 bg-white flex justify-center items-center drop-shadow-2xl  drop-shadow-black z-10">
                <div className="w-65 flex justify-between gap-10">
                        <button><Link to='/'><img src={home} alt="" className='w-8 h-8'/></Link></button>
                        <button><Link to='/account'><img src={logo} alt="" className='rounded-full h-23 w-23 border-10 border-white mb-9'/></Link></button>
                        <button><Link to='/settings'><img src={settings} alt="" className='w-8 h-8'/></Link></button>
                </div>
            </div>

            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/settings" element={<Settings/>}/>
            </Routes>

        </BrowserRouter>
    );
}

export default BottomNav;