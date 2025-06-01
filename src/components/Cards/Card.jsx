import React from "react";
import "animate.css";

const Card = ({ imageUrl, title, description, className }) => {
    return (
        <div
            className={`bg-white rounded-2xl shadow-lg backdrop-blur-sm border border-white/30 transition-all duration-300 ease-in-out overflow-hidden max-w-[350px] m-4 hover:-translate-y-1 hover:shadow-xl w-[221px] px-10 py-5 flex align-center justify-center flex-col ${
                className || ""
            }`}
        >
            {/* Image */}
            <div className="h-[140px] w-[140px] flex flex-col align-center justify-center">
                <img
                    className="w-full object-cover"
                    src={imageUrl}
                    alt={title}
                />
            </div>

            {/* Content */}
            <div className="py-6 text-center">
                <h3 className="text-gray-800 text-2xl mb-2 font-semibold">
                    {title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Card;
