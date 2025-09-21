import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
import UseEmail from "../hooks/UseEmail";
import AnimatedSection from "../components/Animation.jsx/AnimatedSection";

const Contact = () => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const title = "New Message";

    // console.log(publicKey);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        title: title,
    });

    const { sendEmail, loading, error, success } = UseEmail(
        serviceId,
        templateId,
        publicKey
    );

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // send email
        sendEmail(formData);

        // Reset form
        setFormData({
            name: "",
            email: "",
            message: "",
            title: title, // keep same title
        });
    };

    return (
        <section className="py-16">
            <AnimatedSection className="max-w-4xl mx-auto px-6">
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
                            disabled={loading}
                        >
                            {loading ? (
                                <div className="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeDasharray="16"
                                            strokeDashoffset="16"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 3c4.97 0 9 4.03 9 9"
                                        >
                                            <animate
                                                fill="freeze"
                                                attributeName="stroke-dashoffset"
                                                dur="0.2s"
                                                values="16;0"
                                            />
                                            <animateTransform
                                                attributeName="transform"
                                                dur="1.5s"
                                                repeatCount="indefinite"
                                                type="rotate"
                                                values="0 12 12;360 12 12"
                                            />
                                        </path>
                                    </svg>
                                    <span className="ml-2">Sending</span>
                                </div>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                    </div>
                </form>
            </AnimatedSection>
        </section>
    );
};

export default Contact;
