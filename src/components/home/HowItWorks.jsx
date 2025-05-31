import React from 'react';
import { Card } from "@/components/ui/card";

const HowItWorks = () => {
    const steps = [
        {
            title: "Consult With Us",
            description: "Share your energy needs and business goals.",
            icon: "1"
        },
        {
            title: "Get a Custom Proposal",
            description: "Receive datasheets, configurations, and pricing.",
            icon: "2"
        },
        {
            title: "Deploy Sustainable Power",
            description: "Enjoy long-term performance and savings.",
            icon: "3"
        }
    ];

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto bg-white p-10 rounded-2xl">
                {/* Section Header */}
                <div className="text-center mb-20 relative">
                    <div className="inline-block">
                        <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-amber-600 to-orange-600 mb-8 leading-tight">
                            Our Process
                        </h1>
                        <div className="h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent w-32 sm:w-48 mx-auto" />
                    </div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-10 leading-relaxed">
                        Simple steps to transition to solar energy with Abundance Solar
                    </p>
                </div>
                {/* Process Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <Card key={index} className="p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="flex flex-col items-center text-center">
                                {/* Step Number */}
                                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                                    <span className="text-white text-2xl font-bold">{step.icon}</span>
                                </div>

                                {/* Step Content */}
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Optional CTA */}
                {/* <div className="mt-12 text-center">
                    <button className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
                        Start Your Solar Journey
                    </button>
                </div> */}
            </div>
        </section>
    );
};

export default HowItWorks;