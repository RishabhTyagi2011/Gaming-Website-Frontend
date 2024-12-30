import "./Css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Simulation } from "./pages/Simulation";
import { Game } from "./pages/Game";
import { Navbar, Footer } from "./components";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/simulation" element={<Simulation />} />
        <Route path="/game" element={<Game />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
