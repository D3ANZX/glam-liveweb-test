import { useState } from "react";

function Settings(){
    const [theme, setTheme] = useState("light");
    const [isToggled, setToggle] = useState(false);
    return(  
        <div className="mt-10 w-screen h-screen flex justify-center max-w-screen ">

            <div className="rounded-2xl w-80 h-120 p-10 shadow-2xl bg-purple-900 text-white">
                <h1 className='font-bold text-2xl'>Settings</h1>
                
                <div className="flex w-full">
                    <div className="mt-5 flex items-center">
                        <h2 className='font-semibold'>THEME </h2>
                        <div className="ml-2 h-8 w-14 border-2 rounded-full flex items-center" >
                            <div className="ml-1 h-6 w-6 rounded-full bg-yellow-300"></div>
                        </div>
                    </div>
                </div>

                
                <div className="flex w-full">
                    <div className="mt-5 flex items-center">
                        <h2 className='font-semibold'>BGM </h2>
                        <div className="ml-2 h-8 w-14 border-2 rounded-full flex items-center">
                            <div className="ml-1 h-6 w-6 rounded-full bg-yellow-300"></div>
                        </div>
                    </div>
                </div>

                <button className='mt-4 bg-red-900 text-white w-40 h-8 rounded-xl'>PRIVACY POLICY</button>
                <button className='mt-4 bg-red-900 text-white w-40 h-8 rounded-xl'>DELETE ACCOUNT</button>
                <button className='mt-4 bg-red-900 text-white w-40 h-8 rounded-xl'>ABOUT</button>
                
                <div className="mt-5">
                    <p className='text-l font-semibold'>Developers:</p>
                    <p className='text-sm'>Florentino Dean P. Gas</p>
                    <p className='text-sm'>Jenmar Oliveros</p>
                    <p className='text-sm'>BJ B. Saycon</p>
                </div>
            </div>
        </div>
    );
}

export default Settings;