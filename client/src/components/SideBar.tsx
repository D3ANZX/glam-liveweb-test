import home from '../assets/home.png'
import settings from '../assets/settings.png'
import user from '../assets/user.png'
import logout from '../assets/logout.png'
import { useContext } from 'react';
import { sideContext } from './createContext';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';



function SideBar(){
    const { sideButtonState, setSideButtonState } = useContext(sideContext);

    return(
        <div className="w-screen flex justify-center ml-[-50px]">
            <div className="fixed top-0 z-10 p-4">
                <div className="h-100 w-50 bg-white rounded-[30px]">
                    
                    <div className="p-4 flex flex-col items-center w-full h-40 shadow-lg">
                        <div className="w-full flex justify-end">
                            <button 
                                onClick={()=> setSideButtonState(!sideButtonState)} 
                                className="flex items-center justify-center h-7 w-7 border-2 rounded-full"
                            >
                                X
                            </button>
                        </div>

                        <div className="mt-5 w-full flex justify-start">
                            <div className="w-18 h-18 rounded-full bg-purple-900"></div>
                            <div className="ml-2 w-18">
                                <h1 className='font-bold'>Michael Jackson</h1>
                                <h2 className='text-[12px] text-yellow-900'>Rising Artist</h2>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-85">
                        <Link to='/login'>
                            <div className="ml-5 mt-2 flex items-center h-10 gap-2">
                                <img src={user} className='h-8 w-8'/>
                                <p>LOGIN</p>
                            </div>
                        </Link>

                        <Link to='/'>
                            <div className="ml-5 mt-2 flex items-center h-10 gap-2">
                                <img src={home} className='h-8 w-8'/>
                                <p>HOME</p>
                            </div>
                        </Link>

                        <Link to='/settings'>
                            <div className="ml-5 mt-2 flex items-center h-10 gap-2">
                                <img src={settings} className='h-8 w-8'/>
                                <p>SETTINGS</p>
                            </div>
                        </Link>


                        <div className="ml-5 mt-2 flex items-center h-10 gap-2">
                            <img src={logout} className='h-8 w-8'/>
                            <p>LOGOUT</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
    );
}

export default SideBar;