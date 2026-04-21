import './cstyles.css'
import SideBar from './SideBar';
import { useState } from 'react';
import { sideContext } from './createContext';

function NavBar(){
    const [sideButtonState, setSideButtonState] = useState(false);

    return(  
        <div>
            <sideContext.Provider value={{ sideButtonState, setSideButtonState }}>
            <div className="w-screen flex justify-center items-center top-0">
                <button 
                    onClick={()=> setSideButtonState(!sideButtonState)} 
                    className="mt-25 fixed w-80 h-15 flex items-center justify-left z-10 rounded-[30px]"
                    >
                <div className="w-30 h-12 flex items-center justify-center bg-yellow-600 rounded-[30px]">
                    <h1 className='font-extrabold text-3xl text-white' id="logo">GLAM!</h1>
                    </div>
                </button>
            </div>
            {sideButtonState && <SideBar/>}
            </sideContext.Provider>
        </div>

    );
}

export default NavBar;