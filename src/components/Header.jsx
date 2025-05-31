import React, { useState, useEffect } from 'react';
import Logo from "../assets/images/logo.png";
import { Mail, Phone } from 'lucide-react';

const Header = ({ page }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10 || page === "about") {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Announcement Bar */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-secondary text-primary py-1  text-sm font-medium">
                <div className="container mx-auto flex items-center justify-center space-x-6 ">
                    <div className="flex items-center space-x-2">
                        <Phone />
                        <span>+971 2 123 4567</span>
                    </div>
                    <div className="h-4 w-[2px] bg-primary/80"></div>
                    <div className="flex items-center space-x-2">
                        <Mail />
                        <span>info@abundancesolar.com</span>
                    </div>
                </div>
            </div>

            {/* Header positioned below the announcement bar */}
            <header className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
                <div className={`container mx-auto px-4 md:px-6 flex items-center justify-between h-20 ${!isScrolled ? 'backdrop-blur-md' : ''}`}>
                    {/* Logo with glass effect when not scrolled */}
                    <div className={`flex-shrink-0 ${!isScrolled ? 'bg-secondary/10 backdrop-blur-md rounded-lg px-3 py-1' : ''}`}>
                        <a href="#" className="flex items-center">
                            <img src={Logo} alt='Abundance Solar' className='h-12 w-auto' />
                        </a>
                    </div>

                    {/* Desktop Navigation with glassmorphism and primary/secondary colors */}
                    <nav className={`hidden md:flex items-center space-x-8 ${!isScrolled ? 'bg-secondary/30 backdrop-blur-md rounded-full px-6 py-2' : ''}`}>
                        <a href="/" data-readdy="true" className={`${isScrolled ? 'text-primary hover:text-secondary' : 'text-white hover:text-secondary/90'} font-medium transition-colors duration-200`}>
                            Home
                        </a>
                        <a href="/about" className={`${isScrolled ? 'text-primary hover:text-secondary' : 'text-white hover:text-secondary/90'} font-medium transition-colors duration-200`}>
                            About Us
                        </a>
                        <a href="/products" className={`${isScrolled ? 'text-primary hover:text-secondary' : 'text-white hover:text-secondary/90'} font-medium transition-colors duration-200`}>
                            Products
                        </a>
                        <a href="/downloads" className={`${isScrolled ? 'text-primary hover:text-secondary' : 'text-white hover:text-secondary/90'} font-medium transition-colors duration-200`}>
                            Downloads
                        </a>
                        <a href="#" className={`${isScrolled ? 'text-primary hover:text-secondary' : 'text-white hover:text-secondary/90'} font-medium transition-colors duration-200`}>
                            Media
                        </a>
                        <a href="#" className={`${isScrolled ? 'text-primary hover:text-secondary' : 'text-white hover:text-secondary/90'} font-medium transition-colors duration-200`}>
                            Contact
                        </a>
                    </nav>

                    {/* Right side elements with glass effect when not scrolled */}
                    <div className={`hidden md:flex items-center space-x-4 ${!isScrolled ? 'bg-secondary/20 backdrop-blur-md rounded-full px-4 py-2' : ''}`}>
                        <div className="relative">
                            <button className={`${isScrolled ? 'text-primary hover:text-secondary' : 'text-white hover:text-secondary/90'} transition-colors duration-200 cursor-pointer whitespace-nowrap !rounded-button`}>
                                <span>EN</span>
                                <i className="fas fa-chevron-down ml-1 text-xs"></i>
                            </button>
                        </div>
                        <button className={`${isScrolled ? 'text-primary hover:text-secondary' : 'text-white hover:text-secondary/90'} transition-colors duration-200 cursor-pointer whitespace-nowrap !rounded-button`}>
                            <i className="fas fa-search"></i>
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`${isScrolled ? 'text-primary hover:text-secondary' : 'text-white hover:text-secondary/90'} transition-colors duration-200 cursor-pointer whitespace-nowrap !rounded-button`}
                        >
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation with glassmorphism */}
                {isMenuOpen && (
                    <div className={`md:hidden ${isScrolled ? 'bg-white' : 'bg-primary/20 backdrop-blur-lg'} border-t border-gray-100/20 py-4`}>
                        <div className="container mx-auto px-4">
                            <nav className="flex flex-col space-y-4">
                                <a href="https://readdy.ai/home/478205b1-512e-47f5-b295-f70968878c4c/f04a6b34-4a33-496c-944d-a26c087505e3" data-readdy="true" className={`${isScrolled ? 'text-primary hover:text-secondary' : 'text-white hover:text-secondary/90'} font-medium transition-colors duration-200 py-2`}>
                                    Home
                                </a>
                                <a href="#" className={`${isScrolled ? 'text-secondary' : 'text-white hover:text-secondary/90'} font-medium transition-colors duration-200 py-2`}>
                                    About Us
                                </a>
                                <a href="#" className={`${isScrolled ? 'text-primary hover:text-secondary' : 'text-white hover:text-secondary/90'} font-medium transition-colors duration-200 py-2`}>
                                    Products
                                </a>
                                <a href="#" className={`${isScrolled ? 'text-primary hover:text-secondary' : 'text-white hover:text-secondary/90'} font-medium transition-colors duration-200 py-2`}>
                                    Media
                                </a>
                                <a href="#" className={`${isScrolled ? 'text-primary hover:text-secondary' : 'text-white hover:text-secondary/90'} font-medium transition-colors duration-200 py-2`}>
                                    Contact
                                </a>
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100/20">
                                    <button className={`${isScrolled ? 'text-primary hover:text-secondary' : 'text-white hover:text-secondary/90'} transition-colors duration-200 cursor-pointer whitespace-nowrap !rounded-button`}>
                                        <span>EN</span>
                                        <i className="fas fa-chevron-down ml-1 text-xs"></i>
                                    </button>
                                    <button className={`${isScrolled ? 'text-primary hover:text-secondary' : 'text-white hover:text-secondary/90'} transition-colors duration-200 cursor-pointer whitespace-nowrap !rounded-button`}>
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </nav>
                        </div>
                    </div>
                )}
            </header>
        </>
    )
}

export default Header;