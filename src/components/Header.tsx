import React from "react";
import ThemeToggle from "./ThemeToggle";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className=" w-full h-48 bg-slate-400 flex items-center justify-end px-16 gap-8">
      <Navbar />
      <ThemeToggle />
    </div>
  );
};

export default Header;
