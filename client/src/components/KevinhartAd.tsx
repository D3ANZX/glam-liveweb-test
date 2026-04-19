import mj from '../assets/profilePics/Kevinhart.png'


function KevinhartAd(){
    return(
        <div className="flex justify-center">
            <div className="mt-10 h-220 w-80 bg-purple-900 rounded-2xl p-10 shadow-2xl">
                <div className="">
                    <h1 className="text-white text-2xl font-extrabold">BE INSPIRED, KNOW YOUR IDOL!</h1>
                    <img src={mj} alt="" className='mt-5' />
                    <div className="mt-5">
                        <p className='text-white font-bold text-xl'>Kevin Hart</p>
                        <p className='text-white text-justify'>Kevin Darnell Hart born July 6, 1979 is an American comedian and actor. After winning several stand-up comedy competitions, Hart had his first breakthrough when Judd Apatow cast him in a recurring role on the TV series Undeclared 2001. Hart's comedic reputation continued to grow with the release of his first stand-up album I'm a Grown Little Man 2009. He has since released four more comedy albums: Seriously Funny 2010, Laugh at My Pain 2011, Let Me Explain 2013, and What Now? 2016.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KevinhartAd;