import React from 'react';
import TestimonialsSwiper from '../components/TestimonialsSwiper';
import Header from '../components/Header';
import NewsSection from '../components/NewsSection';
import Footer from '../components/Footer';
import AwardsCertifications from '../components/AwardsCertifications';
import HeroSection from '../components/home/HeroSection';
import VideoSection from '../components/about/videoSection';
import { newsItems } from '../core/constants/constant'
import HowItWorks from '../components/home/howWorks';
import ProductShowcase from '../components/home/ProductShowcase';

const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <HeroSection />
                <VideoSection />
                <HowItWorks />
                <AwardsCertifications />
                <TestimonialsSwiper />
                <ProductShowcase />
                <NewsSection newsItems={newsItems} />
            </main>

            <Footer />
        </div>
    );
};

export default Home;
