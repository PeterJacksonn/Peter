import { useEffect, useRef, useState } from "react";

function FadeInSection({ children }) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={`fade-section${isVisible ? " fade-section-visible" : ""}`}>
            {children}
        </div>
    );
}

export default FadeInSection;
