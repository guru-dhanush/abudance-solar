import React from 'react'

const HeroSection = () => {
    return (
        < section className="relative overflow-hidden" >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent z-10"></div>
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://readdy.ai/api/search-image?query=Aerial%2520view%2520of%2520large%2520modern%2520solar%2520panel%2520manufacturing%2520facility%2520in%2520Abu%2520Dhabi%2520with%2520desert%2520landscape%2520and%2520modern%2520buildings%2520in%2520background%252C%2520professional%2520corporate%2520photography%252C%2520golden%2520hour%2520lighting%252C%2520clean%2520industrial%2520architecture%252C%2520high%2520resolution%2520commercial%2520imagery&width=1440&height=600&seq=about-hero&orientation=landscape')`
                }}
            ></div>
            <div className="container mx-auto px-4 md:px-6 relative z-20">
                <div className="min-h-[400px] flex items-center py-16 md:py-24">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            About Abundance Solar
                        </h1>
                        <p className="text-xl text-white/90 mb-8">
                            Pioneering solar manufacturing excellence in the UAE, driving the global transition to sustainable energy with cutting-edge technology and innovation.
                        </p>
                        <div className="flex flex-wrap gap-6 mt-8">
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                                <div className="text-3xl font-bold text-white">AED 55M</div>
                                <div className="text-white/80">Investment</div>
                            </div>
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
        </section >
    )
}

export default HeroSection