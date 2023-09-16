import React from 'react';
import Navbar from "./Components/Navbar/Navbar"
import Footer from './Components/Footer/Footer';
import GLavnayaMenu from './Components/Glavnaya_menu/GLavnaya_menu';

const App = () => {
  return (
    <div>
      <Navbar/>
      <GLavnayaMenu/>
      <Footer/>
    </div>
  );
}

export default App;
