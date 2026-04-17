

import mj from '../assets/profilePics/mj.jpg'


function MJAd(){
    return(
        <div className="flex justify-center">
            <div className="mt-10 h-140 w-80 bg-purple-900 rounded-2xl p-10 shadow-2xl">
                <div className="">
                    <h1 className="text-white text-2xl font-extrabold">YOUR JOURNEY STARTS HERE</h1>
                    <img src={mj} alt="" className='mt-5' />
                </div>
            </div>
        </div>
    );
}

export default MJAd;