import { BadgeDollarSignIcon, Bolt, GlassWater, Globe, Leaf, Lightbulb, Medal, Recycle, Users } from 'lucide-react';
import React, { useState } from 'react'

const TabNavigation = () => {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <><section className="bg-white border-b border-gray-200 sticky top-20 z-40">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex overflow-x-auto scrollbar-hide">
                    <button
                        onClick={() => setActiveTab('overview')}
                        className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition-colors duration-200 cursor-pointer !rounded-button ${activeTab === 'overview' ? 'border-primary text-primary' : 'border-transparent text-gray-600 hover:text-primary'}`}
                    >
                        Company Overview
                    </button>
                    <button
                        onClick={() => setActiveTab('mission')}
                        className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition-colors duration-200 cursor-pointer !rounded-button ${activeTab === 'mission' ? 'border-primary text-primary' : 'border-transparent text-gray-600 hover:text-primary'}`}
                    >
                        Mission & Vision
                    </button>
                    {/* <button
                        onClick={() => setActiveTab('leadership')}
                        className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition-colors duration-200 cursor-pointer !rounded-button ${activeTab === 'leadership' ? 'border-primary text-primary' : 'border-transparent text-gray-600 hover:text-primary'}`}
                    >
                        Leadership Team
                    </button> */}
                    <button
                        onClick={() => setActiveTab('facility')}
                        className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition-colors duration-200 cursor-pointer !rounded-button ${activeTab === 'facility' ? 'border-primary text-primary' : 'border-transparent text-gray-600 hover:text-primary'}`}
                    >
                        Manufacturing Facility
                    </button>
                    <button
                        onClick={() => setActiveTab('sustainability')}
                        className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition-colors duration-200 cursor-pointer !rounded-button ${activeTab === 'sustainability' ? 'border-primary text-primary' : 'border-transparent text-gray-600 hover:text-primary'}`}
                    >
                        Sustainability
                    </button>
                </div>
            </div>
        </section>

            {/* Company Overview Section */}
            {activeTab === 'overview' && (
                <section className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                    Pioneering Solar Manufacturing in the UAE
                                </h2>
                                <p className="text-lg text-gray-600 mb-6">
                                    Abundance Solar Panels Industries LLC is a pioneering solar panel manufacturing company based in Khalifa Economic Zones Abu Dhabi (KEZAD), UAE. The company is dedicated to supporting the global shift towards renewable energy by producing high-quality solar panels using advanced European technology.
                                </p>
                                <p className="text-lg text-gray-600 mb-6">
                                    With a strong focus on innovation and sustainability, Abundance Solar aims to make renewable energy accessible and affordable for businesses and communities worldwide. Our state-of-the-art facility represents a significant investment in the UAE's renewable energy sector and supports the nation's vision for a sustainable future.
                                </p>
                                <div className="grid grid-cols-2 gap-6 mt-8">
                                    <div className="bg-gray-50 rounded-lg p-6">
                                        <div className="text-primary mb-2">
                                            <i className="fas fa-industry text-3xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">State-of-the-Art Facility</h3>
                                        <p className="text-gray-600">
                                            27,000 sqm manufacturing plant with advanced European technology
                                        </p>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-6">
                                        <div className="text-primary mb-2">
                                            <i className="fas fa-solar-panel text-3xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Products</h3>
                                        <p className="text-gray-600">
                                            N-type Topcon photovoltaic modules with industry-leading efficiency
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="rounded-lg overflow-hidden shadow-xl">
                                    <img
                                        src="https://readdy.ai/api/search-image?query=Modern%2520solar%2520panel%2520manufacturing%2520facility%2520interior%2520with%2520high-tech%2520automated%2520production%2520lines%252C%2520clean%2520room%2520environment%252C%2520workers%2520in%2520protective%2520gear%252C%2520bright%2520industrial%2520lighting%252C%2520professional%2520corporate%2520photography%252C%2520high%2520resolution%2520commercial%2520imagery&width=700&height=500&seq=facility-interior&orientation=landscape"
                                        alt="Abundance Solar Manufacturing Facility"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <div className="rounded-lg overflow-hidden shadow-lg">
                                        <img
                                            src="https://readdy.ai/api/search-image?query=Close-up%2520of%2520solar%2520panel%2520manufacturing%2520process%252C%2520automated%2520assembly%2520of%2520solar%2520cells%252C%2520precision%2520machinery%252C%2520high-tech%2520industrial%2520environment%252C%2520blue%2520tinted%2520lighting%252C%2520professional%2520corporate%2520photography&width=350&height=250&seq=manufacturing1&orientation=landscape"
                                            alt="Solar Panel Manufacturing Process"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="rounded-lg overflow-hidden shadow-lg">
                                        <img
                                            src="https://readdy.ai/api/search-image?query=Quality%2520control%2520testing%2520of%2520solar%2520panels%252C%2520technician%2520inspecting%2520solar%2520module%252C%2520laboratory%2520environment%252C%2520measurement%2520equipment%252C%2520professional%2520corporate%2520photography%252C%2520clean%2520high-tech%2520setting&width=350&height=250&seq=manufacturing2&orientation=landscape"
                                            alt="Quality Control Testing"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            )}

            {/* Mission & Vision Section */}
            {activeTab === 'mission' && (
                <section className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        {/* Vision */}
                        <div className="relative rounded-2xl overflow-hidden mb-20">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70 z-10"></div>
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage: `url('https://readdy.ai/api/search-image?query=Futuristic%2520solar%2520energy%2520concept%2520with%2520solar%2520panels%2520against%2520dramatic%2520sky%2520at%2520sunset%252C%2520visionary%2520renewable%2520energy%2520landscape%252C%2520inspirational%2520wide%2520angle%2520view%252C%2520professional%2520photography%2520with%2520golden%2520light%252C%2520high%2520resolution%2520commercial%2520imagery&width=1200&height=500&seq=vision-bg&orientation=landscape')`
                                }}
                            ></div>
                            <div className="relative z-20 p-12 md:p-16 flex flex-col md:flex-row items-center">
                                <div className="md:w-1/3 mb-8 md:mb-0 md:mr-12">
                                    <div className="text-white text-6xl mb-4">
                                        <i className="fas fa-eye"></i>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Vision</h2>
                                </div>
                                <div className="md:w-2/3">
                                    <p className="text-xl text-white leading-relaxed">
                                        To become a global leader in solar panel manufacturing, driving the adoption of renewable energy and supporting the UAE's vision for a sustainable, energy-efficient future. Abundance Solar is committed to setting new industry standards through advanced technology and innovative practices, envisioning a world where solar energy powers a resilient and eco-friendly society.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Mission */}
                        <div className="relative rounded-2xl overflow-hidden mb-20">
                            <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-900/70 z-10"></div>
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage: `url('https://readdy.ai/api/search-image?query=Aerial%2520view%2520of%2520large%2520solar%2520farm%2520installation%2520in%2520desert%2520landscape%252C%2520rows%2520of%2520solar%2520panels%2520generating%2520clean%2520energy%252C%2520sustainable%2520development%2520concept%252C%2520professional%2520drone%2520photography%252C%2520high%2520resolution%2520commercial%2520imagery&width=1200&height=500&seq=mission-bg&orientation=landscape')`
                                }}
                            ></div>
                            <div className="relative z-20 p-12 md:p-16 flex flex-col md:flex-row items-center">
                                <div className="md:w-1/3 mb-8 md:mb-0 md:mr-12">
                                    <div className="text-white text-6xl mb-4">
                                        <i className="fas fa-bullseye"></i>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Mission</h2>
                                </div>
                                <div className="md:w-2/3">
                                    <p className="text-xl text-white leading-relaxed">
                                        Abundance Solar's mission is to lead the renewable energy transition by leveraging state-of-the-art European technology and fostering environmental stewardship. The company is dedicated to supporting the UAE's green agenda, reducing carbon emissions, and empowering businesses to adopt clean, energy-efficient solutions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Values */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="bg-gray-50 rounded-lg p-8 text-center">
                                    <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-secondary text-gray-100 mb-6">
                                        <Leaf />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainability</h3>
                                    <p className="text-gray-600">
                                        We are committed to environmental stewardship and promoting sustainable practices in everything we do.
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-8 text-center">
                                    <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-secondary text-gray-100 mb-6">
                                        <Lightbulb />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
                                    <p className="text-gray-600">
                                        We continuously pursue technological advancement and creative solutions to drive the renewable energy revolution.
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-8 text-center">
                                    <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-secondary text-gray-100 mb-6">
                                        <Medal />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
                                    <p className="text-gray-600">
                                        We are dedicated to the highest standards of quality, reliability, and performance in our products and services.
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-8 text-center">
                                    <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-secondary text-gray-100 mb-6">
                                        <Users />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Collaboration</h3>
                                    <p className="text-gray-600">
                                        We believe in the power of partnerships and working together to achieve common goals for a sustainable future.
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-8 text-center">
                                    <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-secondary text-gray-100 mb-6">
                                        <BadgeDollarSignIcon />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Integrity</h3>
                                    <p className="text-gray-600">
                                        We conduct business with honesty, transparency, and ethical practices that build trust with all stakeholders.
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-8 text-center">
                                    <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-secondary text-gray-100 mb-6">
                                        <Globe />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Impact</h3>
                                    <p className="text-gray-600">
                                        We strive to make a positive difference in communities worldwide through accessible clean energy solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Leadership Team Section */}
            {activeTab === 'leadership' && (
                <section className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Leadership Team</h2>
                            <p className="text-lg text-gray-600">
                                Meet the experienced professionals leading Abundance Solar's mission to revolutionize the renewable energy landscape with cutting-edge solar technology and sustainable practices.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* CEO */}
                            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                                <div className="h-80 overflow-hidden">
                                    <img
                                        src="https://readdy.ai/api/search-image?query=Professional%2520corporate%2520portrait%2520of%2520middle%2520eastern%2520male%2520CEO%2520in%2520business%2520suit%252C%2520confident%2520pose%252C%2520neutral%2520studio%2520background%252C%2520executive%2520headshot%252C%2520professional%2520lighting%252C%2520high%2520quality%2520commercial%2520photography&width=600&height=800&seq=ceo&orientation=portrait"
                                        alt="Ahmed Al Mansouri - CEO"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">Sudeep</h3>
                                    <p className="text-primary font-medium mb-4">Chief Executive Officer</p>
                                    <p className="text-gray-600 mb-4">
                                        With over 20 years of experience in renewable energy and manufacturing, Ahmed leads Abundance Solar's strategic vision and global expansion.
                                    </p>
                                    <div className="flex space-x-3">
                                        <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200 cursor-pointer">
                                            <i className="fab fa-linkedin text-lg"></i>
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200 cursor-pointer">
                                            <i className="fab fa-twitter text-lg"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Board of Advisors */}
                        <div className="mt-24">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Board of Advisors</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="bg-gray-50 rounded-lg p-6 flex items-center">
                                    <img
                                        src="https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520senior%2520male%2520executive%2520with%2520gray%2520hair%2520in%2520business%2520suit%252C%2520confident%2520expression%252C%2520neutral%2520background%252C%2520corporate%2520advisor%2520portrait%252C%2520high%2520quality%2520commercial%2520photography&width=100&height=100&seq=advisor1&orientation=squarish"
                                        alt="Dr. Thomas Weber"
                                        className="w-16 h-16 rounded-full object-cover mr-4"
                                    />
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900">Dr. Thomas Weber</h3>
                                        <p className="text-gray-600 text-sm">Former Energy Minister, Germany</p>
                                    </div>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6 flex items-center">
                                    <img
                                        src="https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520middle%2520eastern%2520senior%2520male%2520executive%2520in%2520traditional%2520business%2520attire%252C%2520confident%2520expression%252C%2520neutral%2520background%252C%2520corporate%2520advisor%2520portrait%252C%2520high%2520quality%2520commercial%2520photography&width=100&height=100&seq=advisor2&orientation=squarish"
                                        alt="Sheikh Mohammed Al Qasimi"
                                        className="w-16 h-16 rounded-full object-cover mr-4"
                                    />
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900">Sheikh Mohammed Al Qasimi</h3>
                                        <p className="text-gray-600 text-sm">UAE Energy Council</p>
                                    </div>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6 flex items-center">
                                    <img
                                        src="https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520female%2520executive%2520with%2520short%2520hair%2520in%2520business%2520attire%252C%2520confident%2520expression%252C%2520neutral%2520background%252C%2520renewable%2520energy%2520expert%2520portrait%252C%2520high%2520quality%2520commercial%2520photography&width=100&height=100&seq=advisor3&orientation=squarish"
                                        alt="Dr. Maria Rodriguez"
                                        className="w-16 h-16 rounded-full object-cover mr-4"
                                    />
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900">Dr. Maria Rodriguez</h3>
                                        <p className="text-gray-600 text-sm">Solar Research Institute</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Manufacturing Facility Section */}
            {activeTab === 'facility' && (
                <section className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        {/* Facility Overview */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                    State-of-the-Art Manufacturing Facility
                                </h2>
                                <p className="text-lg text-gray-600 mb-6">
                                    Located in KEZAD Area A – Al Ma'mourah, Abu Dhabi, UAE, our manufacturing plant represents a significant investment in the region's renewable energy sector. The facility spans 27,000 square meters and utilizes the latest innovations in solar panel technology.
                                </p>
                                <div className="bg-secondary rounded-lg p-6 mb-6">
                                    <h3 className="text-xl font-bold text-gray-100 mb-4">Facility Highlights</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                            <span className="text-gray-300">Advanced European manufacturing processes and technology</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                            <span className="text-gray-300">Annual production capacity of 500MW</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                            <span className="text-gray-300">Automated production lines for consistent quality and efficiency</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                            <span className="text-gray-300">Comprehensive quality control and testing laboratory</span>
                                        </li>
                                    </ul>
                                </div>
                                <button className="bg-primary hover:bg-primary text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap !rounded-button">
                                    Request Facility Tour
                                </button>
                            </div>
                            <div>
                                <div className="rounded-lg overflow-hidden shadow-xl">
                                    <img
                                        src="https://readdy.ai/api/search-image?query=Aerial%2520view%2520of%2520large%2520modern%2520industrial%2520facility%2520in%2520Abu%2520Dhabi%2520industrial%2520zone%252C%2520solar%2520panel%2520manufacturing%2520plant%2520with%2520surrounding%2520infrastructure%252C%2520professional%2520drone%2520photography%252C%2520clear%2520day%2520with%2520blue%2520sky%252C%2520high%2520resolution%2520commercial%2520imagery&width=700&height=500&seq=facility-aerial&orientation=landscape"
                                        alt="Abundance Solar Manufacturing Facility Aerial View"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <div className="rounded-lg overflow-hidden shadow-lg">
                                        <img
                                            src="https://readdy.ai/api/search-image?query=Modern%2520solar%2520panel%2520production%2520line%2520with%2520automated%2520machinery%252C%2520clean%2520room%2520environment%252C%2520high-tech%2520manufacturing%2520equipment%252C%2520professional%2520industrial%2520photography%252C%2520bright%2520lighting%252C%2520high%2520resolution%2520commercial%2520imagery&width=350&height=250&seq=production-line&orientation=landscape"
                                            alt="Automated Production Line"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="rounded-lg overflow-hidden shadow-lg">
                                        <img
                                            src="https://readdy.ai/api/search-image?query=Solar%2520panel%2520quality%2520control%2520testing%2520laboratory%252C%2520technicians%2520in%2520clean%2520room%2520gear%2520examining%2520panels%252C%2520measurement%2520equipment%252C%2520professional%2520industrial%2520photography%252C%2520bright%2520lighting%252C%2520high%2520resolution%2520commercial%2520imagery&width=350&height=250&seq=quality-lab&orientation=landscape"
                                            alt="Quality Control Laboratory"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Manufacturing Process */}
                        <div className="mb-20">
                            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Manufacturing Process</h2>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                <div className="bg-gray-50 rounded-lg p-6 text-center">
                                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-secondary text-gray-100 mb-4">
                                        <span className="text-2xl font-bold">1</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Silicon Wafer Production</h3>
                                    <p className="text-gray-600">
                                        High-purity N-type silicon wafers are produced as the foundation for our solar cells.
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6 text-center">
                                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-secondary text-gray-100 mb-4">
                                        <span className="text-2xl font-bold">2</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">TopCon Cell Manufacturing</h3>
                                    <p className="text-gray-600">
                                        Advanced TopCon technology is applied to create high-efficiency solar cells.
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6 text-center">
                                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-secondary text-gray-100 mb-4">
                                        <span className="text-2xl font-bold">3</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Module Assembly</h3>
                                    <p className="text-gray-600">
                                        Cells are assembled into modules with premium materials for durability and performance.
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6 text-center">
                                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-secondary text-gray-100 mb-4">
                                        <span className="text-2xl font-bold">4</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Testing & Certification</h3>
                                    <p className="text-gray-600">
                                        Rigorous quality control ensures every module meets our high standards.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Strategic Impact */}
                        <div className="bg-gray-50 rounded-xl p-8 md:p-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Strategic Impact</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Supporting UAE's Vision</h3>
                                    <p className="text-gray-600 mb-6">
                                        Our facility aligns with Abu Dhabi's and the UAE's strategic vision for innovation in sustainable economic development and the transition to renewable energy. It contributes significantly to the region's green agenda and supports the UAE's net-zero goals.
                                    </p>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Economic Impact</h3>
                                    <p className="text-gray-600">
                                        The manufacturing plant creates valuable job opportunities for local talent and stimulates economic growth in the region. It also enhances the UAE's position as a hub for renewable energy technology and innovation.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Energy Security</h3>
                                    <p className="text-gray-600 mb-6">
                                        By producing solar panels locally, we contribute to energy security and reduce dependence on imported energy technologies. This supports the UAE's goal of diversifying its energy sources and building resilience.
                                    </p>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Technology Transfer</h3>
                                    <p className="text-gray-600">
                                        Our facility facilitates the transfer of advanced European solar technology to the UAE, fostering innovation and developing local expertise in renewable energy manufacturing.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Sustainability Section */}
            {activeTab === 'sustainability' && (
                <section className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        {/* Sustainability Overview */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                    Our Commitment to Sustainability
                                </h2>
                                <p className="text-lg text-gray-600 mb-6">
                                    Abundance Solar is deeply committed to environmental stewardship, striving to reduce carbon emissions and foster green technologies. Our operations are designed to support the creation of energy-efficient ecosystems and promote responsible industrial development in line with the UAE's net-zero goals.
                                </p>
                                <div className="space-y-6 mb-8">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <i className="fas fa-leaf text-green-500 text-xl"></i>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-1">Environmental Responsibility</h3>
                                            <p className="text-gray-600">Our manufacturing processes are designed to minimize environmental impact, with efficient resource utilization and waste reduction strategies.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <i className="fas fa-recycle text-green-500 text-xl"></i>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-1">Circular Economy</h3>
                                            <p className="text-gray-600">We're developing recycling programs for end-of-life solar panels, supporting the transition to a circular economy in the renewable energy sector.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <i className="fas fa-hand-holding-heart text-green-500 text-xl"></i>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-1">Social Impact</h3>
                                            <p className="text-gray-600">Our sustainability initiatives extend beyond environmental concerns to include community development and education programs.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="rounded-lg overflow-hidden shadow-xl">
                                    <img
                                        src="https://readdy.ai/api/search-image?query=Sustainable%2520solar%2520manufacturing%2520facility%2520with%2520rooftop%2520solar%2520panels%252C%2520green%2520landscaping%252C%2520and%2520eco-friendly%2520design%2520elements%252C%2520professional%2520architectural%2520photography%252C%2520bright%2520daylight%252C%2520environmental%2520sustainability%2520concept%252C%2520high%2520resolution%2520commercial%2520imagery&width=700&height=500&seq=sustainable-facility&orientation=landscape"
                                        alt="Sustainable Manufacturing Facility"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div className="grid grid-cols-3 gap-4 mt-4">
                                    <div className="bg-green-50 rounded-lg p-4 text-center">
                                        <div className="text-green-600 text-3xl mb-2">
                                            <i className="fas fa-solar-panel"></i>
                                        </div>
                                        <div className="text-2xl font-bold text-gray-900">30%</div>
                                        <p className="text-gray-600 text-sm">Energy from On-site Solar</p>
                                    </div>
                                    <div className="bg-green-50 rounded-lg p-4 text-center">
                                        <div className="text-green-600 text-3xl mb-2">
                                            <i className="fas fa-tint"></i>
                                        </div>
                                        <div className="text-2xl font-bold text-gray-900">40%</div>
                                        <p className="text-gray-600 text-sm">Water Recycling</p>
                                    </div>
                                    <div className="bg-green-50 rounded-lg p-4 text-center">
                                        <div className="text-green-600 text-3xl mb-2">
                                            <i className="fas fa-trash-alt"></i>
                                        </div>
                                        <div className="text-2xl font-bold text-gray-900">85%</div>
                                        <p className="text-gray-600 text-sm">Waste Diversion</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Environmental Initiatives */}
                        <div className="mb-20">
                            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Environmental Initiatives</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="bg-white rounded-lg shadow-md p-8">
                                    <div className="text-green-500 text-4xl mb-4">
                                        <i className="fas fa-sun"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">On-site Renewable Energy</h3>
                                    <p className="text-gray-600 mb-4">
                                        Our facility features a 2MW rooftop solar installation that provides approximately 30% of our energy needs, reducing our carbon footprint.
                                    </p>
                                    <ul className="text-gray-600 space-y-2">
                                        <li className="flex items-start">
                                            <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                            <span>2MW rooftop solar system</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                            <span>30% energy self-sufficiency</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                            <span>Annual CO₂ reduction of 1,500 tons</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-lg shadow-md p-8">
                                    <div className="text-green-500 text-4xl mb-4">
                                        <i className="fas fa-tint"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Water Conservation</h3>
                                    <p className="text-gray-600 mb-4">
                                        Our advanced water management system recycles and reuses process water, significantly reducing our freshwater consumption.
                                    </p>
                                    <ul className="text-gray-600 space-y-2">
                                        <li className="flex items-start">
                                            <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                            <span>Closed-loop water recycling system</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                            <span>40% reduction in water usage</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                            <span>Rainwater harvesting capabilities</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-lg shadow-md p-8">
                                    <div className="text-green-500 text-4xl mb-4">
                                        <i className="fas fa-recycle"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Waste Reduction</h3>
                                    <p className="text-gray-600 mb-4">
                                        We've implemented comprehensive waste management protocols to minimize landfill waste and maximize recycling.
                                    </p>
                                    <ul className="text-gray-600 space-y-2">
                                        <li className="flex items-start">
                                            <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                            <span>85% waste diversion rate</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                            <span>Silicon waste recycling program</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                            <span>Zero hazardous waste to landfill</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* CSR Initiatives */}
                        <div className="mb-20">
                            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Corporate Social Responsibility</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-gray-50 rounded-lg p-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Community Engagement</h3>
                                    <p className="text-gray-600 mb-6">
                                        We actively engage with local communities through various initiatives:
                                    </p>
                                    <ul className="text-gray-600 space-y-4">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 mt-1">
                                                <i className="fas fa-graduation-cap text-primary mr-3"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Educational Programs</h4>
                                                <p>Partnering with local schools and universities to provide renewable energy education and training.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 mt-1">
                                                <i className="fas fa-hands-helping text-primary mr-3"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Community Solar Projects</h4>
                                                <p>Donating solar systems to community facilities and supporting local renewable energy initiatives.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 mt-1">
                                                <i className="fas fa-users text-primary mr-3"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Local Employment</h4>
                                                <p>Creating job opportunities and providing skills development for local residents.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Global Sustainability Partnerships</h3>
                                    <p className="text-gray-600 mb-6">
                                        We collaborate with international organizations to advance sustainable development:
                                    </p>
                                    <ul className="text-gray-600 space-y-4">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 mt-1">
                                                <i className="fas fa-globe text-primary mr-3"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">UN Global Compact</h4>
                                                <p>Committed to aligning operations with universal principles on human rights, labor, environment, and anti-corruption.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 mt-1">
                                                <i className="fas fa-sun text-primary mr-3"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">International Solar Alliance</h4>
                                                <p>Supporting global initiatives to promote solar energy adoption in developing countries.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 mt-1">
                                                <i className="fas fa-leaf text-primary mr-3"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Climate Pledge</h4>
                                                <p>Committed to achieving net-zero carbon emissions by 2040, ten years ahead of the Paris Agreement.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Sustainability Goals */}
                        <div className="bg-green-50 rounded-xl p-8 md:p-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Sustainability Goals</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="bg-white rounded-lg p-6 text-center">
                                    <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-green-100 text-green-600 mb-6">
                                        <Bolt />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Carbon Neutrality</h3>
                                    <p className="text-gray-600">
                                        Achieve carbon-neutral operations by 2030 through renewable energy adoption and carbon offset programs.
                                    </p>
                                </div>

                                <div className="bg-white rounded-lg p-6 text-center">
                                    <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-green-100 text-green-600 mb-6">
                                        <GlassWater />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Water Stewardship</h3>
                                    <p className="text-gray-600">
                                        Reduce water consumption by 60% by 2035 through advanced recycling and conservation technologies.
                                    </p>
                                </div>

                                <div className="bg-white rounded-lg p-6 text-center">
                                    <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-green-100 text-green-600 mb-6">
                                        <Recycle />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Zero Waste</h3>
                                    <p className="text-gray-600">
                                        Achieve zero waste to landfill by 2028 through comprehensive recycling and waste reduction initiatives.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>


    )
}

export default TabNavigation