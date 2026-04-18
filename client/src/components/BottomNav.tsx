import './cstyles.css'
import home from '../assets/home.png'
import settings from '../assets/settings.png'
import b_eilish from '../assets/profilePics/billie_eilish.png'
function BottomNav(){
    return(
        <div className="w-screen h-12 fixed bottom-0 bg-white flex justify-center items-center drop-shadow-2xl  drop-shadow-black z-10">
            <div className="w-65 flex justify-between gap-10">
                <button><img src={home} alt="" className='w-8 h-8'/></button>
                <img src={b_eilish} alt="" className='rounded-full h-23 w-23 border-10 border-white mb-9'/>
                <button><img src={settings} alt="" className='w-8 h-8'/></button>
            </div>
        </div>
    );
}

export default BottomNav;