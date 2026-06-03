import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase";
import Menusection from "../components/MenuSection";
import Chefsection from "../components/Chefsection";
import Footer from "../components/Footer";
import CourseIntroModal from "../components/CourseIntroModal";
import AuthModal from "../components/AuthModal";
import AuthSection from "../components/AuthSection";
import ViewMenu from "../components/ViewMenu";
import Chefstory from "../components/Chefstory";
const Web2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpens, setIsOpens] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showChef, setShowChef] = useState(false);
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]); 
  function handleAddToOrder(item) {
    if (!user) {
      setIsOpen(false);
      setAuthOpen("login");
    } else {
      setOrders((prev) => [...prev, item]);
    }
  }
  function handleAuthSubmit(formData) {
    setUser(formData);
    setAuthOpen(false);
  }

  function handleUpdateUser(updatedUser) {
    setUser(updatedUser);
  }

  if (showMenu) {
    return <ViewMenu onBack={() => setShowMenu(false)} />;
  }
  if (showChef) {
    return <Chefstory openes={() => setShowChef(true)} onBack={() => setShowChef(false)} />;
  }

  return (
    <div>
      {!isOpens && (
        <>
          <Navbar
            user={user}
            onLogout={() => setUser(null)}
            openSignUp={() => setAuthOpen("booking")}
            openLogin={() => setAuthOpen("login")}
            opens={() => setIsOpens(true)}
          />
          <Showcase
            open={() => setIsOpen(true)}
            opend={() => setShowMenu(true)}
          />
          <Menusection />
          <Chefsection openChef={() => setShowChef(true)} />
          <Footer />
        </>
      )}

      <CourseIntroModal
        state={isOpen}
        close={() => setIsOpen(false)}
        addOrder={handleAddToOrder}
      />
      <AuthSection
        states={isOpens}
        closes={() => setIsOpens(false)}
        user={user}
        onUpdateUser={handleUpdateUser}
      />
      <AuthModal
        mode={authOpen}
        open={authOpen}
        close={() => setAuthOpen(false)}
        switchMode={() =>
          setAuthOpen((m) => (m === "booking" ? "login" : "booking"))
        }
        onSubmit={handleAuthSubmit}
        />
    </div>
  );
};
export default Web2;