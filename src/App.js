import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes></Routes>
      <Footer/>
    </div>
  );
}

export default App;
