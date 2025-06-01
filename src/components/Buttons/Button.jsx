import React from "react";

const Button = ({ children, onClick, className = "", disabled = false }) => {
    return (
        <button
            onClick={onClick}
            className={`border-2 border-purple-600 px-4 py-2 text-purple-600 rounded-lg transition-colors duration-300 hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
