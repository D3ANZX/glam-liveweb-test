

import pic from '../assets/profilePics/billie_eilish.png'


function BillieAd(){
    return(
        <div className="flex justify-center">
            <div className="mt-10 h-220 w-80 bg-purple-900 rounded-2xl p-10 shadow-2xl">
                <div className="">
                    <h1 className="text-white text-2xl font-extrabold">BE INSPIRED, KNOW YOUR IDOL!</h1>
                    <img src={pic} alt="" className='mt-5' />
                    <div className="mt-5">
                        <p className='text-white font-bold text-xl'> Billie Eilish</p>
                        <p className='text-white text-justify'>Billie Eilish Pirate Baird O'Connell (born December 18, 2001) is a critically acclaimed American singer-songwriter known for her ethereal vocals, dark electropop sound, and intimate collaborations with her brother, FINNEAS. Rising to fame at age 13 with "Ocean Eyes" (2015), she became one of the youngest artists to win major Grammys, including Album of the Year</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BillieAd;