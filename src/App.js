
import './App.css';
import { useState } from "react";
import { BrowserRouter as Router,  Routes , Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Backdrop from "./components/Backdrop";
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";
import UserDropMenu from "./components/Authentication/userDropMenu"; 

// Screens
import HomeShowRoom from "./screens/HomeShowRoom";
import ProductShowRoom from "./screens/ProductShowRoom";
import CartShowRoom from "./screens/CartShowRoom";
import Men from "./screens/filterPages/men.js"



function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <Slider show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
      <Routes>
          <Route path="login" element={<Login />}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/" element={<HomeShowRoom/>} />
          <Route path="/product/:id" element={<ProductShowRoom authed={true}/>} />
          <Route path="/cart" element={<CartShowRoom/>} /> 
          <Route path="/user" element={<UserDropMenu/>} />
          <Route path="/men" element={<Men/>}/>
          
        </Routes>
      
      </main>
    </Router>
    
  );
}

export default App;
