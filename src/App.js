import logo from './logo.svg';
import './App.css';
import {Routes,Route, Link} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route exact path='/'  element={<Home/>} activeClassName="menu-active"/>
          <Route exact path='/about' activeClassName="menu-active"  element={<About/>}/>
          <Route exact path='/service' activeClassName="menu-active"   element={<Service/>}/>
          <Route exact path='/contact' activeClassName="menu-active" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
