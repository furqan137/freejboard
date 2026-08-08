import React from "react";
import "./Blog.css";  // Ensure the file path is correct

const Blog = () => {
  return (
    <div className="page-container">
      <h1 className="title">Blog</h1>
      <p className="intro">Stay updated with the latest news, trends, and insights from our team. Read our blog posts below:</p>
      
      <section className="blog-posts">
        <ul>
          <li><a href="#">The Future of Remote Work</a></li>
          <li><a href="#">Top 10 Tips for Freelancers</a></li>
          <li><a href="#">How to Build a Winning Portfolio</a></li>
          <li><a href="#">Our Journey: From Startup to Success</a></li>
        </ul>
      </section>
      
      <footer className="footer">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Blog;
