import React from 'react';
import videoPath from '../../assets/videos/homepage.mp4';

const VideoSection = () => {
    return (
        <div className="mx-4 my-6 md:m-10">
            {/* Heading Section - Above the Video */}
            <div className="text-center mb-12 relative">
                <div className="inline-block">
                    <h1 className="text-5xl md:text-6xl  font-bold text-gray-800 mb-3">
                        Powering the Future with <span className="text-3xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-amber-600 to-orange-600 mb-8 leading-tight">Solar Energy</span>
                    </h1>
                    <div className="h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent w-32 sm:w-48 mx-auto" />
                </div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
                    High-efficiency solar panels engineered for sustainable living by Abundance Solar
                </p>
            </div>
            {/* Video Section */}
            <section className="rounded-3xl overflow-hidden">
                <video
                    className="w-full h-full object-cover rounded-3xl scale-125"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src={videoPath}
                    style={{
                        transformOrigin: 'center center'
                    }}
                />
            </section>
        </div>
    );
};

export default VideoSection;