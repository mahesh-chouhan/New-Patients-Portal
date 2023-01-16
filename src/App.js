import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import './App.css';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="Home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
