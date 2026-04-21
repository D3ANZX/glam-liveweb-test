import './cstyles.css'
import coinIcon from '../assets/coin.png'
function NavBar(){
    return(
        <div className="w-screen h-20 flex justify-center items-center fixed top-0 bg-white drop-shadow-xl z-60">
            <div className="w-100 flex items-center justify-around ">
                <div className="flex items-center gap-2">
                    <img src={coinIcon} alt="" className='h-8 w-8 animate-spin' />
                    <p>100</p>
                </div>
                <div className="flex-col justify-start align-center">
                    <h1 className='font-extrabold text-3xl text-red-900'id="logo">GLAM!</h1>
                    <p className='ml-1 italic text-sm'> Where fun begins</p>
                </div>

                <div className="h-15 w-15 rounded-full border-2 border-purple-900 flex items-center justify-center">
                    <h1 className='font-bold text-yellow-900'>LV:100</h1>
                </div>
                           
            </div>
        </div>
    );
}

export default NavBar;