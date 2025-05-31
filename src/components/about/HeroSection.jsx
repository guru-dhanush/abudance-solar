import React from 'react';

const HeroSection = ({ page }) => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0  z-10"></div>

            {/* image background - now full screen */}
            <div className="absolute inset-0 w-screen h-screen z-0">
                <img className="absolute inset-0 w-screen h-screen z-0" src='https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb' />
            </div>

            {/* Content */}
            {
                page === "about" && <div className="container mx-auto px-4 md:px-6 relative z-20 h-full flex items-center  backdrop-blur-md">
                    <div className="min-h-[00px] flex items-center p-10 rounded-xl">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                About Abundance Solar
                            </h1>
                            <p className="text-xl text-white/90 mb-8">
                                Pioneering solar manufacturing excellence in the UAE, driving the global transition to sustainable energy with cutting-edge technology and innovation.
                            </p>
                            <div className="flex flex-wrap gap-6 mt-8">
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                                    <div className="text-3xl font-bold text-white">27,000 m²</div>
                                    <div className="text-white/80">Facility Size</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                                    <div className="text-3xl font-bold text-white">KEZAD</div>
                                    <div className="text-white/80">Abu Dhabi, UAE</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </section>
    );
};

export default HeroSection;