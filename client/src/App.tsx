
import NavBar from "./components/NavBar";
import BottomNav from "./components/BottomNav";
import LoginPage from "./LoginPage.tsx";
import Homepage from "./Homepage.tsx";
import MJAd from "./components/MJAd.tsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Settings from "./Settings.tsx";
function App(){
  return(
    <div className='mb-40'>

      <BottomNav/>
      
    </div>
    
  );
}
export default App;