import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import AxiosErrorHanlder from "./interceptors/axiosInterceptors";
import PrivateRouter from "./utils/privateRouter";
import SignIn from "./pages/signIn/signIn";
import Home from "./pages/home/home";
function App() {
  // select the user state
  const user = useSelector((state) => state.user);
  const { isAuth } = user;
  return (
    <div className="App">
      {isAuth && <Navbar />}
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route element={<PrivateRouter />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
      {/* Error Handlers */}
      <AxiosErrorHanlder />
      {isAuth && <Footer />}
    </div>
  );
}

export default App;
