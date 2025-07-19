import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/homePage/Home';
import About from './pages/aboutPage/About';
import Contact from './pages/contactPage/Contact';
import Services from './pages/servicesPage/Services';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="service" element={<Services />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App