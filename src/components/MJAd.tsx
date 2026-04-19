

import mj from '../assets/profilePics/mj.jpg'


function MJAd(){
    return(
        <div className="flex justify-center">
            <div className="mt-10 h-220 w-80 bg-purple-900 rounded-2xl p-10 shadow-2xl">
                <div className="">
                    <h1 className="text-white text-2xl font-extrabold">BE INSPIRED, KNOW YOUR IDOL!</h1>
                    <img src={mj} alt="" className='mt-5' />
                    <div className="mt-5">
                        <p className='text-white font-bold text-xl'> Michael Jackson</p>
                        <p className='text-white text-justify'>Michael Jackson: Biography, Musician, Dancer, Grammy WinnerMichael Jackson (1958–2009) was an American singer, songwriter, and dancer recognized as the "King of Pop" and one of the most influential entertainers in history. Rising to fame with the Jackson 5, he became a global icon known for hits like "Thriller," pioneering music videos, and dance moves like the "moonwalk".</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MJAd;