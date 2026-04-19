import mj from '../assets/profilePics/Gaga.png'


function GagaAd(){
    return(
        <div className="flex justify-center">
            <div className="mt-10 h-220 w-80 bg-purple-900 rounded-2xl p-10 shadow-2xl">
                <div className="">
                    <h1 className="text-white text-2xl font-extrabold">BE INSPIRED, KNOW YOUR IDOL!</h1>
                    <img src={mj} alt="" className='mt-5' />
                    <div className="mt-5">
                        <p className='text-white font-bold text-xl'>Lady Gaga</p>
                        <p className='text-white text-justify'>Stefani Joanne Angelina Germanotta born March 28, 1986, is an American singer, songwriter, and actress. Known for her image reinventions and versatility across the entertainment industry, she is an influential figure in popular music. She is one of the best-selling music artists of all time. Publications such as Billboard and Rolling Stone have ranked her among the greatest artists in history.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GagaAd;