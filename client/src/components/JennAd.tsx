
import mj from '../assets/profilePics/Jmarie.png'


function JennAd(){
    return(
        <div className="flex justify-center">
            <div className="mt-10 h-220 w-80 bg-purple-900 rounded-2xl p-10 shadow-2xl">
                <div className="">
                    <h1 className="text-white text-2xl font-extrabold">BE INSPIRED, KNOW YOUR IDOL!</h1>
                    <img src={mj} alt="" className='mt-5' />
                    <div className="mt-5">
                        <p className='text-white font-bold text-xl'>Jenna Ortega</p>
                        <p className='text-white text-justify'>Jenna Marie Ortega born September 27, 2002 is an American actress. Known for her work in horror, Ortega has been dubbed "Gen Z's scream queen" by media publications.[a] She has also been featured on the Power 100 list from The Hollywood Reporter in 2023 and the Forbes 30 Under 30 list in 2024. She gained international recognition and critical plaudits for her portrayal of Wednesday Addams in the Netflix horror comedy series Wednesday in 2022–present.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JennAd;