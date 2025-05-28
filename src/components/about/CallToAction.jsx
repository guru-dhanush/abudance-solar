import React from 'react'

const CallToAction = () => {
    return (
        <section className="py-16 md:py-24 bg-blue-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Join Us in Shaping a Sustainable Future</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Discover how our premium N-Type TopCon solar modules can maximize energy production and ROI for your residential or commercial installation.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap !rounded-button">
                            Contact Our Team
                        </button>
                        <button className="bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap !rounded-button">
                            Download Company Profile
                        </button>
                    </div>
                </div>
            </div>
        </section>)
}

export default CallToAction