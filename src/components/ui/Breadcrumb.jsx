import React from 'react'

const Breadcrumb = ({ name }) => {
    return (
        <div className="bg-gray-50 pt-20">
            <div className="container mx-auto px-4 md:px-6 py-4">
                <div className="flex items-center text-sm text-gray-600">
                    <a href="https://readdy.ai/home/478205b1-512e-47f5-b295-f70968878c4c/f04a6b34-4a33-496c-944d-a26c087505e3" data-readdy="true" className="hover:text-blue-500 transition-colors duration-200">Home</a>
                    <i className="fas fa-chevron-right mx-2 text-xs text-gray-400"></i>
                    <span className="text-blue-600">{name}</span>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb