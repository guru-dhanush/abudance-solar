import React, { useEffect, useState, useRef } from 'react';

const TestimonialsSwiper = ({
    testimonials = [],
    autoPlayDelay = 5000,
    showPagination = true,
    showNavigation = false
}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const intervalRef = useRef(null);

    const defaultTestimonials = [
        {
            name: "Fathima A.",
            position: "Project Lead - GreenGrid UAE",
            quote: "World-class quality at scale",
            description: "Abundance Solar provided exactly what we needed for our industrial solar deployment.",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150"
        },
        {
            name: "Ravi K",
            position: "Sustainability Officer - NoorTech",
            quote: "Fast, transparent, and professional",
            description: "From datasheets to delivery, every step was seamless.",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150"
        },
        {
            name: "Sophia Turner",
            position: "Ops Manager - BrightFuture Solar",
            quote: "High-efficiency panels made a huge impact",
            description: "We upgraded our setup and saw performance jump instantly",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150"
        },
        {
            name: "Ahmed Hassan",
            position: "Technical Director - SolarMax",
            quote: "Exceptional performance in extreme conditions",
            description: "These panels consistently deliver even in our harsh desert climate.",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150"
        }
    ];

    const slides = testimonials.length > 0 ? testimonials : defaultTestimonials;

    // Check if mobile on mount and resize
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    // Auto-play functionality
    useEffect(() => {
        if (isPlaying) {
            intervalRef.current = setInterval(() => {
                setCurrentSlide(prev => (prev + 1) % slides.length);
            }, autoPlayDelay);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isPlaying, autoPlayDelay, slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
        // Reset autoplay when manually changing slides
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % slides.length);
        }, autoPlayDelay);
    };

    // Get visible slides based on screen size
    const getVisibleSlides = () => {
        if (isMobile) {
            // Mobile - show only current slide
            return [slides[currentSlide]];
        } else {
            // Desktop - show current slide and next 2 (or wrap around)
            const visible = [];
            for (let i = 0; i < Math.min(3, slides.length); i++) {
                visible.push(slides[(currentSlide + i) % slides.length]);
            }
            return visible;
        }
    };

    const visibleSlides = getVisibleSlides();

    return (
        <section className="sm:py-10 py-20  bg-gray-50">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-12 relative">
                    <div className="inline-block">
                        <h1 className="text-3xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-amber-600 to-orange-600 mb-8 leading-tight">
                            Customer Satisfaction is Our Priority
                        </h1>
                        <div className="h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent w-32 sm:w-48 mx-auto" />
                    </div>

                </div>

                {/* Testimonials Container */}
                <div className="relative mb-12">
                    {/* Testimonials - Stack vertically on mobile, horizontal on desktop */}
                    <div className={`flex ${isMobile ? 'flex-col space-y-8' : 'flex-row space-x-8'}`}>
                        {visibleSlides.map((testimonial, index) => (
                            <div
                                key={`${currentSlide}-${index}`}
                                className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 ${isMobile ? 'w-full' : 'w-full md:w-1/3 flex-shrink-0'}`}
                            >
                                {/* Quote Icon */}
                                <div className="mb-6">
                                    <svg className="w-12 h-12 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                                    </svg>
                                </div>

                                {/* Quote Title */}
                                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                                    {testimonial.quote}
                                </h3>

                                {/* Quote Description */}
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    {testimonial.description}
                                </p>

                                {/* Author Info */}
                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=f97316&color=fff&size=48`;
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 text-sm">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-gray-500 text-sm">
                                            {testimonial.position}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    {showNavigation && (
                        <>
                            <button
                                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
                                onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
                            >
                                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
                                onClick={() => goToSlide((currentSlide + 1) % slides.length)}
                            >
                                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </>
                    )}
                </div>

                {/* Pagination Dots */}
                {showPagination && (
                    <div className="flex justify-center space-x-3">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                    ? 'bg-gray-800'
                                    : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default TestimonialsSwiper;