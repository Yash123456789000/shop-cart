import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import { useState } from "react";

const App = () => {
  const [sortPopup, setSortPopup] = useState(false); // state for sorting popup
  const [sortOption, setSortOption] = useState(""); // New state for sorting

  const handleSortPopup = () => {
    setSortPopup(!sortPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <Hero />
      <Products sortOption={sortOption} handleSortPopup={handleSortPopup}/>
      <Banner />
      <Subscribe />
      <Footer />
      <Popup sortPopup={sortPopup} setSortPopup={setSortPopup} setSortOption={setSortOption} />
    </div>
  );
};

export default App;
