import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase";
import Menusection from "../components/MenuSection";
import Chefsection from "../components/Chefsection";
import Footer from "../components/Footer";
import CourseIntroModal from "../components/CourseIntroModal";
const Web2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Navbar />
      <CourseIntroModal state={isOpen} close={() => setIsOpen(false)} />
      <Showcase open={() => setIsOpen(true)} />
      <Menusection />
      <Chefsection />
      <Footer />
    </div>
  );
};

export default Web2;
