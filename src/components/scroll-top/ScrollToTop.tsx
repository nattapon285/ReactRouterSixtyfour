import { useEffect, useState } from "react";

function onScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}


export default function ScrollToTop() {
    const [showScrollToTop, setShowScrollToTop] = useState<boolean>(false);

    useEffect(() => {
        function handleScoll() {
            if (window.scrollY > 300) {
                setShowScrollToTop(true);
            } else {
                setShowScrollToTop(false);
            }
        }

        document.addEventListener("scroll", handleScoll);

        return () => {
            window.addEventListener("scroll", handleScoll);
        }
    }, [])

    return (
        <button
            type="button"
            onClick={onScrollToTop}
            className={`${showScrollToTop ? "opacity-100" : "opacity-0"} duration-500 ease-in-out transition-opacity fixed bottom-5 right-5 bg-blue-main text-white w-10 h-10 rounded-full shadow-lg`}
        >
            <i className="fa-solid fa-chevron-up"></i>
        </button>
    )
}