"use client";
import React, { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // 🚀 Replace with your backend/email service (EmailJS, Laravel API, etc.)
    };

    return (
        // for darkmode
        // dark:to-gray-800
        // dark:text-purple-400 mb-8
        // from-purple-50 to-purple-100
        <section className="py-16 bg-gradient-to-r ">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-purple-700 dark:text-purple-400 mb-8">
                    Get in Touch
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-lg rounded-2xl p-8 space-y-6"
                >
                    {/* Name */}
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                            Your Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Ex. Juan Dela Cruz"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                            Message
                        </label>
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Write your message here..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-6 py-3 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-semibold shadow-md transition transform hover:scale-105"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
