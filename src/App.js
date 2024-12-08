import React, { useState, useEffect } from 'react';
import './App.css';
import { RiArrowUpCircleFill, RiArrowDownCircleFill } from "react-icons/ri";
import Nav from './Component/Nav/Nav';
import Slider from './Component/Slider/Slider';
import Card from './Component/Card/Card';
import Footer from './Component/Footer/Footer';


function App() {

  const [inputValue, setInputValue] = useState('');

 
  const handleInputChange = (value) => {
    setInputValue(value);
  };



  const [isTopVisible, setIsTopVisible] = useState(false);
  const [isBottomVisible, setIsBottomVisible] = useState(false);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };


  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsTopVisible(true);
    } else {
      setIsTopVisible(false);
    }


    if (window.scrollY < 300) {
      setIsBottomVisible(true);
    } else {
      setIsBottomVisible(false);
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (

    <div className="App">
      <Nav  inputValue={inputValue} handleInputChange={handleInputChange}/>
      <Slider />
      <Card inputValue={inputValue} handleInputChange={handleInputChange}/>
      <Footer />


      {isTopVisible && (
        <div className="scroll-to-top">
          <button onClick={scrollToTop}>
            <RiArrowUpCircleFill />
          </button>
        </div>
      )}


      {isBottomVisible && (
        <div className="scroll-to-bottom">
          <button onClick={scrollToBottom}>
            <RiArrowDownCircleFill />
          </button>
        </div>
      )}
    </div>

  );
}

export default App;
