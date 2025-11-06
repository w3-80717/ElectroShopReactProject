import React, { useEffect, useState } from "react";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaMapMarkerAlt,
  FaBars,
  FaPhoneVolume,
} from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Products", path: "products" },
    { link: "Testimonials", path: "testimonials" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="w-full px-16 py-2 bg-themeyellow lg:flex hidden justify-between items-center gap-6">
        <h1 className="text-sm font-semibold flex items-center gap-2">
          <FaPhoneVolume className="size-[18px]" />
          <span>+91 890 929 0192</span>
        </h1>
        <h1 className="text-sm font-semibold flex items-center gap-2">
          <FaMapMarkerAlt className="size-[18px]" />
          <span>lorem dash com dude</span>
        </h1>
        <h1 className="text-sm font-semibold flex items-center gap-2">
          <MdEmail className="size-[18px]" />
          <span>electrashop@company.com</span>
        </h1>
      </div>

      {/* Navbar */}
      <nav className="w-full bg-gray-100 flex justify-between items-center lg:px-16 px-6 py-5 z-50">
        {/* Logo */}
        <h1 className="text-themepurple font-bold lg:text-[30px] text-3xl underline italic">
          Electra Shop
        </h1>

        {/* Desktop Menu */}
        <ul className="lg:flex justify-center items-center gap-10 hidden">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
              className="text-black text-sm uppercase font-semibold cursor-pointer px-4 py-2 rounded-lg hover:bg-themepurple hover:text-white transition"
            >
              {link}
            </Link>
          ))}
        </ul>

        {/* Desktop Icons */}
        <div
          id="header-icons"
          className="lg:flex hidden justify-center items-center gap-6 text-black"
        >
          <FaSearch className="w-[20px] h-[20px] hover:scale-125 hover:text-themepurple transition-transform cursor-pointer" />
          <IoPerson className="w-[20px] h-[20px] hover:scale-125 hover:text-themepurple transition-transform cursor-pointer" />
          <FaHeart className="w-[20px] h-[20px] hover:scale-125 hover:text-themepurple transition-transform cursor-pointer" />
          <div className="relative">
            <FaShoppingCart className="w-[20px] h-[20px] hover:scale-125 hover:text-themepurple transition-transform cursor-pointer" />
            <div className="bg-themepurple hover:bg-themeyellow px-2 py-0.5 text-white hover:text-black rounded-full absolute -top-3 -right-3 text-[12px] font-bold">
              2
            </div>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="flex lg:hidden items-center justify-center"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <FaXmark className="text-themepurple text-3xl cursor-pointer" />
          ) : (
            <FaBars className="text-themepurple text-3xl cursor-pointer" />
          )}
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div
          className="w-full bg-themepurple p-4 absolute left-0 top-[130px] flex flex-col items-center gap-2 z-40"
          onClick={closeMenu}
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
              className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-themeyellow hover:text-black w-full text-center transition"
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
