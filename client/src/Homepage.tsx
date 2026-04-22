import mj from './assets/profilePics/mj.png'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import MJAd from './components/MJAd';
import NavBar from './components/NavBar';
import Avatar from './Avatar';
import banner from './assets/banner.png';
import SideBar from './components/SideBar';
import Ranking from './Ranking';
import coin from './assets/coin.png';

function Homepage() {

  const [isTouched, setIsTouched] = useState(false);
  const [activeTab, setActiveTab] = useState("Shop");
  const [coins, setCoins] = useState(0);
  
  useEffect(() => {
    const savedCoins = localStorage.getItem("coins");

    if (savedCoins) {
      setCoins(Number(savedCoins));
    } else {
      localStorage.setItem("coins", "500");
      setCoins(500);
    }
  }, []);

  useEffect(() => {
    const updateCoins = () => {
      const savedCoins = localStorage.getItem("coins");
      if (savedCoins) setCoins(Number(savedCoins));
    };

    window.addEventListener("coinsUpdated", updateCoins);

    return () => {
      window.removeEventListener("coinsUpdated", updateCoins);
    };
  }, []);

  return (
    <div className=" bg-gradient-to-br from-gray-900 to-purple-900">
      <div id='homepage-parent' className="flex justify-center mt-0.3 z-0 w-screen">

        <div className=" mt-23 h-290 w-80 bg-purple-900 rounded-3xl p-3 shadow-2xl flex flex-col items-center">

          <div id='welcome-header' className="top-0 h-30 w-full bg-red-700 rounded-t-3xl shadow-2xl flex items-center justify-center">
            <img src={banner} alt="" className='h-full rounded-t-2xl'/>
          </div>

          <div className="relative bottom-10 right-6 z-0 flex gap-2">
            <div id='profileContainer'>
                <div className="w-30 h-30 bg-white rounded-full border-4 border-purple-900 shadow-xl flex items-center justify-center">
                <img src={mj} alt="" className='h-26 w-26 rounded-full ' />
                </div>
            </div>
            <div className="">
                <h1 className='mt-12 text-white font-bold'>Michael Jackson</h1>
                <p className='text-yellow-300'>King of Pop</p>
            </div>
          </div>


            <div  id='menu-button-container' className= 'flex justify-center gap-2 -mt-6'>
                <button className="bg-yellow-600 text-white w-37 h-9 rounded-lg shadow-black shadow-2xl hover:bg-yellow-300"><Link to='/quiz'>TAKE QUIZ</Link></button>


                <button className="bg-yellow-600 text-white w-37 h-9 rounded-lg shadow-2xl"> <Link to='/trivia'>TRIVIA</Link> </button>
            </div>



              <div className="mt-3 top-13 w-80 h-[3px] bg-gray-300"></div>


  <div className="w-full mt-2">
    <div className="flex justify-between border-b border-gray-400">

      <button
        onClick={() => setActiveTab("Shop")}
        className={`flex-1 pb-2 text-center font-semibold ${
          activeTab === "Shop"
            ? "border-b-4 border-yellow-400 text-yellow-400"
            : "text-white"
        }`}
      >
        Shop
      </button>

      <button
        onClick={() => setActiveTab("Ranks")}
        className={`flex-1 pb-2 text-center font-semibold ${
          activeTab === "Ranks"
            ? "border-b-4 border-yellow-400 text-yellow-400"
            : "text-white"
        }`}
      >
        Ranks
      </button>

      <button
        onClick={() => setActiveTab("Statistics")}
        className={`flex-1 pb-2 text-center font-semibold ${
          activeTab === "Statistics"
            ? "border-b-4 border-yellow-400 text-yellow-400"
            : "text-white"
        }`}
      >
        Stats
      </button>

  </div>
            <div className="mt-4 text-white text-center text-sm relative">
  {activeTab === "Shop" && (
    <div className="relative">
      {/* COINS*/}
      <div className="absolute top-7.5 left-0 flex items-center gap-1 bg-black/40 px-2 py-1 rounded-full">
        <img src={coin} className="w-4 h-4" />
        <p className="text-white text-xs font-bold">{coins}</p>
      </div>

      <Avatar/>
    </div>
  )}

  {activeTab === "Ranks" && <Ranking />}
  {activeTab === "Statistics" && <p> Up and down </p>}
</div>
            </div>
            


              
          </div>
        </div>
        <MJAd/>

    </div>
   );
}

export default Homepage;