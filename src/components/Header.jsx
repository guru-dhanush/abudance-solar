import React, { useState } from 'react'
import Logo from "../assets/images/logo.png"
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-20">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <a href="#" className="flex items-center">
                        <img src={Logo} alt='Abundance Solar' className='h-12 w-auto' />
                    </a>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    <a href="/" data-readdy="true" className="text-gray-800 hover:text-blue-500 font-medium transition-colors duration-200">Home</a>
                    <a href="/about" className="text-blue-600 font-medium transition-colors duration-200">About Us</a>
                    <a href="#" className="text-gray-800 hover:text-blue-500 font-medium transition-colors duration-200">Products</a>
                    <a href="#" className="text-gray-800 hover:text-blue-500 font-medium transition-colors duration-200">Technology</a>
                    <a href="#" className="text-gray-800 hover:text-blue-500 font-medium transition-colors duration-200">Media</a>
                    <a href="#" className="text-gray-800 hover:text-blue-500 font-medium transition-colors duration-200">Contact</a>
                </nav>

                {/* Right side elements */}
                <div className="hidden md:flex items-center space-x-4">
                    <div className="relative">
                        <button className="text-gray-700 hover:text-blue-500 transition-colors duration-200 cursor-pointer whitespace-nowrap !rounded-button">
                            <span>EN</span>
                            <i className="fas fa-chevron-down ml-1 text-xs"></i>
                        </button>
                    </div>
                    <button className="text-gray-700 hover:text-blue-500 transition-colors duration-200 cursor-pointer whitespace-nowrap !rounded-button">
                        <i className="fas fa-search"></i>
                    </button>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-700 hover:text-blue-500 transition-colors duration-200 cursor-pointer whitespace-nowrap !rounded-button"
                    >
                        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 py-4">
                    <div className="container mx-auto px-4">
                        <nav className="flex flex-col space-y-4">
                            <a href="https://readdy.ai/home/478205b1-512e-47f5-b295-f70968878c4c/f04a6b34-4a33-496c-944d-a26c087505e3" data-readdy="true" className="text-gray-800 hover:text-blue-500 font-medium transition-colors duration-200 py-2">Home</a>
                            <a href="#" className="text-blue-600 font-medium transition-colors duration-200 py-2">About Us</a>
                            <a href="#" className="text-gray-800 hover:text-blue-500 font-medium transition-colors duration-200 py-2">Products</a>
                            <a href="#" className="text-gray-800 hover:text-blue-500 font-medium transition-colors duration-200 py-2">Technology</a>
                            <a href="#" className="text-gray-800 hover:text-blue-500 font-medium transition-colors duration-200 py-2">Media</a>
                            <a href="#" className="text-gray-800 hover:text-blue-500 font-medium transition-colors duration-200 py-2">Contact</a>
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                <button className="text-gray-700 hover:text-blue-500 transition-colors duration-200 cursor-pointer whitespace-nowrap !rounded-button">
                                    <span>EN</span>
                                    <i className="fas fa-chevron-down ml-1 text-xs"></i>
                                </button>
                                <button className="text-gray-700 hover:text-blue-500 transition-colors duration-200 cursor-pointer whitespace-nowrap !rounded-button">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header