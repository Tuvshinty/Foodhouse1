import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase";
import Menusection from "../components/MenuSection";
import Chefsection from "../components/Chefsection";
import Footer from "../components/Footer";
import CourseIntroModal from "../components/CourseIntroModal";
import AuthModal from "../components/AuthModal";
const Web2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false)
  console.log(isOpen)
  return (
    <div>
      <Navbar 
        openSignUp = {() => setAuthOpen("booking")}
        openLogin = {() => setAuthOpen("login")}
      />
      <CourseIntroModal state={isOpen} close={() => setIsOpen(false)} />
      <AuthModal
        mode={authOpen}
        open={authOpen}
        close={() => setAuthOpen(false)}
        switchMode={() =>
          setAuthOpen((currentMode) =>
            currentMode === "booking" ? "login" : "booking",
          )
        }
      />
      <Showcase open={() => setIsOpen(true)} />
      <Menusection />
      <Chefsection />
      <Footer />
    </div>
  );
};

export default Web2;
