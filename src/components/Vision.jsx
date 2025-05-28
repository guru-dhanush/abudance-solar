import React from 'react';

const Vision = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                {/* Vision Section */}
                <div className="relative rounded-2xl overflow-hidden mb-20">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70 z-10"></div>
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=500')`
                        }}
                    ></div>
                    <div className="relative z-20 p-12 md:p-16 flex flex-col md:flex-row items-center">
                        <div className="md:w-1/3 mb-8 md:mb-0 md:mr-12">
                            <div className="text-white text-6xl mb-4">
                                <i className="fas fa-eye"></i>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Vision</h2>
                        </div>
                        <div className="md:w-2/3">
                            <p className="text-xl text-white leading-relaxed">
                                To become a global leader in solar panel manufacturing, driving the adoption of renewable energy and supporting the UAE's vision for a sustainable, energy-efficient future. Abundance Solar is committed to setting new industry standards through advanced technology and innovative practices, envisioning a world where solar energy powers a resilient and eco-friendly society.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mission Section */}
                <div className="relative rounded-2xl overflow-hidden mb-20">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-900/70 z-10"></div>
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url('https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=500')`
                        }}
                    ></div>
                    <div className="relative z-20 p-12 md:p-16 flex flex-col md:flex-row items-center">
                        <div className="md:w-1/3 mb-8 md:mb-0 md:mr-12">
                            <div className="text-white text-6xl mb-4">
                                <i className="fas fa-bullseye"></i>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Mission</h2>
                        </div>
                        <div className="md:w-2/3">
                            <p className="text-xl text-white leading-relaxed">
                                Abundance Solar's mission is to lead the renewable energy transition by leveraging state-of-the-art European technology and fostering environmental stewardship. The company is dedicated to supporting the UAE's green agenda, reducing carbon emissions, and empowering businesses to adopt clean, energy-efficient solutions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-lg p-8 text-center">
                            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-orange-100 text-orange-500 mb-6">
                                <i className="fas fa-leaf text-3xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainability</h3>
                            <p className="text-gray-600">
                                We are committed to environmental stewardship and promoting sustainable practices in everything we do.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-8 text-center">
                            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-orange-100 text-orange-500 mb-6">
                                <i className="fas fa-lightbulb text-3xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
                            <p className="text-gray-600">
                                We continuously pursue technological advancement and creative solutions to drive the renewable energy revolution.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-8 text-center">
                            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-orange-100 text-orange-500 mb-6">
                                <i className="fas fa-medal text-3xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
                            <p className="text-gray-600">
                                We are dedicated to the highest standards of quality, reliability, and performance in our products and services.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-8 text-center">
                            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-orange-100 text-orange-500 mb-6">
                                <i className="fas fa-users text-3xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Collaboration</h3>
                            <p className="text-gray-600">
                                We believe in the power of partnerships and working together to achieve common goals for a sustainable future.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-8 text-center">
                            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-orange-100 text-orange-500 mb-6">
                                <i className="fas fa-balance-scale text-3xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Integrity</h3>
                            <p className="text-gray-600">
                                We conduct business with honesty, transparency, and ethical practices that build trust with all stakeholders.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-8 text-center">
                            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-orange-100 text-orange-500 mb-6">
                                <i className="fas fa-globe-americas text-3xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Impact</h3>
                            <p className="text-gray-600">
                                We strive to make a positive difference in communities worldwide through accessible clean energy solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vision;