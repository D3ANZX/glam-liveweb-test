import './cstyles.css'
import burger from '../assets/burger.png'
import SideBar from './SideBar';

import { useState } from 'react';
import { sideContext } from './createContext';

function NavBar(){
    const [sideButtonState, setSideButtonState] = useState(false);

    return(  
        <div>
            <sideContext.Provider value={{ sideButtonState, setSideButtonState }}>
            <div className="w-screen flex justify-center items-center top-0 ">
                <button 
                    onClick={()=> setSideButtonState(!sideButtonState)} 
                    className="mt-25 fixed w-80 h-15 flex items-center justify-left z-21 rounded-[30px]"
                    >
                    <div className="w-14 h-14 flex items-center justify-center bg-yellow-600 rounded-full shadow-2xl">
                        <img src={burger} alt="" className="h-10 w-10" />
                    </div>
                </button>
            </div>
            {sideButtonState && <SideBar/>}
            </sideContext.Provider>
        </div>

    );
}

export default NavBar;