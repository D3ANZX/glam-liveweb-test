
import LoginForm from "./components/LoginForm";
import MJAd from "./components/MJAd";
import TfItem from "./components/TfItem";
function LoginPage(){
    return(
        <div className="mt-20">
            <LoginForm/>
            <MJAd/>
            <TfItem/>
        </div>
        
    );
}

export default LoginPage;