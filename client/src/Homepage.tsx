import mj from './assets/profilePics/mj.jpg'
import rwy from './assets/bgm/ROCK WITH YOU (SWG Extended Mix) - MICHAEL JACKSON (Off The Wall).mp3'
function Homepage() {
  return (
    <div id='homepage-parent' className="flex justify-center mt-0.3 z-0 w-screen">

      <div className=" mt-23 h-139 w-80 bg-purple-900 rounded-3xl p-3 shadow-2xl flex flex-col items-center">

        <div id='welcome-header' className="top-0 h-30 w-full bg-red-700 rounded-t-3xl shadow-2xl flex items-center justify-center">
          <h1 className="text-white font-semibold">Welcome Back!</h1>
        </div>

        <div className="relative bottom-5 right-6 z-0 flex gap-2">
          <div id='profileContainer'>
              <div className="w-30 h-30 bg-white rounded-full border-4 border-purple-900 shadow-xl flex items-center justify-center">
              <img src={mj} alt="" className='h-25 w-25 rounded-full' />
              </div>
          </div>
          <div className="">
              <h1 className='mt-8 text-white font-bold'>Michael Jackson</h1>
              <p className='text-yellow-300'>King of Pop</p>
          </div>
        </div>


          <div  id='menu-button-container' className='flex justify-center gap-5'>
              <button className="bg-yellow-600 text-white w-30 h-10 rounded-lg shadow-black shadow-2xl">TAKE QUIZ</button>
              <button className="bg-yellow-600 text-white w-30 h-10 rounded-lg shadow-2xl"> TRIVIA</button>
          </div>


            <div className="mt-10 top-13 w-80 h-[3px] bg-gray-300"></div>
            <div className="mt-10 top-22 w-80 h-[1px] bg-gray-300"></div>
        </div>

   
      </div>
      
   );
}

export default Homepage;