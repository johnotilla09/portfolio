import React from "react";
import "animate.css";

import QuoteApp1 from "../../assets/projects-photo/QuoteApp/QuoteApp1.png";
// import QuoteApp2 from "../../assets/projects-photo/QuoteApp/QuoteApp2.png";

// import laravel from "../../assets/tect-stacks/laravel.svg";
// import codeigniter from "../../assets/tect-stacks/codeigniter.svg";
// import php from "../../assets/tect-stacks/php.svg";
// import html from "../../assets/tect-stacks/html.svg";
// import css from "../../assets/tect-stacks/css.svg";
// import js from "../../assets/tect-stacks/js.svg";
// import react from "../../assets/tect-stacks/react.svg";
// import bootstrap from "../../assets/tect-stacks/bootstrap.svg";
// import tailwind from "../../assets/tect-stacks/tailwind.svg";
// import mui from "../../assets/tect-stacks/mui.svg";
// import vs from "../../assets/tect-stacks/vs.svg";
// import git from "../../assets/tect-stacks/git.svg";
// import postman from "../../assets/tect-stacks/postman.svg";
// import mysql from "../../assets/tect-stacks/mysql.svg";
// import sqlite from "../../assets/tect-stacks/sqlite.svg";
// import firebase from "../../assets/tect-stacks/firebase.svg";

const Card = ({ imageUrl, title, description, tags, className }) => {
    return (
        <div
            className={`bg-white rounded-2xl shadow-lg backdrop-blur-sm border border-white/30 transition-all duration-300 ease-in-out overflow-hidden max-w-[350px] hover:-translate-y-1 hover:shadow-xl w-[221px] flex align-center justify-center flex-col ${
                className || ""
            }`}
        >
            {/* h-[400px] */}
            {/* Image */}
            <div className="flex flex-col items-center justify-center h-[180px]">
                <img
                    className="w-full h-auto object-cover"
                    src={imageUrl}
                    alt={title}
                    width={221}
                    height={350}
                />
            </div>

            {/* Content */}
            <div className="pb-4 px-4 overflow-auto">
                <div>
                    <h3 className="text-gray-800 text-2xl mb-2 font-semibold text-center">
                        {title}
                    </h3>
                    <p className="text-gray-600 text-base">{description}</p>
                </div>

                <div className="flex gap-3 h-auto mt-2.5">
                    {tags.map((tag, index) => (
                        <img key={index} className="h-6" src={tag} alt={tag} />
                    ))}
                    {/*  */}
                </div>
            </div>
        </div>
    );
};

export default Card;
