import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import './FreelancerServices.css';

const FreelancerServices = () => {
    const categories = [
        { name: "Web Development", path: "/web-development" },
        { name: "Graphic Design", path: "/graphic-design" },
        { name: "Digital Marketing", path: "/digital-marketing" },
        { name: "Content Writing", path: "/content-writing" },
        { name: "Video & Animation", path: "/video-animation" },
        { name: "Music & Audio", path: "/music-audio" },
        { name: "Programming & Tech", path: "/programming-tech" },
        { name: "Business Consulting", path: "/business-consulting" },
        { name: "Lifestyle Coaching", path: "/lifestyle-coaching" },
        { name: "Social Media Management", path: "/social-media-management" },
        { name: "SEO Services", path: "/seo-services" },
        { name: "App Development", path: "/app-development" },
        { name: "Photography", path: "/photography" },
        { name: "Translation Services", path: "/translation-services" },
        { name: "Data Analysis", path: "/data-analysis" },
        { name: "Virtual Assistance", path: "/virtual-assistance" },
    ];

    const marketplaceServices = [
        { id: 1, name: "Web Development", description: "Build modern websites and applications", image: "web-development.png", price: "$100", rating: 4.5 },
        { id: 2, name: "Graphic Design", description: "Design logos, branding, and more", image: "graphic-design.png", price: "$50", rating: 4.7 },
        { id: 3, name: "Digital Marketing", description: "Promote brands through digital channels", image: "digital-marketing.png", price: "$200", rating: 4.8 },
        { id: 4, name: "Content Writing", description: "Write engaging articles and copy", image: "content-writing.png", price: "$40", rating: 4.6 },
        { id: 5, name: "Video & Animation", description: "Create promotional videos and animations", image: "video-animation.png", price: "$150", rating: 4.9 },
        { id: 6, name: "Music & Audio", description: "Produce audio, jingles, and voiceovers", image: "music-audio.png", price: "$75", rating: 4.3 },
        { id: 7, name: "Programming & Tech", description: "Develop software and tech solutions", image: "programming-tech.png", price: "$300", rating: 4.8 },
        { id: 8, name: "Business Consulting", description: "Provide expert business advice", image: "business-consulting.png", price: "$250", rating: 4.6 },
        { id: 9, name: "Lifestyle Coaching", description: "Help clients improve their lifestyle", image: "lifestyle-coaching.png", price: "$100", rating: 4.7 },
        { id: 10, name: "Social Media Management", description: "Manage and grow social media profiles", image: "social-media-management.png", price: "$80", rating: 4.5 },
        { id: 11, name: "SEO Services", description: "Optimize websites for search engines", image: "seo-services.png", price: "$120", rating: 4.8 },
        { id: 12, name: "App Development", description: "Develop mobile applications for iOS and Android", image: "app-development.png", price: "$400", rating: 5.0 },
        { id: 13, name: "Photography", description: "Capture professional photos and images", image: "photography.png", price: "$200", rating: 4.7 },
        { id: 14, name: "Translation Services", description: "Translate content into multiple languages", image: "translation-services.png", price: "$30", rating: 4.6 },
        { id: 15, name: "Data Analysis", description: "Analyze data to uncover insights", image: "data-analysis.png", price: "$150", rating: 4.9 },
        { id: 16, name: "Virtual Assistance", description: "Provide remote administrative support", image: "virtual-assistance.png", price: "$60", rating: 4.4 },
    ];

    return (
        <div className="freelancer-services">
            <h2>Freelancer Services</h2>
            
            {/* Categories Section */}
            <div className="categories-list">
                {categories.map((category, index) => (
                    <div key={index} className="category-item">
                        <Link to={category.path}>{category.name}</Link> 
                    </div>
                ))}
            </div>
            
            {/* Marketplace Services Section */}
            <h2>Marketplace Services</h2>
            <div className="marketplace-services">
                {marketplaceServices.map(service => (
                    <div className="service-card" key={service.id}>
                        <img
                            src={`src/assets/category-images/${service.image}`} // Updated image source
                            alt={service.name}
                            className="service-image"
                        />
                        <div className="service-info">
                            <h3>{service.name}</h3>
                            <p>{service.description}</p>
                            <div className="service-details">
                                <span className="service-price">Starting at: {service.price}</span>
                                <span className="service-rating">Rating: {service.rating}⭐</span>
                            </div>
                            <a href={`/view`} className="service-details-link">View Details</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FreelancerServices;
