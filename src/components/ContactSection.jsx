import React from 'react'

const ContactSection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#1B2A4F] mb-4">Get in Touch</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">Have questions about our products or services? Our team is here to help.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-gray-50 p-8 rounded-lg">
                        <h3 className="text-2xl font-semibold text-[#1B2A4F] mb-6">Contact Us</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DB840A] focus:border-transparent"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DB840A] focus:border-transparent"
                                        placeholder="Your Email"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                                <input
                                    type="text"
                                    id="company"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DB840A] focus:border-transparent"
                                    placeholder="Your Company"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DB840A] focus:border-transparent"
                                    placeholder="Subject"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DB840A] focus:border-transparent"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            <Button className="bg-[#DB840A] hover:bg-[#c47609] text-white px-6 py-2 w-full !rounded-button whitespace-nowrap cursor-pointer">
                                Send Message
                            </Button>
                        </form>
                    </div>

                    <div>
                        <div className="bg-[#1B2A4F] text-white p-8 rounded-lg mb-8">
                            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-[#DB840A] flex items-center justify-center mr-4 flex-shrink-0">
                                        <MapPin />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Address</h4>
                                        <p className="text-gray-300">KEZAD Industrial Zone, Abu Dhabi, United Arab Emirates</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-[#DB840A] flex items-center justify-center mr-4 flex-shrink-0">
                                        <Phone />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Phone</h4>
                                        <p className="text-gray-300">+971 2 123 4567</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-[#DB840A] flex items-center justify-center mr-4 flex-shrink-0">
                                        <Mail />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Email</h4>
                                        <p className="text-gray-300">info@abundancesolar.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="h-[300px] rounded-lg overflow-hidden">
                            <img
                                src="https://readdy.ai/api/search-image?query=A%20satellite%20or%20aerial%20view%20of%20an%20industrial%20zone%20in%20Abu%20Dhabi%2C%20showing%20a%20modern%20manufacturing%20facility%20complex%20with%20solar%20panels%20visible%20on%20rooftops.%20The%20image%20shows%20the%20surrounding%20area%20with%20roads%2C%20other%20industrial%20buildings%2C%20and%20possibly%20water%20nearby%2C%20representing%20the%20KEZAD%20industrial%20zone&width=600&height=300&seq=15&orientation=landscape"
                                alt="KEZAD Location"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection