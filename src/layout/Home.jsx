import React from "react";

import AnimatedSection from "../components/Animation.jsx/AnimatedSection";
import Button from "../components/Buttons/Button";
import Card from "../components/Cards/Card";

import { motion } from "framer-motion";

import photo from "../assets/svg/photo.svg";
import laravel_logo from "../assets/svg/laravel.svg";
import codeigniter_logo from "../assets/svg/codeigniter.svg";
import react_logo from "../assets/svg/react.svg";

import laravel_tech_stack from "../assets/tect-stacks/laravel.svg";
import codeigniter_tech_stack from "../assets/tect-stacks/codeigniter.svg";
import php_tech_stack from "../assets/tect-stacks/php.svg";
import html_tech_stack from "../assets/tect-stacks/html.svg";
import css_tech_stack from "../assets/tect-stacks/css.svg";
import js_tech_stack from "../assets/tect-stacks/js.svg";
import react_tech_stack from "../assets/tect-stacks/react.svg";
import bootstrap_tech_stack from "../assets/tect-stacks/bootstrap.svg";
import tailwind_tech_stack from "../assets/tect-stacks/tailwind.svg";
import mui_tech_stack from "../assets/tect-stacks/mui.svg";
import vs_tech_stack from "../assets/tect-stacks/vs.svg";
import git_tech_stack from "../assets/tect-stacks/git.svg";
import postman_tech_stack from "../assets/tect-stacks/postman.svg";
import mysql_tech_stack from "../assets/tect-stacks/mysql.svg";
import sqlite_tech_stack from "../assets/tect-stacks/sqlite.svg";
// import firebase_tech_stack from "../assets/tect-stacks/firebase.png";

import resume from "../assets/resume/John_Otilla_Resume.pdf";

const Home = () => {
    const handleDonwloadResume = () => {
        const resumeUrl = resume; // Put your resume file in the public folder
        const link = document.createElement("a");
        link.href = resumeUrl;
        link.download = "John-Otilla-Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <div className="flex lg:flex-row flex-col lg:h-screen">
                <div className="flex-1 h-screen flex items-center justify-center p-4 md:p-10 gap-4">
                    <AnimatedSection className="flex flex-col gap-5">
                        <div>
                            <h3 className="text-2xl lg:text-4xl md:text-4xl font-bold mb-6">
                                Hi there!
                            </h3>
                            <h3 className="text-4xl md:text-4xl font-bold mb-6">
                                I am{" "}
                                <span className="text-purple-700 text-4xl lg:text-5xl font-extrabold">
                                    John C. Otilla
                                </span>
                            </h3>
                            <p className="text-lg md:text-xl text-gray-700 text-justify">
                                I love turning ideas into real, working web
                                apps. Whether it’s building from scratch or
                                improving what’s already there, I enjoy solving
                                problems with clean code and modern tools.
                                Always learning, always creating.
                            </p>
                        </div>
                        <div>
                            <Button onClick={handleDonwloadResume}>
                                {" "}
                                Download Resume{" "}
                                <i className="fa-solid fa-download"></i>
                            </Button>
                        </div>
                    </AnimatedSection>
                </div>

                <div className="flex-1 h-screen flex items-center justify-center p-4 md:p-10 gap-4">
                    <AnimatedSection>
                        <div className="relative">
                            {/* <div className="absolute transform translate-x-[-10%] translate-y-[-14%] left-[13%] top-[10%] sm:top-[17%] md:top-[15%] md:left-[19%] lg:top-[13%] lg:left-[15%] z-50">
                                <img
                                    src={laravel_logo}
                                    alt="Laravel"
                                    height={60}
                                    width={60}
                                    className="sm:h-[90px] sm:w-[90px] animate-bounce"
                                />
                            </div>
                            <div className="absolute transform translate-x-[-50%] translate-y-[10%] left-[17%] bottom-[2%] sm:bottom-[20%] md:bottom-[1%] md:left-[25%] lg:bottom-[-3%] lg:left-[25%] z-50">
                                <img
                                    src={codeigniter_logo}
                                    alt="Codeigniter"
                                    height={60}
                                    width={60}
                                    className="sm:h-[90px] sm:w-[90px] animate-bounce"
                                />
                            </div>
                            <div className="absolute transform translate-x-[20%] translate-y-[10%] right-[-5%] bottom-[57%] sm:right-[1%] md:right-[-5%] lg:right-[-4%] z-50">
                                <img
                                    src={react_logo}
                                    alt="React"
                                    height={60}
                                    width={60}
                                    className="sm:h-[90px] sm:w-[90px] animate-bounce"
                                />
                            </div> */}
                            <div>
                                <img
                                    src={photo}
                                    alt="Profile"
                                    className="relative z-10"
                                />
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>

            <div>
                <div className="py-12 px-6">
                    <AnimatedSection>
                        <div className="flex items-center justify-center gap-8">
                            <div className="h-[2px] w-10 md:w-50 bg-purple-700 border-r-8"></div>
                            <h2 className="text-2xl md:text-4xl">
                                Tech{" "}
                                <span className="font-bold text-purple-700">
                                    Stacks
                                </span>
                            </h2>
                            <div className="h-[2px] w-10 md:w-50 bg-purple-700 border-r-8"></div>
                        </div>
                    </AnimatedSection>

                    <div className="flex flex-col mt-10">
                        <AnimatedSection>
                            <div className="text-center">
                                <h2 className="text-4xl font-extrabold text-purple-700">
                                    DATABASE
                                </h2>
                            </div>
                        </AnimatedSection>

                        <div className="flex align-center justify-center flex-wrap gap-5 mt-10">
                            <div className="flex align-center justify-center flex-wrap gap-5 mt-5">
                                <AnimatedSection>
                                    <Card
                                        imageUrl={mysql_tech_stack}
                                        title={"MYSQL"}
                                    />
                                </AnimatedSection>
                                <AnimatedSection>
                                    <Card
                                        imageUrl={sqlite_tech_stack}
                                        title={"SQLite"}
                                    />
                                </AnimatedSection>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="flex flex-col">
                            <AnimatedSection>
                                <div className="text-center">
                                    <h2 className="text-4xl font-extrabold text-purple-700">
                                        BACKEND
                                    </h2>
                                </div>
                            </AnimatedSection>

                            <div className="flex align-center justify-center flex-wrap gap-5 mt-10">
                                <div className="flex align-center justify-center flex-wrap gap-5 mt-5">
                                    <AnimatedSection>
                                        <Card
                                            imageUrl={laravel_tech_stack}
                                            title={"Laravel"}
                                        />
                                    </AnimatedSection>
                                    <AnimatedSection>
                                        <Card
                                            imageUrl={codeigniter_tech_stack}
                                            title={"Codeigniter"}
                                        />
                                    </AnimatedSection>
                                    <AnimatedSection>
                                        <Card
                                            imageUrl={php_tech_stack}
                                            title={"PHP"}
                                        />
                                    </AnimatedSection>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col mt-10">
                            <AnimatedSection>
                                <div className="text-center">
                                    <h2 className="text-4xl font-extrabold text-purple-700">
                                        FRONTEND
                                    </h2>
                                </div>
                            </AnimatedSection>

                            <div className="flex align-center justify-center flex-wrap gap-5 mt-10">
                                <div className="flex align-center justify-center flex-wrap gap-5 mt-5">
                                    <AnimatedSection>
                                        <Card
                                            imageUrl={html_tech_stack}
                                            title={"HTML"}
                                        />
                                    </AnimatedSection>

                                    <AnimatedSection>
                                        <Card
                                            imageUrl={js_tech_stack}
                                            title={"JavaScript"}
                                        />
                                    </AnimatedSection>

                                    <AnimatedSection>
                                        <Card
                                            imageUrl={css_tech_stack}
                                            title={"CSS"}
                                        />
                                    </AnimatedSection>

                                    <AnimatedSection>
                                        <Card
                                            imageUrl={react_tech_stack}
                                            title={"React"}
                                        />
                                    </AnimatedSection>

                                    <AnimatedSection>
                                        <Card
                                            imageUrl={bootstrap_tech_stack}
                                            title={"BootStrap"}
                                        />
                                    </AnimatedSection>

                                    <AnimatedSection>
                                        <Card
                                            imageUrl={tailwind_tech_stack}
                                            title={"Tailwind"}
                                        />
                                    </AnimatedSection>

                                    <AnimatedSection>
                                        <Card
                                            imageUrl={mui_tech_stack}
                                            title={"MUI"}
                                        />
                                    </AnimatedSection>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col mt-10">
                            <AnimatedSection>
                                <div className="text-center">
                                    <h2 className="text-4xl font-extrabold text-purple-700">
                                        TOOLS
                                    </h2>
                                </div>
                            </AnimatedSection>

                            <div className="flex align-center justify-center flex-wrap gap-5 mt-10">
                                <div className="flex align-center justify-center flex-wrap gap-5 mt-5">
                                    <AnimatedSection>
                                        <Card
                                            imageUrl={vs_tech_stack}
                                            title={"VS Code"}
                                        />
                                    </AnimatedSection>
                                    <AnimatedSection>
                                        <Card
                                            imageUrl={git_tech_stack}
                                            title={"Git"}
                                        />
                                    </AnimatedSection>
                                    <AnimatedSection>
                                        <Card
                                            imageUrl={postman_tech_stack}
                                            title={"Postman"}
                                        />
                                    </AnimatedSection>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Work Experience Roadmap Section */}
                    <div className="py-16 px-6">
                        <AnimatedSection>
                            <div className="flex items-center justify-center gap-8">
                                <div className="h-[2px] w-10 md:w-50 bg-purple-700 border-r-8"></div>
                                <h2 className="text-2xl md:text-4xl">
                                    Work{" "}
                                    <span className="font-bold text-purple-700">
                                        Experiences
                                    </span>
                                </h2>
                                <div className="h-[2px] w-10 md:w-50 bg-purple-700 border-r-8"></div>
                            </div>
                        </AnimatedSection>

                        <div className="mt-12 relative border-l-4 border-purple-700 pl-6">
                            {/* Example Experience Item */}
                            <AnimatedSection>
                                <div className="mb-10 ml-6">
                                    <div className="absolute w-6 h-6 bg-purple-700 rounded-full -left-[14px] border-4 border-white"></div>
                                    <h3 className="text-xl font-bold text-purple-700">
                                        Full Stack Developer @ BUCS, Research
                                        Coordinator's Office
                                    </h3>
                                    <span className="text-sm text-gray-500">
                                        2025 - Present
                                    </span>
                                    <p className="mt-2 text-gray-700 text-justify">
                                        Developed and maintained BUCS-RDMS,
                                        created BUCS-EDMS (Extension Document
                                        Management System), provided technical
                                        support, and managed research data and
                                        administrative tasks.
                                    </p>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection>
                                <div className="mb-10 ml-6">
                                    <div className="absolute w-6 h-6 bg-purple-700 rounded-full -left-[14px] border-4 border-white"></div>
                                    <h3 className="text-xl font-bold text-purple-700">
                                        Web Developer Intern @ BUCS, Research
                                        Coordinator's Office
                                    </h3>
                                    <span className="text-sm text-gray-500">
                                        February 2024 - May 2024
                                    </span>
                                    <p className="mt-2 text-gray-700 text-justify">
                                        Assisted in updating and testing the
                                        RDMS management system, uploading files,
                                        and coordinating with the mentor for the
                                        research write shop to ensure its full
                                        usability for faculty and students.
                                    </p>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection>
                                <div className="ml-6">
                                    <div className="absolute w-6 h-6 bg-purple-700 rounded-full -left-[14px] border-4 border-white"></div>
                                    <h3 className="text-xl font-bold text-purple-700">
                                        Computer Technician Immersion @ Denver's
                                        Computer Shoppe Inc.
                                    </h3>
                                    <span className="text-sm text-gray-500">
                                        February 2020
                                    </span>
                                    <p className="mt-2 text-gray-700 text-justify">
                                        Assembled and configured computer
                                        systems and networks, installed
                                        operating systems and software, and
                                        diagnosed and repaired hardware and
                                        software issues.
                                    </p>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
