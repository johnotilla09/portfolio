import { useState } from "react";
import emailjs from "@emailjs/browser";
import Success from "../components/Toast/Success";
import Error from "../components/Toast/Error";

const UseEmail = (serviceId, templateId, publicKey) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const sendEmail = async (formData) => {
        setLoading(true);
        setError(null);
        setSuccess(false);
        emailjs.init(publicKey);

        try {
            const result = await emailjs.send(serviceId, templateId, formData);

            Success("Message sent successfully");
            setSuccess(true);
        } catch (err) {
            Error("Error:", err);
            setError(err?.text || err?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return { sendEmail, loading, error, success };
};

export default UseEmail;
