import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ImageRotator from "../components/ImageRotator";
import { PERSONAL_INFO } from "../constants";
import "./home.css";
import "./blogslist.css";

function BlogsList({ navigateToHome, navigateToBlog, navigateToBlogs, navigateToProjects, navigateToProject }) {
  // Scroll to top when component mounts (coming from different page)
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="blogs-list-container">
      <Navbar />
      <section className="blogs-list-section" id="blogs-list">
        <div className="container">
          {/* Back Button */}
          <button onClick={navigateToHome} className="blogslist-back-btn">
            <span className="blogslist-back-icon">←</span>
            <span className="back-text">Back</span>
          </button>
          
          <div className="blogs-list-header">
            <h2 className="section-title">Intresting Blogs</h2>
            <p className="section-description">
              Explore my thoughts on technology, development, and industry insights
            </p>
          </div>
          
          <div className="blogs-list-grid">
            {PERSONAL_INFO.BLOGS.map((blog, index) => (
              <div key={index} className="blog-card">
                <div className="blog-image-container">
                  <ImageRotator 
                    images={blog.images || []} 
                    alt={blog.title} 
                    interval={4000} // Slower rotation for blog cards
                    showNavigator={blog.images && blog.images.length > 1}
                  />
                  <div className="blog-category">{blog.category}</div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date">{blog.publishDate}</span>
                    <span className="blog-read-time">{blog.readTime}</span>
                  </div>
                  <h3 className="blog-title">{blog.title}</h3>
                  <p className="blog-summary">{blog.summary}</p>
                  <div className="blog-footer">
                    <div className="blog-tags">
                      {blog.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="blog-tag">{tag}</span>
                      ))}
                    </div>
                    <button 
                      onClick={() => navigateToBlog(index)} 
                      className="blog-read-more-btn"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Go To Top Button - After the list */}
          <div className="go-to-top-section">
            <button onClick={scrollToTop} className="go-to-top-btn">
              <span className="go-to-top-icon">↑</span>
              <span className="go-to-top-text">Go To Top</span>
            </button>
          </div>
        </div>
      </section>
      <Footer 
        navigateToProjects={navigateToProjects} 
        navigateToProject={navigateToProject} 
        navigateToHome={navigateToHome}
        navigateToBlogs={navigateToBlogs}
      />
    </div>
  );
}

export default BlogsList;
