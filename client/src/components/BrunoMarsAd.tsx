

import pic from '../assets/profilePics/brunomars.jpg'


function BrunoMarsAd(){
    return(
        <div className="flex justify-center">
            <div className="mt-10 h-220 w-80 bg-purple-900 rounded-2xl p-10 shadow-2xl">
                <div className="">
                    <h1 className="text-white text-2xl font-extrabold">BE INSPIRED, KNOW YOUR IDOL!</h1>
                    <img src={pic} alt="" className='mt-5' />
                    <div className="mt-5">
                        <p className='text-white font-bold text-xl'> Bruno Mars</p>
                        <p className='text-white text-justify'>Bruno Mars (Peter Gene Hernandez), born October 8, 1985, is an American singer, songwriter, and record producer known for his retro showmanship, versatile musical styles (pop, R&B, funk, soul), and high-energy live performances with his band, the Hooligans. A global superstar, he is a 16-time Grammy winner celebrated for hits like "Just the Way You Are" and "Uptown Funk".</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrunoMarsAd;