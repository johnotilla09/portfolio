import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Nav from "./layout/Nav";
import Home from "./layout/Home";
import Project from "./layout/Project";
import Contact from "./layout/Contact";
// import Project from "./layout/Project";

function App() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Fixed Nav */}
            <div
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-10 lg:px-40 ${
                    isScrolled ? "bg-purple-50 shadow-md" : "bg-transparent"
                }`}
            >
                <Nav />
            </div>
            {/* Fixed Nav */}

            {/* Main Content with padding to offset fixed nav */}
            <div className="px-4 md:px-10 lg:px-15 pt-5 mt-20 lg:mt-0">
                <Routes>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Projects" element={<Project />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route
                        path="*"
                        element={<Navigate replace to="/Home" />}
                    ></Route>
                </Routes>
            </div>

            {/* Footer */}
            <footer className="px-4 md:px-10 lg:px-40 py-12 from-purple-100 to-purple-50 mt-20">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center gap-4">
                        {/* Social Links */}
                        <div className="flex space-x-6 mb-4">
                            <a
                                href="https://github.com/johnotilla09"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-600 hover:text-purple-800 transition-colors"
                            >
                                <i className="fab fa-github text-xl"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/john-otilla-8867b5270/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-600 hover:text-purple-800 transition-colors"
                            >
                                <i className="fab fa-linkedin text-xl"></i>
                            </a>
                            <a
                                href="https://www.facebook.com/john.otilla/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-600 hover:text-purple-800 transition-colors"
                            >
                                <i className="fab fa-facebook text-xl"></i>
                            </a>
                        </div>
                        {/* Copyright Text */}
                        <p className="text-purple-700 text-sm">
                            &copy; {new Date().getFullYear()} Built with
                            <span className="text-purple-500"> ❤️ </span>
                            using React, Vite & Tailwind
                        </p>
                        <p className="text-purple-500 text-xs">
                            All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default App;
