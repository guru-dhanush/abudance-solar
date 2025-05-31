import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const AwardsCertifications = () => {
    const awards = [
        {
            title: "Solar Innovation Award 2025",
            description: "Recognized for breakthrough in recyclable solar panel technology",
            year: "2025",
            image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200"
        },
        {
            title: "UAE Green Manufacturer Award",
            description: "Honored for sustainable manufacturing practices",
            year: "2024",
            image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200"
        },
        {
            title: "KEZAD Excellence in Industry",
            description: "Awarded for outstanding contribution to industrial development",
            year: "2023",
            image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200"
        },
        {
            title: "Best Solar Technology 2024",
            description: "Awarded for innovative N-Type TopCon technology",
            year: "2024",
            image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200"
        }
    ];

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4 md:px-6">
                {/* Awards */}
                <div className="mb-16">
                    <div className="text-center mb-12 relative">
                        <div className="inline-block">
                            <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-amber-600 to-orange-600 mb-8 leading-tight">
                                Awards & Recognitions
                            </h1>
                            <div className="h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent w-32 sm:w-48 mx-auto" />
                        </div>
                    </div>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 1
                            },
                            768: {
                                slidesPerView: 2
                            },
                            1024: {
                                slidesPerView: 3
                            }
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {awards.map((award, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative group overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={award.image}
                                            alt={award.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 p-6 w-full">
                                        <span className="inline-block bg-primary text-white text-sm px-3 py-1 rounded-full mb-2">
                                            {award.year}
                                        </span>
                                        <h4 className="text-xl font-bold text-white mb-1">{award.title}</h4>
                                        <p className="text-gray-200">{award.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Compliance Statement */}
                {/* <div className="mt-20 bg-gray-50 rounded-xl p-8 md:p-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            Commitment to Quality & Compliance
                        </h3>
                        <p className="text-lg text-gray-600 mb-8">
                            Abundance Solar maintains rigorous quality control processes and complies with all international standards for solar panel manufacturing. Our products undergo extensive testing to ensure reliability, performance, and safety in diverse environmental conditions.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="bg-white rounded-lg p-4 flex items-center justify-center h-20 w-40">
                                <span className="text-sm font-medium text-gray-700">IEC Standards</span>
                            </div>
                            <div className="bg-white rounded-lg p-4 flex items-center justify-center h-20 w-40">
                                <span className="text-sm font-medium text-gray-700">ISO Certified</span>
                            </div>
                            <div className="bg-white rounded-lg p-4 flex items-center justify-center h-20 w-40">
                                <span className="text-sm font-medium text-gray-700">UL Listed</span>
                            </div>
                            <div className="bg-white rounded-lg p-4 flex items-center justify-center h-20 w-40">
                                <span className="text-sm font-medium text-gray-700">CE Marking</span>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default AwardsCertifications;