// src/pages/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { model } = useParams();

    // In a real app, you would fetch this data based on the model parameter
    const productData = {
        name: model,
        description: `High-efficiency ${model.includes('Bifacial') ? 'bifacial' : 'monofacial'} solar module with N-Type TopCon technology`,
        specifications: {
            power: '450-720Wp',
            efficiency: '22.2%-23.4%',
            dimensions: 'Varies by model',
            weight: 'Approx. 25-30kg'
        }
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-primary mb-6">{productData.name}</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    {/* Product image placeholder - replace with actual images */}
                    <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center mb-6">
                        <span className="text-gray-400">Product Image</span>
                    </div>

                    <h2 className="text-xl font-semibold text-secondary mb-4">Description</h2>
                    <p className="text-gray-700 mb-6">{productData.description}</p>

                    <div className="flex space-x-4 mb-8">
                        <a
                            href="/downloads/datasheets/sample.pdf"
                            download
                            className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary-dark transition-colors"
                        >
                            Download Datasheet
                        </a>
                        <a
                            href="/downloads/installation/manual.pdf"
                            download
                            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
                        >
                            Installation Manual
                        </a>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-secondary mb-4">Technical Specifications</h2>
                    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                        <ul className="space-y-3">
                            {Object.entries(productData.specifications).map(([key, value]) => (
                                <li key={key} className="flex justify-between border-b border-gray-100 pb-2">
                                    <span className="font-medium text-gray-700">{key}:</span>
                                    <span className="text-gray-900">{value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <h2 className="text-xl font-semibold text-secondary mt-8 mb-4">Key Features</h2>
                    <ul className="space-y-2 list-disc pl-5 text-gray-700">
                        <li>N-Type TOPCon cell technology for higher efficiency</li>
                        <li>Lower degradation rate (0.4% annually)</li>
                        <li>30-year linear power output warranty</li>
                        <li>12-year product warranty</li>
                        <li>Excellent performance in high-temperature environments</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;