import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import LoginForm from "./components/LoginForm";
import MJAd from "./components/MJAd";
import TfItem from "./components/TfItem";
function LoginPage(){
    return(
        <div className="mt-20 h-30">
            <LoginForm/>
        </div>
        
    );
}

export default LoginPage;