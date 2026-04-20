

import pic from '../assets/profilePics/taylor_swift.png'


function SwiftAd(){
    return(
        <div className="flex justify-center">
            <div className="mt-10 h-220 w-80 bg-purple-900 rounded-2xl p-10 shadow-2xl">
                <div className="">
                    <h1 className="text-white text-2xl font-extrabold">BE INSPIRED, KNOW YOUR IDOL!</h1>
                    <img src={pic} alt="" className='mt-5' />
                    <div className="mt-5">
                        <p className='text-white font-bold text-xl'>Taylor Swift</p>
                        <p className='text-white text-justify'>Taylor Alison Swift born December 13, 1989 is an American singer-songwriter. An influential figure in popular culture, she is known for her autobiographical songwriting and artistic reinventions. Swift is the highest-grossing live music artist, the wealthiest female musician, and one of the best-selling music artists of all time. Swift is the only artist to have been named the IFPI Global Recording Artist of the Year six times. A record eight of her albums have each sold over a million copies first-week in the US.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SwiftAd;