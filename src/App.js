import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import AxiosErrorHanlder from "./interceptors/axiosInterceptors";
import PrivateRouter from "./utils/privateRouter";
import SignIn from "./pages/signIn/signIn";
import Home from "./pages/home/home";
import SignUp from "./pages/signup/signUp";
function App() {
  // select the user state
  const user = useSelector((state) => state.user);
  const { isAuth } = user;
  return (
    <div className="App">
      {isAuth && <Navbar />}
      <Routes>
        <Route element={<PrivateRouter />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {/* Error Handlers */}
      <AxiosErrorHanlder />
      {isAuth && <Footer />}
    </div>
  );
}

export default App;
