import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';

const ProductsPage = () => {
    const { category, productType } = useParams();
    const [activeTab, setActiveTab] = useState('overview');

    // This would come from your data or API
    const productCategories = {
        "n-type-topcon": {
            name: "N-type TOPCon",
            description: "30 Years Linear Performance warranty | Up to 23.5% Efficiency",
            products: {
                "bifacial": {
                    name: "Bifacial N-type PV Module",
                    types: [
                        {
                            id: "glass-glass-bifacial",
                            name: "Glass Glass Bifacial PV Module",
                            description: "Premium dual-glass bifacial modules with high efficiency",
                            models: [
                                { name: "ABS-144GGS-M10", type: "Glass/Glass-Silver Frame", wattage: "585-605W", efficiency: "22.65-23.42%" },
                                // Add all models
                            ],
                            features: [
                                "Dual Glass Design (30+ year lifespan)",
                                "Bifacial Output (5-30% extra energy)",
                                "N-type TOPCon Cells (>23.5% efficiency)"
                            ],
                            specs: {
                                "Dimensions": "xxxx x xxx x xx mm",
                                "Weight": "xx kg",
                                "Frame": "Anodized aluminum alloy",
                                // Add all specs
                            },
                            images: [
                                "/images/products/glass-glass-bifacial-1.jpg",
                                "/images/products/glass-glass-bifacial-2.jpg"
                            ],
                            datasheet: "/datasheets/glass-glass-bifacial.pdf"
                        },
                        // Add other bifacial types
                    ]
                },
                // Add monofacial and other categories
            }
        },
        // Add other categories (HJT, PERC)
    };

    // Get current product data based on URL params
    const currentCategory = productCategories[category];
    const currentProduct = productType
        ? currentCategory?.products.bifacial.types.find(p => p.id === productType)
        : null;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-6">
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="flex items-center space-x-4">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-gray-500">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <span className="text-gray-500 mx-2">/</span>
                            </li>
                            <li>
                                <Link to="/products" className="text-gray-400 hover:text-gray-500">
                                    Products
                                </Link>
                            </li>
                            {category && (
                                <>
                                    <li>
                                        <span className="text-gray-500 mx-2">/</span>
                                    </li>
                                    <li>
                                        <Link
                                            to={`/products/${category}`}
                                            className="text-gray-400 hover:text-gray-500 capitalize"
                                        >
                                            {currentCategory?.name}
                                        </Link>
                                    </li>
                                </>
                            )}
                            {productType && (
                                <>
                                    <li>
                                        <span className="text-gray-500 mx-2">/</span>
                                    </li>
                                    <li className="text-primary">
                                        {currentProduct?.name}
                                    </li>
                                </>
                            )}
                        </ol>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                {!category ? (
                    // Product category listing
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.values(productCategories).map((cat) => (
                            <motion.div
                                key={cat.name}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-xl shadow-md overflow-hidden"
                            >
                                <Link to={`/products/${cat.name.toLowerCase().replace(/\s+/g, '-')}`}>
                                    <div className="h-48 bg-gray-100 flex items-center justify-center">
                                        <img
                                            src={`/images/categories/${cat.name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                                            alt={cat.name}
                                            className="h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h2 className="text-xl font-bold mb-2">{cat.name}</h2>
                                        <p className="text-gray-600">{cat.description}</p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                ) : !productType ? (
                    // Product type listing within category
                    <div>
                        <h1 className="text-3xl font-bold mb-6">{currentCategory.name}</h1>
                        <p className="text-lg text-gray-600 mb-8">{currentCategory.description}</p>

                        {Object.values(currentCategory.products).map((product) => (
                            <div key={product.name} className="mb-12">
                                <h2 className="text-2xl font-semibold mb-6">{product.name}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {product.types.map((type) => (
                                        <motion.div
                                            key={type.id}
                                            whileHover={{ scale: 1.02 }}
                                            className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200"
                                        >
                                            <Link to={`/products/${category}/${type.id}`}>
                                                <div className="h-48 bg-gray-100 flex items-center justify-center">
                                                    <img
                                                        src={type.images?.[0] || "/images/solar-placeholder.jpg"}
                                                        alt={type.name}
                                                        className="h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-4">
                                                    <h3 className="font-semibold text-lg mb-2">{type.name}</h3>
                                                    <p className="text-gray-600 text-sm line-clamp-2">{type.description}</p>
                                                </div>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    // Individual product page
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="p-6 md:p-8">
                            <h1 className="text-3xl font-bold mb-2">{currentProduct.name}</h1>
                            <p className="text-lg text-gray-600 mb-6">{currentProduct.description}</p>

                            <div className="flex flex-wrap gap-4 mb-8">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-4 py-2 rounded-full ${activeTab === 'overview'
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-100 text-gray-800'
                                        }`}
                                    onClick={() => setActiveTab('overview')}
                                >
                                    Overview
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-4 py-2 rounded-full ${activeTab === 'specs'
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-100 text-gray-800'
                                        }`}
                                    onClick={() => setActiveTab('specs')}
                                >
                                    Specifications
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-4 py-2 rounded-full ${activeTab === 'models'
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-100 text-gray-800'
                                        }`}
                                    onClick={() => setActiveTab('models')}
                                >
                                    Models
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-4 py-2 rounded-full ${activeTab === 'gallery'
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-100 text-gray-800'
                                        }`}
                                    onClick={() => setActiveTab('gallery')}
                                >
                                    Gallery
                                </motion.button>
                            </div>

                            {activeTab === 'overview' && (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div>
                                        <div className="h-96 bg-gray-100 rounded-lg overflow-hidden mb-6">
                                            <img
                                                src={currentProduct.images?.[0] || "/images/solar-placeholder.jpg"}
                                                alt={currentProduct.name}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            {currentProduct.images?.slice(1, 5).map((img, index) => (
                                                <div key={index} className="h-32 bg-gray-100 rounded overflow-hidden">
                                                    <img
                                                        src={img}
                                                        alt={`${currentProduct.name} ${index + 2}`}
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                                        <ul className="space-y-3 mb-8">
                                            {currentProduct.features.map((feature, index) => (
                                                <li key={index} className="flex items-start">
                                                    <span className="text-primary mr-2">✓</span>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-4">
                                            <motion.a
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                href={currentProduct.datasheet}
                                                download
                                                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full flex items-center"
                                            >
                                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                </svg>
                                                Download Datasheet
                                            </motion.a>
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-full"
                                            >
                                                Request Quote
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'specs' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <table className="w-full">
                                                <tbody>
                                                    {Object.entries(currentProduct.specs || {}).map(([key, value]) => (
                                                        <tr key={key} className="border-b border-gray-200 last:border-0">
                                                            <td className="py-3 font-medium">{key}</td>
                                                            <td className="py-3 text-gray-600">{value}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-4">Performance Data</h3>
                                        <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center text-gray-400">
                                            Performance Chart Placeholder
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'models' && (
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Available Models</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white">
                                            <thead className="bg-gray-100">
                                                <tr>
                                                    <th className="py-3 px-4 text-left">Model Name</th>
                                                    <th className="py-3 px-4 text-left">Product Type</th>
                                                    <th className="py-3 px-4 text-left">Wattage Range (Wp)</th>
                                                    <th className="py-3 px-4 text-left">Efficiency (%)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {currentProduct.models.map((model, index) => (
                                                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                                                        <td className="py-3 px-4">{model.name}</td>
                                                        <td className="py-3 px-4">{model.type}</td>
                                                        <td className="py-3 px-4">{model.wattage}</td>
                                                        <td className="py-3 px-4">{model.efficiency}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'gallery' && (
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Product Gallery</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {currentProduct.images?.map((img, index) => (
                                            <motion.div
                                                key={index}
                                                whileHover={{ scale: 1.02 }}
                                                className="overflow-hidden rounded-lg"
                                            >
                                                <img
                                                    src={img}
                                                    alt={`${currentProduct.name} ${index + 1}`}
                                                    className="w-full h-48 object-cover"
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default ProductsPage;