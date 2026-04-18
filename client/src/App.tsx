
import NavBar from "./components/NavBar";
import BottomNav from "./components/BottomNav";
import LoginPage from "./LoginPage.tsx";
import Homepage from "./Homepage.tsx";
import MJAd from "./components/MJAd.tsx";
import Settings from "./Settings.tsx";
function App(){
  return(
    <div className='mb-40'>
      <NavBar/>
      <BottomNav/>
      <Settings/>
    </div>
    
  );
}
export default App;