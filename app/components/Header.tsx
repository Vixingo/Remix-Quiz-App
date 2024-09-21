import { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlHeader = () => {
            if (typeof window !== "undefined") {
                if (window.scrollY > 100) {
                    if (window.scrollY > lastScrollY) {
                        // Scrolling down
                        setIsVisible(false);
                    } else {
                        // Scrolling up
                        setIsVisible(true);
                    }
                } else {
                    // At the top
                    setIsVisible(false);
                }
                setLastScrollY(window.scrollY);
            }
        };

        if (typeof window !== "undefined") {
            window.addEventListener("scroll", controlHeader);

            return () => {
                window.removeEventListener("scroll", controlHeader);
            };
        }
    }, [lastScrollY]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
      ${isVisible ? "translate-y-0 shadow-md" : "-translate-y-full"}
      ${isVisible ? "bg-white text-green-600" : "bg-green-600 text-white"}`}
        >
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Leaf className="h-8 w-8" />
                    <span className="text-2xl font-bold">Eagle Lawn Care</span>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-6">
                    <a
                        href="#"
                        className="hover:text-green-400 transition-colors"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="hover:text-green-400 transition-colors"
                    >
                        Services
                    </a>
                    <a
                        href="#"
                        className="hover:text-green-400 transition-colors"
                    >
                        About
                    </a>
                    <a
                        href="#"
                        className="hover:text-green-400 transition-colors"
                    >
                        Contact
                    </a>
                </nav>

                <button
                    className={`hidden md:block px-4 py-2 rounded-full font-semibold transition-colors
          ${
              isVisible
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-white text-green-600 hover:bg-green-100"
          }`}
                >
                    Get a Quote
                </button>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <nav
                        className={`flex flex-col items-center py-4 space-y-4 
            ${isVisible ? "bg-gray-100" : "bg-green-700 text-white"}`}
                    >
                        <a
                            href="#"
                            className="hover:text-green-400 transition-colors"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="hover:text-green-400 transition-colors"
                        >
                            Services
                        </a>
                        <a
                            href="#"
                            className="hover:text-green-400 transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#"
                            className="hover:text-green-400 transition-colors"
                        >
                            Contact
                        </a>
                        <button
                            className={`px-4 py-2 rounded-full font-semibold transition-colors
              ${
                  isVisible
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-white text-green-600 hover:bg-green-100"
              }`}
                        >
                            Get a Quote
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}
