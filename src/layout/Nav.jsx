import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

const Nav = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        { label: "Home" },
        // { label: "Projects" },
        // { label: "Certificates" },
    ];

    useEffect(() => {
        if (!menuOpen) return;
        const handleClick = (e) => {
            if (!document.getElementById("main-nav").contains(e.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [menuOpen]);

    return (
        <nav
            id="main-nav"
            className="flex justify-between items-center px-8 py-4 relative z-50"
        >
            {/* Logo */}
            <div className="text-2xl font-bold text-purple-700">
                Otilla.Portfolio
            </div>

            {/* Hamburger Icon */}
            <button
                className="lg:hidden flex flex-col justify-center items-center w-8 h-8 z-50"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <span
                    className={`block h-1 w-6 bg-purple-700 mb-1 transition-transform duration-300 ${
                        menuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                ></span>
                <span
                    className={`block h-1 w-6 bg-purple-700 mb-1 transition-opacity duration-300 ${
                        menuOpen ? "opacity-0" : ""
                    }`}
                ></span>
                <span
                    className={`block h-1 w-6 bg-purple-700 transition-transform duration-300 ${
                        menuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                ></span>
            </button>

            {/* Overlay */}
            {menuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-opacity-30"
                    onClick={() => setMenuOpen(false)}
                />
            )}

            {/* Desktop Menu */}
            <ul className="hidden lg:flex space-x-10 items-center">
                {menuItems.map((item, idx) => (
                    <li key={item.label} className="relative">
                        <Link
                            to={`/${item.label}`}
                            onClick={() => setActiveIndex(idx)}
                            className={`font-bold transition-colors duration-300 cursor-pointer ${
                                activeIndex === idx
                                    ? "text-purple-700"
                                    : "text-black hover:text-purple-700"
                            }`}
                        >
                            {item.label}
                            <span
                                className={`absolute left-0 -bottom-1 h-1 w-full bg-purple-300 rounded transition-transform duration-300 origin-left ${
                                    activeIndex === idx
                                        ? "scale-x-100"
                                        : "scale-x-0"
                                }`}
                            />
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden absolute top-full right-8 mt-4 bg-white shadow-md rounded-lg w-40 p-4 flex flex-col space-y-4 z-50 transition-all duration-300 ${
                    menuOpen ? "block" : "hidden"
                }`}
            >
                {menuItems.map((item, idx) => (
                    <Link
                        to={`/${item.label}`}
                        key={item.label}
                        onClick={() => setActiveIndex(idx)}
                        className={`text-left font-bold transition-colors duration-300 ${
                            activeIndex === idx
                                ? "text-purple-700"
                                : "text-black hover:text-purple-700"
                        }`}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Nav;
