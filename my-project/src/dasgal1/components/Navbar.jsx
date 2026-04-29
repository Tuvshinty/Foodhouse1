import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { navLinks } from "../data/data";

const Navbar = ({openSignUp, openLogin}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-white-100 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-orange-700">Foodhouse</div>

        <div className="hidden md:flex gap-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-700 hover:text-indigo-600"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex gap-3">
          <button className="px-4 py-2 bg-orange-500 rounded-lg" onClick={openSignUp}>
            Book Table
          </button>
          <button className="px-4 py-2 bg-amber-400 rounded-lg " onClick={openLogin}>Login</button>
        </div>

        <div className="md:hidden">
          {open ? (
            <HiX
              className="w-8 h-8 cursor-pointer"
              onClick={() => setOpen(false)}
            />
          ) : (
            <HiMenu
              className="w-8 h-8 cursor-pointer"
              onClick={() => setOpen(true)}
            />
          )}
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="text-gray-700">
              {link.name}
            </a>
          ))}
          <button className="px-4 py-2 bg-orange-500 rounded-lg" onClick={openSignUp}>
            Book Table
          </button>
          <button className="px-4 py-2 bg-amber-400 rounded-lg " onClick={openLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
