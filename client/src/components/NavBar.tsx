import './cstyles.css'
import coinIcon from '../assets/coin.png'
function NavBar(){
    return(
        
        <div className="w-screen flex justify-center items-center top-0">
            <div className="mt-25 fixed w-80 h-15 flex items-center justify-left z-10 rounded-[30px] ">
                {/*
                <div className="flex items-center gap-2">
                    <img src={coinIcon} alt="" className='h-8 w-8 animate-spin' />
                    <p>100</p>
                </div>
                */}
                <div className="w-30 h-12 flex items-center justify-center align-center bg-yellow-600 rounded-[30px]">
                    <h1 className='font-extrabold text-3xl text-white 'id="logo">GLAM!</h1>
                </div>

                {/*
                <div className="h-10 w-10 rounded-full border-5 border-red-900 flex items-center justify-center">
                    <h1 className='font-bold text-yellow-900'>100</h1>
                </div>*/}
                           
            </div>
        </div>
    );
}

export default NavBar;