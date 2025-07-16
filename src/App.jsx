import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home/Home.jsx';
import Footer from './Components/Footer/Footer.jsx';
import AboutUs from './Components/About_us/About_us.jsx';
import ExploreImages from './Components/ExploreImages/ExploreImages.jsx';
import FoodDisplay from './Components/FoodDisplay/FoodDisplay.jsx';
import ContactUs from './Components/Contact/Contact.jsx';
import Services from './Components/Services/Services.jsx';


const App = () => {
  return (
     <>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<AboutUs />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/images" element={<FoodDisplay />} />
          <Route path="/contact" element={<ContactUs />} />
          
        </Routes>
      </div>
      <Footer />
    </>
    
    
  );
}

export default App;
