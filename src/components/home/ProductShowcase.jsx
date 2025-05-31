import React, { useState, useEffect } from 'react';

const ProductShowcase = () => {
    const [activeSeries, setActiveSeries] = useState("N-type TOPCon");
    const [currentProductIndex, setCurrentProductIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [hoveredVariant, setHoveredVariant] = useState(null);

    const productSeries = {
        "N-type TOPCon": {
            description: "High-efficiency N-type TOPCon technology with 30-year linear performance warranty",
            color: "#DB840A",
            gradient: "from-amber-600 to-orange-600",
            lightGradient: "from-amber-50 to-orange-50",
            products: [
                {
                    name: "ABS-144GGS-M10",
                    type: "Glass/Glass Bifacial",
                    wattage: "585-605W",
                    efficiency: "22.65-23.42%",
                    image: "https://silfabsolar.com/wp-content/uploads/2021/08/Panels_Commercial.png",
                    variants: [
                        { name: "ABS-144GGS-M10", wattage: "585W", efficiency: "22.65%" },
                        { name: "ABS-144GGS-M10+", wattage: "595W", efficiency: "23.10%" },
                        { name: "ABS-144GGS-M10 Pro", wattage: "605W", efficiency: "23.42%" }
                    ],
                    features: [
                        "Dual Glass Design (30+ year lifespan)",
                        "Bifacial Output (5-30% extra energy)",
                        "N-type TOPCon Cells (>23.5% efficiency)",
                        "Excellent temperature performance"
                    ],
                    applications: ["Residential rooftops", "Commercial installations", "Utility-scale projects"]
                },
                {
                    name: "ABS-132GGS-M10",
                    type: "Glass/Glass All Black",
                    wattage: "535-555W",
                    efficiency: "22.58-23.43%",
                    image: "https://silfabsolar.com/wp-content/uploads/2021/08/Panels_Commercial.png",
                    variants: [
                        { name: "ABS-132GGS-M10", wattage: "535W", efficiency: "22.58%" },
                        { name: "ABS-132GGS-M10+", wattage: "545W", efficiency: "23.00%" },
                        { name: "ABS-132GGS-M10 Pro", wattage: "555W", efficiency: "23.43%" }
                    ],
                    features: [
                        "Sleek all-black aesthetic",
                        "Dual Glass Protection",
                        "High efficiency in low light",
                        "Perfect for residential rooftops"
                    ],
                    applications: ["Residential rooftops", "Architectural projects"]
                },
            ]
        },
        "HJT": {
            description: "Coming soon - Next-generation Heterojunction Technology",
            color: "#1B2A4F",
            gradient: "from-slate-700 to-slate-800",
            lightGradient: "from-slate-50 to-gray-50",
            comingSoon: true
        },
        "PERC": {
            description: "Coming soon - Proven PERC technology with enhanced performance",
            color: "#DB840A",
            gradient: "from-amber-600 to-orange-600",
            lightGradient: "from-amber-50 to-orange-50",
            comingSoon: true
        }
    };

    const currentProduct = productSeries[activeSeries]?.products?.[currentProductIndex];

    const handleSeriesChange = async (series) => {
        if (series === activeSeries) return;
        setIsAnimating(true);
        await new Promise(resolve => setTimeout(resolve, 300));
        setActiveSeries(series);
        setCurrentProductIndex(0);
        await new Promise(resolve => setTimeout(resolve, 100));
        setIsAnimating(false);
    };

    const handleProductChange = async (direction) => {
        if (isAnimating) return;
        setIsAnimating(true);
        await new Promise(resolve => setTimeout(resolve, 200));

        if (direction === 'next') {
            setCurrentProductIndex((prev) => (prev + 1) % productSeries[activeSeries].products.length);
        } else {
            setCurrentProductIndex((prev) => (prev - 1 + productSeries[activeSeries].products.length) % productSeries[activeSeries].products.length);
        }

        await new Promise(resolve => setTimeout(resolve, 100));
        setIsAnimating(false);
    };

    const PerformanceChart = ({ efficiency, wattage }) => (
        <div className="relative h-20 sm:h-24 w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="absolute inset-0 px-2">
                <div className="flex justify-between items-end h-full">
                    <div className="flex-1 space-y-1 sm:space-y-2">
                        <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">Efficiency</div>
                        <div className="h-6 sm:h-8 bg-gradient-to-t from-amber-500 to-orange-400 rounded-lg relative overflow-hidden transition-all duration-1000"
                            style={{ width: `${parseFloat(efficiency) * 4}%` }}>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-30"></div>
                        </div>
                        <div className="text-sm sm:text-base font-bold text-gray-800">{efficiency}</div>
                    </div>
                    <div className="flex-1 space-y-1 sm:space-y-2 ml-4">
                        <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">Power</div>
                        <div className="h-6 sm:h-8 bg-gradient-to-t from-slate-600 to-slate-500 rounded-lg relative overflow-hidden transition-all duration-1000"
                            style={{ width: `${parseInt(wattage) / 10}%` }}>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-30"></div>
                        </div>
                        <div className="text-sm sm:text-base font-bold text-gray-800">{wattage}</div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section className="relative min-h-screen bg-white overflow-hidden">
            {/* Dynamic Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${productSeries[activeSeries].lightGradient} opacity-5 transition-all duration-1000`} />

            <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-12">
                {/* Compact Header */}
                <div className="text-center mb-12 relative">
                    <div className="inline-block">
                        <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-amber-600 to-orange-600 mb-8 leading-tight">
                            Solar Innovation
                        </h1>
                        <div className="h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent w-32 sm:w-48 mx-auto" />
                    </div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
                        Engineering tomorrow's energy solutions with cutting-edge photovoltaic technology
                    </p>
                </div>
                {/* Compact Series Navigation */}
                <div className="flex justify-center mb-8 sm:mb-12">
                    <div className="bg-white border border-gray-200 rounded-2xl p-2">
                        <div className="flex flex-wrap justify-center gap-2">
                            {Object.entries(productSeries).map(([series, data]) => (
                                <button
                                    key={series}
                                    onClick={() => handleSeriesChange(series)}
                                    className={`relative px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-500 ${activeSeries === series
                                        ? `bg-gradient-to-r ${data.gradient} text-white`
                                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                                        }`}
                                >
                                    <span className="relative z-10">{series}</span>
                                    {data.comingSoon && (
                                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                {!productSeries[activeSeries].comingSoon ? (
                    <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
                        {/* Product Display */}
                        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start mb-12 sm:mb-16">
                            {/* Left: Product Visualization */}
                            <div className="space-y-4 sm:space-y-6">
                                <div className="relative group">
                                    <div className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden">
                                        <div className="aspect-[4/3] relative overflow-hidden">
                                            <img
                                                src={currentProduct?.image}
                                                alt={currentProduct?.name}
                                                className="w-full h-full  transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                                        </div>
                                        <div className="p-4 sm:p-6">
                                            <PerformanceChart
                                                efficiency={currentProduct?.efficiency?.split('-')[1] || "23%"}
                                                wattage={currentProduct?.wattage?.split('-')[1] || "600W"}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Navigation */}
                                {productSeries[activeSeries].products?.length > 1 && (
                                    <div className="flex justify-center space-x-4">
                                        <button
                                            onClick={() => handleProductChange('prev')}
                                            className="group w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-gray-200 hover:border-amber-300 transition-all duration-300 flex items-center justify-center hover:bg-amber-50"
                                        >
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-amber-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => handleProductChange('next')}
                                            className="group w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-gray-200 hover:border-amber-300 transition-all duration-300 flex items-center justify-center hover:bg-amber-50"
                                        >
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-amber-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Right: Product Information */}
                            <div className="space-y-6 sm:space-y-8">
                                <div>
                                    <div className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 border border-amber-200">
                                        {currentProduct?.type}
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-800 mb-2 sm:mb-3 leading-tight">
                                        {currentProduct?.name}
                                    </h2>
                                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                        {productSeries[activeSeries].description}
                                    </p>
                                </div>

                                {/* Variants */}
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Available Configurations</h3>
                                    <div className="space-y-2 sm:space-y-3">
                                        {currentProduct?.variants.map((variant, index) => (
                                            <div
                                                key={index}
                                                onMouseEnter={() => setHoveredVariant(index)}
                                                onMouseLeave={() => setHoveredVariant(null)}
                                                className={`p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${hoveredVariant === index
                                                    ? 'border-amber-300 bg-gradient-to-r from-amber-50 to-orange-50 transform scale-105'
                                                    : 'border-gray-200 bg-white hover:border-gray-300'
                                                    }`}
                                            >
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <div className="font-bold text-gray-800 text-sm sm:text-base">{variant.name}</div>
                                                        <div className="text-xs sm:text-sm text-gray-600 mt-1">Efficiency: {variant.efficiency}</div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="text-xl sm:text-2xl font-black text-amber-600">{variant.wattage}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Applications */}
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Applications</h3>
                                    <div className="flex flex-wrap gap-2 sm:gap-3">
                                        {currentProduct?.applications.map((app, index) => (
                                            <span
                                                key={index}
                                                className="px-3 sm:px-4 py-2  text-secondary bg-primary/20 rounded-full text-xs sm:text-sm font-semibold hover:from-slate-600 hover:to-slate-700 transition-all duration-300 transform hover:scale-105"
                                            >
                                                {app}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-12 sm:py-16">
                        <div className="inline-block p-8 sm:p-12 bg-white border border-gray-200 rounded-2xl">
                            <p className="text-gray-600 mb-6 sm:mb-8 max-w-md text-sm sm:text-base leading-relaxed">
                                {productSeries[activeSeries].description}
                            </p>
                        </div>
                    </div>
                )}

                {/* Bottom CTA */}
                <div className="text-center mt-12 sm:mt-16">
                    <button className="group relative px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white font-black text-sm sm:text-base md:text-lg rounded-2xl transition-all duration-500 transform hover:scale-105 hover:from-slate-700 hover:to-slate-800">
                        <span className="relative z-10 flex items-center">
                            view all products
                            <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;