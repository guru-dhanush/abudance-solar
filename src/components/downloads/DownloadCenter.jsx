// src/components/downloads/DownloadCenter.jsx
import React from 'react';

const DownloadCenter = () => {
    const downloadCategories = [
        {
            id: 'datasheets',
            name: 'Datasheets',
            files: [
                { name: 'Glass/Glass Bifacial Datasheet', url: '/downloads/datasheets/glass-glass.pdf' },
                { name: 'Glass/Glass All Black Datasheet', url: '/downloads/datasheets/glass-glass-black.pdf' },
                { name: 'Glass/Transparent Backsheet Datasheet', url: '/downloads/datasheets/glass-transparent.pdf' },
                { name: 'Glass/White Backsheet Datasheet', url: '/downloads/datasheets/glass-white.pdf' },
                { name: 'Glass/Black Backsheet Datasheet', url: '/downloads/datasheets/glass-black.pdf' }
            ]
        },
        {
            id: 'warranty',
            name: 'Warranty Documents',
            files: [
                { name: 'Limited and Linear Warranty', url: '/downloads/warranty/warranty.pdf' },
                { name: 'Warranty Claim Form', url: '/downloads/warranty/claim-form.pdf' }
            ]
        },
        {
            id: 'installation',
            name: 'Installation Manuals',
            files: [
                { name: 'Solar PV Modules Installation Manual', url: '/downloads/installation/manual.pdf' },
                { name: 'Mounting Instructions', url: '/downloads/installation/mounting.pdf' },
                { name: 'Safety Precautions', url: '/downloads/installation/safety.pdf' }
            ]
        }
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-primary mb-8">Download Center</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {downloadCategories.map(category => (
                    <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                        <div className="bg-secondary p-4">
                            <h2 className="text-xl font-semibold text-white">{category.name}</h2>
                        </div>
                        <div className="p-6">
                            <ul className="space-y-3">
                                {category.files.map((file, index) => (
                                    <li key={index}>
                                        <a
                                            href={file.url}
                                            download
                                            className="flex items-center text-primary hover:text-secondary transition-colors"
                                        >
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                                            </svg>
                                            {file.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DownloadCenter;