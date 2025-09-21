import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Nav from "./layout/Nav";
import Home from "./layout/Home";
import Project from "./layout/Project";
import Contact from "./layout/Contact";

function App() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            // Navbar background change
            setIsScrolled(scrollPosition > 0);

            // Show back to top button after scrolling 200px
            setShowBackToTop(scrollPosition > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

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

            {/* Back to Top Button */}
            {showBackToTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 p-1 rounded-full bg-purple-600/80 backdrop-blur-md text-white shadow-lg hover:bg-purple-700 hover:scale-110 transition duration-300 ease-in-out animate-bounce cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        viewBox="0 0 24 24"
                    >
                        <g
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                        >
                            <path
                                stroke-dasharray="64"
                                stroke-dashoffset="64"
                                d="M12 21c4.97 0 9 -4.03 9 -9c0 -4.97 -4.03 -9 -9 -9c-4.97 0 -9 4.03 -9 9c0 4.97 4.03 9 9 9Z"
                            >
                                <animate
                                    fill="freeze"
                                    attributeName="stroke-dashoffset"
                                    dur="0.6s"
                                    values="64;0"
                                />
                            </path>
                            <path
                                stroke-dasharray="12"
                                stroke-dashoffset="12"
                                d="M12 17l0 -9.5"
                            >
                                <animate
                                    fill="freeze"
                                    attributeName="stroke-dashoffset"
                                    begin="0.7s"
                                    dur="0.2s"
                                    values="12;0"
                                />
                            </path>
                            <path
                                stroke-dasharray="8"
                                stroke-dashoffset="8"
                                d="M12 7l4 4M12 7l-4 4"
                            >
                                <animate
                                    fill="freeze"
                                    attributeName="stroke-dashoffset"
                                    begin="0.9s"
                                    dur="0.2s"
                                    values="8;0"
                                />
                            </path>
                        </g>
                    </svg>
                </button>
            )}
        </>
    );
}

export default App;
