import React from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import "./App.css";

const Home = ()=> <h1>Home</h1>;
const About = ()=> <h1>About</h1>;
const Contacts = ()=> <h1>Contacts</h1>;
const NotFound = ()=> <h1>404</h1>;

const App = (props) => {
  return (
  <>    
    <BrowserRouter>
    <nav>
      <ul>
        <li><NavLink to='/'>home</NavLink></li>
        <li><NavLink to='/about'>about</NavLink></li>
        <li><NavLink to='/contacts'>contacts</NavLink></li>
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contacts" element={<Contacts />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  </>
  );
};

export default App;
