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
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold" style={{ color: primaryColor }}>{title}</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">{description}</p>
                </div>

                {newsItems.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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


export default NewsSection