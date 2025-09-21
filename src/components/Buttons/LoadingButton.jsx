import React from "react";

const LoadingButton = ({
    children,
    onClick,
    className = "",
    disabled = false,
}) => {
    return (
        <button
            onClick={onClick}
            className={`px-6 py-3 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-semibold shadow-md transition transform hover:scale-105 ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default LoadingButton;
