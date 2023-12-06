import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import AxiosErrorHanlder from "./interceptors/axiosInterceptors";
import PrivateRouter from "./utils/privateRouter";
import SignIn from "./pages/signIn/signIn";
import Home from "./pages/home/home";
import SignUp from "./pages/signup/signUp";
import Profiles from "./pages/profiles/profiles";
import About from "./pages/about/about";
function App() {
  // useLocation is a hook to access the current location
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/signin" && location.pathname !== "/signup" && (
        <Navbar />
      )}
      <Routes>
        <Route element={<PrivateRouter />}>
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {/* Error Handlers */}
      <AxiosErrorHanlder />
      {location.pathname !== "/signin" && location.pathname !== "/signup" && (
        <Footer />
      )}
    </div>
  );
}

export default App;
