"use client";
import React, { useState } from "react";
import AnimatedSection from "../components/Animation.jsx/AnimatedSection";
import Card from "../components/Cards/Card";
import ProjectCard from "../components/Cards/ProjectCard";

import laravel from "../assets/tect-stacks/laravel.svg";
import codeigniter from "../assets/tect-stacks/codeigniter.svg";
import php from "../assets/tect-stacks/php.svg";
import html from "../assets/tect-stacks/html.svg";
import css from "../assets/tect-stacks/css.svg";
import js from "../assets/tect-stacks/js.svg";
import react from "../assets/tect-stacks/react.svg";
import bootstrap from "../assets/tect-stacks/bootstrap.svg";
import tailwind from "../assets/tect-stacks/tailwind.svg";
import mui from "../assets/tect-stacks/mui.svg";
import vs from "../assets/tect-stacks/vs.svg";
import git from "../assets/tect-stacks/git.svg";
import postman from "../assets/tect-stacks/postman.svg";
import mysql from "../assets/tect-stacks/mysql.svg";
import sqlite from "../assets/tect-stacks/sqlite.svg";
import firebase from "../assets/tect-stacks/firebase.svg";
import python from "../assets/tect-stacks/python.svg";
import vbnet from "../assets/tect-stacks/vbnet.svg";

import QuoteApp1 from "../assets/projects-photo/QuoteApp/QuoteApp1.png";
import ToastNotification1 from "../assets/projects-photo/ToastNotification/ToastNotif1.png";
import CaesarCipher1 from "../assets/projects-photo/CaesarCipher/Caesar1.png";
import XorCipher1 from "../assets/projects-photo/XorCipher/Xor1.png";
import KMeans1 from "../assets/projects-photo/KMeans/KMeans1.png";
import Linear1 from "../assets/projects-photo/LinearRegression/Linear1.png";
import CapShape from "../assets/projects-photo/NaiveBayes/CapShape.png";
import OtillaInventory1 from "../assets/projects-photo/OtillaInventory/OtillaInventory1.png";
import Portfolio1 from "../assets/projects-photo/Portfolio/Portfolio1.png";
import CushyRental1 from "../assets/projects-photo/CushyRental/CushyRental1.png";
import BUCSRDMS1 from "../assets/projects-photo/BUCS-RDMS/BUCS-RDMS1.png";

import { motion } from "framer-motion";
// project list with categories
const projects = [
    {
        imageUrl: QuoteApp1,
        title: "Quote App",
        description:
            "A Quote App using React, Firebase, HTML, CSS, and JS to display and save quotes online.",
        tags: [html, css, js, react, firebase],
        category: "personal",
    },
    // https://github.com/johnotilla09/Quotes-App.git
    {
        imageUrl: ToastNotification1,
        title: "Toast Notification",
        description:
            "A Toast Notification app using HTML, CSS, and JavaScript to show quick popup messages on the screen.",
        tags: [html, css, js],
        category: "personal",
    },
    // https://github.com/johnotilla09/Toats-Notification.git
    {
        imageUrl: CaesarCipher1,
        title: "Caesar Cipher Activity",
        description:
            "A Caesar Cipher Activity using Python to encrypt and decrypt text.",
        tags: [python],
        category: "personal",
    },
    // https://github.com/johnotilla09/School_Activities/tree/main/Information%20Assurance%20Security/Caesar%20and%20Xor%20Cipher
    {
        imageUrl: XorCipher1,
        title: "Xor Cipher Activity",
        description:
            "A Xor Cipher Activity using Python to encrypt and decrypt text.",
        tags: [python],
        category: "personal",
    },
    // https://github.com/johnotilla09/School_Activities/tree/main/Information%20Assurance%20Security/Caesar%20and%20Xor%20Cipher

    {
        imageUrl: KMeans1,
        title: "K-Means Clustering",
        description:
            "A K-Means Clustering Activity using Python to cluster data points into groups.",
        tags: [python],
        category: "personal",
    },
    // https://github.com/johnotilla09/School_Activities/tree/main/Information%20Assurance%20Security/Caesar%20and%20Xor%20Cipher

    {
        imageUrl: Linear1,
        title: "Linear Regression Activity",
        description:
            "Linear Regression Analysis of Mushroom Historical Data using Python",
        tags: [python],
        category: "personal",
    },
    // https://github.com/johnotilla09/School_Activities/tree/main/Information%20Assurance%20Security/Caesar%20and%20Xor%20Cipher

    {
        imageUrl: CapShape,
        title: "Naive Bayes Activity",
        description:
            "A Naive Bayes Classification Activity using Python to analyze mushroom data and predict whether a mushroom is edible or poisonous based on its features.",
        tags: [python],
        category: "personal",
    },
    // https://github.com/johnotilla09/School_Activities/tree/main/Information%20Assurance%20Security/Caesar%20and%20Xor%20Cipher

    {
        imageUrl: OtillaInventory1,
        title: "Otilla Feed Store Inventory System",
        description:
            "A simple system for managing and tracking feed stocks and sales.",
        tags: [vbnet],
        category: "personal",
    },

    {
        imageUrl: Portfolio1,
        title: "My Portfolio",
        description:
            "A personal portfolio website built with React, Tailwind CSS, and Vite.",
        tags: [react, tailwind],
        category: "personal",
    },

    {
        imageUrl: CushyRental1,
        title: "CushyRental App: A Boarding House Finder",
        description:
            "A mobile based app for finding and securing boarding houses.",
        tags: [react, html, css, laravel, mysql],
        category: "personal",
    },

    {
        imageUrl: BUCSRDMS1,
        title: "BUCS-RDMS",
        description:
            "A web system for managing and tracking BUCS research documents.",
        tags: [html, css, codeigniter, js, mysql],
        category: "personal",
    },
];
// animation variants for stagger effect
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const Project = () => {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [activeCategory, setActiveCategory] = useState("personal"); // default category
    // filter projects by category
    const filteredProjects = projects.filter(
        (project) => project.category === activeCategory
    );
    return (
        <React.Fragment>
            <div className="flex lg:flex-row flex-col lg:min-h-screen">
                <div className="flex-1 mt-5 flex p-4 md:p-10 gap-4">
                    <div className="flex flex-col mt-6 w-full">
                        {/* Section Title */}
                        <AnimatedSection>
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-extrabold text-purple-700">
                                    My Projects
                                </h2>
                                <p className="mt-2 text-gray-600 dark:text-gray-300">
                                    Some of the applications and systems I have
                                    built
                                </p>
                            </div>
                        </AnimatedSection>
                        {/* Category Buttons */}

                        {/* Projects Grid with stagger animation */}
                        <motion.div
                            className="flex align-center justify-center flex-wrap gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            key={activeCategory} // re-trigger animation when category changes
                        >
                            {projects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    onMouseEnter={() =>
                                        setHoveredProject(index)
                                    }
                                    onMouseLeave={() => setHoveredProject(null)}
                                >
                                    <ProjectCard
                                        imageUrl={project.imageUrl}
                                        title={project.title}
                                        description={project.description}
                                        tags={project.tags}
                                        className={`w-[280px] transition-transform duration-300 ${
                                            hoveredProject === index
                                                ? "scale-105 shadow-xl"
                                                : ""
                                        }`}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Project;

{
    /* <div className="flex justify-center gap-4 mb-8">
                            <button
                                onClick={() => setActiveCategory("personal")}
                                className={`px-4 py-2 rounded-lg font-medium transition cursor-pointer ${
                                    activeCategory === "personal"
                                        ? "bg-purple-700 text-white"
                                        : "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                                }`}
                            >
                                Personal Project
                            </button>
                            <button
                                onClick={() => setActiveCategory("work")}
                                className={`px-4 py-2 rounded-lg font-medium transition cursor-pointer ${
                                    activeCategory === "work"
                                        ? "bg-purple-700 text-white"
                                        : "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                                }`}
                            >
                                Work Project
                            </button>
                        </div> */
}
