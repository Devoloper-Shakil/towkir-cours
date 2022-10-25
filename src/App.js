
import './App.css';
import Admin from './Components/Admin';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './pages/Home/Home';
import { Routes, Route } from "react-router-dom";
//pages

function App() {
  return (
    <div >
         
         
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="Admin" element={<Admin />} />
      </Routes>
   

     
  
      
     
    </div>
  );
}

export default App;
