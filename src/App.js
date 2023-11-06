import { Routes, Route } from "react-router-dom";
import LoginSVG from "./assets/svgs/loginSVG/loginSVG";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import SignIn from "./pages/signIn/signIn";
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/login" element={<SignIn/>}/>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
