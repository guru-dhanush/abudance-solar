import { Button } from "./ui/button";
import { Card } from "./ui/card";

const NewsSection = ({
    title = "Latest News",
    description = "Stay updated with our latest developments, innovations, and industry news.",
    newsItems = [],
    viewAllButtonText = "View All News",
    primaryColor = "#1B2A4F",
    secondaryColor = "#DB8400",
    backgroundColor = "bg-gray-50"
}) => {
    return (
        <section className={`py-16 ${backgroundColor}`}>
            <div className="container mx-auto px-4">
                {/* Updated heading pattern to match HowItWorks */}
                <div className="text-center mb-20 relative">
                    <div className="inline-block">
                        <h1 className="text-3xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-amber-600 to-orange-600 mb-8 leading-tight">
                            {title}                        </h1>
                        <div className="h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent w-32 sm:w-48 mx-auto" />
                    </div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-10 leading-relaxed">
                        {description}
                    </p>
                </div>
                {newsItems.length > 0 ? (
                    <>
                        {/* Centered news cards with max-width constraint */}
                        <div className="flex justify-center">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
                                {newsItems.map((news, index) => (
                                    <Card key={index} className="overflow-hidden border-0 shadow-sm">
                                        <div className="h-48 overflow-hidden">
                                            <img
                                                src={news.image}
                                                alt={news.title}
                                                className="w-full h-full object-cover object-top"
                                                onError={(e) => {
                                                    e.target.src = 'https://via.placeholder.com/400x250?text=News+Image';
                                                }}
                                            />
                                        </div>
                                        <div className="p-6">
                                            <p className="text-sm mb-2" style={{ color: secondaryColor }}>{news.date}</p>
                                            <h3 className="text-xl font-semibold mb-3" style={{ color: primaryColor }}>{news.title}</h3>
                                            <p className="text-gray-600 mb-4">{news.excerpt}</p>
                                            <Button
                                                variant="link"
                                                className="p-0 !rounded-button whitespace-nowrap cursor-pointer"
                                                style={{ color: secondaryColor }}
                                            >
                                                Read More <i className="fas fa-arrow-right ml-2"></i>
                                            </Button>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <Button
                                className="px-6 py-2 !rounded-button whitespace-nowrap cursor-pointer text-white"
                                style={{ backgroundColor: primaryColor }}
                            >
                                {viewAllButtonText}
                            </Button>
                        </div>
                    </>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-gray-500">No news items available at the moment.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default NewsSection;