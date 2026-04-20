

import pic from '../assets/profilePics/Rihanna.png'


function RihannaAd(){
    return(
        <div className="flex justify-center">
            <div className="mt-10 h-220 w-80 bg-purple-900 rounded-2xl p-10 shadow-2xl">
                <div className="">
                    <h1 className="text-white text-2xl font-extrabold">BE INSPIRED, KNOW YOUR IDOL!</h1>
                    <img src={pic} alt="" className='mt-5' />
                    <div className="mt-5">
                        <p className='text-white font-bold text-xl'>Rihanna Fenty</p>
                        <p className='text-white text-justify'>Robyn Rihanna Fenty born February 20, 1988 is a Barbadian singer, businesswoman, and actress. An influential figure in popular culture, she is known for her multifaceted career, artistic reinventions, and eclectic fashion style. Rihanna is one of the best-selling music artists of all time, with estimated sales of over 250 million records. Rihanna is the recipient of numerous accolades, including nine Grammy Awards, twelve Billboard Music Awards, thirteen American Music Awards, and seven MTV Video Music Awards. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RihannaAd;