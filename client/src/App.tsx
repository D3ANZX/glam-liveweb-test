
import axios from "axios";

import NavBar from "./components/NavBar";
import BottomNav from "./components/BottomNav";
import LoginPage from "./LoginPage.tsx";
import Homepage from "./Homepage.tsx";
import MJAd from "./components/MJAd.tsx";
import AccountMenu from "./AccountMenu.tsx";
import TriviaPage from "./TriviaPage.tsx";
import QuestionSelect from "./QuestionSelect.tsx";
import QuestionTF from "./QuestionTF.tsx";
import QuestionMulti from "./QuestionMulti.tsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Settings from "./Settings.tsx";



function App(){
  return(
    <div className="">
    
    <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/account" element={<AccountMenu/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/trivia' element={<TriviaPage/>}/>
            <Route path='/quiz' element={<QuestionSelect/>}/>
            <Route path='/TrueOrFalse' element={<QuestionTF/>}/>
            <Route path='/MultipleQues' element={<QuestionMulti/>}/>
          </Routes>
        </BrowserRouter>
       
      </div>
  );
}
export default App;