import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import './App.css';
import Sidebar from "./components/SideBar/Sidebar";
import AppontmentConfirmation from "./AppontmentConfirmation";
import Signup from "./components/Signup/Signup";
import Rappointment from "./components/Rappointment";





function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="Home" element={<Home />} />
      
      <Route path="Signup" element={<Signup />} />
      <Route path="Sidebar" element={<Sidebar />} />
      <Route path="Rappointment" element={<Rappointment />} />
      <Route path="AppontmentConfirmation" element={<AppontmentConfirmation />} />

      
      </Routes>
    </div>
  );
}

export default App;
