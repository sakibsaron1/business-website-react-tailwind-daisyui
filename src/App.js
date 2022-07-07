import logo from "./images/logo-all-dark.png";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import Reviews from "./Pages/Reviews/Reviews";
import Notfound from "./Pages/Notfound/Notfound";
import Footer from "./Pages/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/reviews" element={<Reviews></Reviews>}></Route>
          <Route path="*" element={<Notfound></Notfound>}></Route>
        </Routes>
        <Footer></Footer>
      </Navbar>
    </div>
  );
}

export default App;
