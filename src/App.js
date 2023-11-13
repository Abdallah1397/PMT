import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import AxiosErrorHanlder from "./interceptors/axiosInterceptors";
import SignIn from "./pages/signIn/signIn";
function App() {
  // select the user state
  const user = useSelector((state) => state.user);
  const { isAuth} = user;
  return (
    <div className="App">
      {isAuth && <Navbar />}
      <Routes>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      {/* Error Handlers */}
      <AxiosErrorHanlder />
      {isAuth && <Footer />}
    </div>
  );
}

export default App;
