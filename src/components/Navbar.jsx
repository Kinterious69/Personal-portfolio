
import React, { useState } from "react";
import {
  MenuIcon,
  MoonIcon,
  X,
  SunIcon,
} from "lucide-react";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const[menuStyle,setMenuStyle]=useState("home")

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];


  return (
    <div   id="home" className="py-6" >
    <>
      {/* NAVBAR   */}
      <header
        className={`  fixed   top-0 left-0 z-50 flex w-full items-center justify-between p-3 shadow-lg  ${
          props.isDarkMode ? "bg-slate-900 text-white" : "bg-white text-black"
        }`}
      
      >
        {/* Logo */}
        <h1 className="text-2xl font-bold font-patrick">
          S.<span className="text-blue-400">K</span>
        </h1>

        {/*  DESKTOP NAVIGATION */}
        <nav className="hidden  md:flex">
          <ul className="flex gap-4">
            {navItems.map((item) => (
              <li key={item} >
                <a

                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-semibold transition hover:text-blue-400"
                  onClick={()=>setMenuStyle(item.toLowerCase())}
                >
                  {item}
                  
                </a>
                {
                  menuStyle=== item.toLowerCase() ? <hr className="bg-blue-400 h-1 rounded-full"/> :<></>
                }
              </li>
            ))}
          </ul>
        </nav>

        {/* RIGHT CONTROLS  */}
        <div className="flex items-center gap-3">
          {/* Dark Mode */}
          {!props.isDarkMode ? (
            <button
              onClick={() => props.setIsDarkMode(true)}
              className="  transition duration-300 "
            >
              <MoonIcon className="size-7" />
            </button>
          ) : (
            <button
              onClick={() => props.setIsDarkMode(false)}
              className="transition duration-300 "
            >
              <SunIcon className="size-7" />
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="  transition duration-300 md:hidden"
          >
            <MenuIcon  className="size-7"/>
          </button>
        </div>
      </header>

      {/*  MOBILE OVERLAY*/}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-1000 md:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/*  MOBILE SIDEBAR */}
      <aside
        className={`fixed top-0 right-0 z-[60] h-screen w-54 transform shadow-2xl transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ${
          props.isDarkMode
            ? "bg-slate-900 text-white"
            : "bg-white text-black"
        }`}
      >
        {/* Sidebar Header */}
        <div className="  flex justify-end  p-5">
          

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-md bg-red-500 p-2 text-white transition hover:bg-red-600  "
          >
            <X />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="mt-8">
          <ul className="flex flex-col gap-2 px-5">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-4 py-3 text-lg font-semibold transition hover:bg-slate-600 hover:text-white"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  </div>
  );

};


export default Navbar;
