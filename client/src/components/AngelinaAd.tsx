import mj from '../assets/profilePics/Angelina.png'


function JennAd(){
    return(
        <div className="flex justify-center">
            <div className="mt-10 h-220 w-80 bg-purple-900 rounded-2xl p-10 shadow-2xl">
                <div className="">
                    <h1 className="text-white text-2xl font-extrabold">BE INSPIRED, KNOW YOUR IDOL!</h1>
                    <img src={mj} alt="" className='mt-5' />
                    <div className="mt-5">
                        <p className='text-white font-bold text-xl'>Angelina Jolie</p>
                        <p className='text-white text-justify'>Angelina Jolie; born Angelina Jolie Voight, June 4, 1975 is an American actress, filmmaker, and humanitarian. She is the recipient of numerous accolades, including an Academy Award, a Tony Award and three Golden Globe Awards. Films in which she has appeared have grossed over $6.9 billion worldwide. She has been named Hollywood's highest-paid actress multiple times. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JennAd;