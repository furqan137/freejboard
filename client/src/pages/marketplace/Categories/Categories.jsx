import React from "react";
import { Link } from "react-router-dom";
import './Categories.css';

// Categories data with paths for .png images
const categories = [
    { name: "Web Development", path: "/web-development", image: "src/assets/category-images/web-development.png" },
    { name: "Graphic Design", path: "/graphic-design", image: "src/assets/category-images/graphic-design.png" },
    { name: "Digital Marketing", path: "/digital-marketing", image: "src/assets/category-images/digital-marketing.png" },
    { name: "Content Writing", path: "/content-writing", image: "src/assets/category-images/content-writing.png" },
    { name: "Video & Animation", path: "/video-animation", image: "src/assets/category-images/video-animation.png" },
    { name: "Music & Audio", path: "/music-audio", image: "src/assets/category-images/music-audio.png" },
    { name: "Programming & Tech", path: "/programming-tech", image: "src/assets/category-images/programming-tech.png" },
    { name: "Business Consulting", path: "/business-consulting", image: "src/assets/category-images/business-consulting.png" },
    { name: "Lifestyle Coaching", path: "/lifestyle-coaching", image: "src/assets/category-images/lifestyle-coaching.png" },
    { name: "Social Media Management", path: "/social-media-management", image: "src/assets/category-images/social-media-management.png" },
    { name: "SEO Services", path: "/seo-services", image: "src/assets/category-images/seo-services.png" },
    { name: "App Development", path: "/app-development", image: "src/assets/category-images/app-development.png" },
    { name: "Photography", path: "/photography", image: "src/assets/category-images/photography.png" },
    { name: "Translation Services", path: "/translation-services", image: "src/assets/category-images/translation-services.png" },
    { name: "Data Analysis", path: "/data-analysis", image: "src/assets/category-images/data-analysis.png" },
    { name: "Virtual Assistance", path: "/virtual-assistance", image: "src/assets/category-images/virtual-assistance.png" },
];

const CategoryPage = () => {
    return (
        <div className="category-page">
            <h2>Explore Categories</h2>
            <div className="category-grid">
                {categories.map((category, index) => (
                    <Link
                        key={index}
                        to={category.path}
                        className="category-card"
                        style={{ backgroundImage: `url(${category.image})` }}
                    >
                        <div className="category-overlay">
                            <h3>{category.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;
