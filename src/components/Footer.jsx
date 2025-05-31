import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Abundance Solar</h3>
                        <p className="text-gray-400 mb-6">
                            Leading manufacturer of premium N-Type TopCon solar modules for residential and commercial applications.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">
                                <i className="fab fa-linkedin text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">
                                <i className="fab fa-twitter text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">
                                <i className="fab fa-facebook text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">
                                <i className="fab fa-instagram text-xl"></i>
                            </a>
                        </div>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="https://readdy.ai/home/478205b1-512e-47f5-b295-f70968878c4c/f04a6b34-4a33-496c-944d-a26c087505e3" data-readdy="true" className="text-gray-400 hover:text-white transition-colors duration-200">Home</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Products</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Media</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>
                        </ul>
                    </div>
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <i className="fas fa-map-marker-alt mt-1 mr-3 text-gray-400"></i>
                                <span className="text-gray-400">KEZAD, Abu Dhabi, United Arab Emirates</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-phone mt-1 mr-3 text-gray-400"></i>
                                <span className="text-gray-400">+971 2 123 4567</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-envelope mt-1 mr-3 text-gray-400"></i>
                                <span className="text-gray-400">info@abundancesolar.com</span>
                            </li>
                        </ul>
                    </div>
                    {/* Newsletter */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                        <p className="text-gray-400 mb-4">
                            Subscribe to our newsletter for the latest updates and industry insights.
                        </p>
                        <form className="flex flex-col space-y-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="bg-gray-800 text-white border-none rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap !rounded-button"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            &copy; 2025 Abundance Solar. All rights reserved.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Terms of Service</a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Sitemap</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer