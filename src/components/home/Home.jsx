// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import TestimonialsSwiper from '../TestimonialsSwiper';
import HowItWorks from '../../assets/svg/howWorks.svg'
import PartnerSvg from '../../assets/svg/partner.svg'
import TrustedSolar from '../../assets/svg/trustedSolar.svg'
import Header from '../Header';
import { Mail, MapPin, Phone } from 'lucide-react';
import NewsSection from '../NewsSection';
import Footer from '../Footer';
import videoPath from '../../../src/assets/videos/homepage.mp4'
import AwardsCertifications from '../AwardsCertifications';

const App = () => {

    const newsItems = [
        {
            title: "Abundance Solar Launches AED 55 Million Manufacturing Plant in KEZAD",
            date: "2025-05-15",
            excerpt: "The state-of-the-art facility will produce high-efficiency N-Type TopCon modules with an annual capacity of 500MW, creating over 200 jobs in the region.",
            image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500",
            readMoreLink: "/news/manufacturing-plant-launch"
        },
        {
            title: "Abundance Solar Partners with Leading UAE Developer for 200MW Project",
            date: "2025-03-10",
            excerpt: "The partnership will deploy Abundance Solar's premium modules across multiple utility-scale installations in the region, powering 50,000 homes annually.",
            image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500",
            readMoreLink: "/news/uae-partnership"
        },
        {
            title: "Solar Innovation Award 2025 Goes to Abundance Solar R&D Team",
            date: "2025-02-28",
            excerpt: "Recognized for breakthrough in recyclable solar panel technology that reduces environmental impact by 40% while maintaining high efficiency standards.",
            image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500",
            readMoreLink: "/news/innovation-award"
        }
    ];
    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <Header />
            <main>
                <section className="w-80vw bg-black overflow-hidden h-[80vh] m-1 rounded-2xl">
                    <div className="relative h-full w-full">
                        <video
                            className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                            src={videoPath}
                        />
                    </div>
                </section>                {/* <Vision /> */}
                <section className='h-full w-full flex justify-center align-center mt-10'>
                    <img src={HowItWorks} />
                </section>
                <AwardsCertifications />
                {/* Testimonials Section */}
                <TestimonialsSwiper />
                <section className='h-full w-full flex justify-center align-center'>
                    <img src={TrustedSolar} />
                </section>

                <NewsSection newsItems={newsItems} />

                {/* Contact Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-[#1B2A4F] mb-4">Get in Touch</h2>
                            <p className="text-gray-600 max-w-3xl mx-auto">Have questions about our products or services? Our team is here to help.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="bg-gray-50 p-8 rounded-lg">
                                <h3 className="text-2xl font-semibold text-[#1B2A4F] mb-6">Contact Us</h3>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DB840A] focus:border-transparent"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DB840A] focus:border-transparent"
                                                placeholder="Your Email"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                                        <input
                                            type="text"
                                            id="company"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DB840A] focus:border-transparent"
                                            placeholder="Your Company"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DB840A] focus:border-transparent"
                                            placeholder="Subject"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DB840A] focus:border-transparent"
                                            placeholder="Your Message"
                                        ></textarea>
                                    </div>
                                    <Button className="bg-[#DB840A] hover:bg-[#c47609] text-white px-6 py-2 w-full !rounded-button whitespace-nowrap cursor-pointer">
                                        Send Message
                                    </Button>
                                </form>
                            </div>

                            <div>
                                <div className="bg-[#1B2A4F] text-white p-8 rounded-lg mb-8">
                                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <div className="w-10 h-10 rounded-full bg-[#DB840A] flex items-center justify-center mr-4 flex-shrink-0">
                                                <MapPin />
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Address</h4>
                                                <p className="text-gray-300">KEZAD Industrial Zone, Abu Dhabi, United Arab Emirates</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="w-10 h-10 rounded-full bg-[#DB840A] flex items-center justify-center mr-4 flex-shrink-0">
                                                <Phone />
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Phone</h4>
                                                <p className="text-gray-300">+971 2 123 4567</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="w-10 h-10 rounded-full bg-[#DB840A] flex items-center justify-center mr-4 flex-shrink-0">
                                                <Mail />
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Email</h4>
                                                <p className="text-gray-300">info@abundancesolar.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="h-[300px] rounded-lg overflow-hidden">
                                    <img
                                        src="https://readdy.ai/api/search-image?query=A%20satellite%20or%20aerial%20view%20of%20an%20industrial%20zone%20in%20Abu%20Dhabi%2C%20showing%20a%20modern%20manufacturing%20facility%20complex%20with%20solar%20panels%20visible%20on%20rooftops.%20The%20image%20shows%20the%20surrounding%20area%20with%20roads%2C%20other%20industrial%20buildings%2C%20and%20possibly%20water%20nearby%2C%20representing%20the%20KEZAD%20industrial%20zone&width=600&height=300&seq=15&orientation=landscape"
                                        alt="KEZAD Location"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default App;
