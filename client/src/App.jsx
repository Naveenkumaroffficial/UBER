import { Route, Routes } from "react-router-dom";
import Home from "./pages/Start";
import UserLogin from './pages/UserLogin'
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin"
import CaptainSignup from './pages/CaptainSignup'
import Start from "./pages/Start";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start/>}></Route>
        <Route path="/login" element={<UserLogin/>}/>
        <Route path="/signup" element={<UserSignup/>}/>
        <Route path='/captain-login' element={<CaptainLogin/>} />
        <Route path='/captain-signup' element={<CaptainSignup />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </>
  );
};

export default App;
