
import HeroSection from '@/components/about/HeroSection';
import TabNavigation from '@/components/about/TabNavigation';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import PartnerSvg from '../assets/svg/test.svg'

const AboutPage = () => {

    return (
        <div className="min-h-screen bg-white font-sans">
            <Header />
            <HeroSection />
            <TabNavigation />
            <section className='h-full w-full flex justify-center align-center my-20'>
                <img src={PartnerSvg} />
            </section>
            <Footer />
        </div>
    );
}

export default AboutPage;
