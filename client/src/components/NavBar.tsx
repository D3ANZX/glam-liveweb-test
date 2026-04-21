import './cstyles.css'
import SideBar from './SideBar';
import { useState } from 'react';
import { sideContext } from './createContext';

function NavBar(){
    const [sideButtonState, setSideButtonState] = useState(false);

    return(
<<<<<<< HEAD
        <sideContext.Provider value={{ sideButtonState, setSideButtonState }}>
            <div>
                <div className="w-screen flex justify-center items-center top-0">
                    <button 
                        onClick={()=> setSideButtonState(!sideButtonState)} 
                        className="mt-25 fixed w-80 h-15 flex items-center justify-left z-10 rounded-[30px]"
                    >
                        <div className="w-30 h-12 flex items-center justify-center bg-yellow-600 rounded-[30px]">
                            <h1 className='font-extrabold text-3xl text-white' id="logo">GLAM!</h1>
                        </div>
                    </button>
=======
<<<<<<< HEAD
        <div className="w-screen h-20 flex justify-center items-center fixed top-0 bg-white drop-shadow-xl z-60">
            <div className="w-100 flex items-center justify-around ">
=======
        
        <div className="w-screen flex justify-center items-center top-0">
            <div className="mt-25 fixed w-80 h-15 flex items-center justify-left z-10 rounded-[30px] ">
                {/*
>>>>>>> d8419d0b9a97549cfbe7c09333b7f5e5a4036b66
                <div className="flex items-center gap-2">
                    <img src={coinIcon} alt="" className='h-8 w-8 animate-spin' />
                    <p>100</p>
                </div>
                */}
                <div className="w-30 h-12 flex items-center justify-center align-center bg-yellow-600 rounded-[30px]">
                    <h1 className='font-extrabold text-3xl text-white 'id="logo">GLAM!</h1>
>>>>>>> ded3a78576132287060671473246374a10439e8f
                </div>

                {sideButtonState && <SideBar/>}
            </div>
        </sideContext.Provider>
    );
}

export default NavBar;