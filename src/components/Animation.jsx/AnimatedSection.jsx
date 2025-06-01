import React, { useRef, useEffect, useState } from "react";

const useInView = (threshold = 0.1) => {
    const ref = useRef();
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        // Check if window is defined (for SSR compatibility)
        if (typeof window === "undefined") return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
            observer.disconnect();
        };
    }, [threshold]);

    return [ref, isInView];
};

const AnimatedSection = ({ children, className }) => {
    const [ref, isInView] = useInView();
    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out transform ${
                isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
            } ${className || ""}`}
        >
            {children}
        </div>
    );
};

export default AnimatedSection;
