import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ImageRotator from "../components/ImageRotator";
import { PERSONAL_INFO } from "../constants";
import "./home.css";
import "./blogdetail.css";

function BlogDetail({ blogId, navigateToHome, navigateToBlogs, navigateToProjects, navigateToProject }) {
  const blog = PERSONAL_INFO.BLOGS[parseInt(blogId, 10)];

  // Scroll to top when component mounts or blogId changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [blogId]);

  // Function to render content based on type
  const renderContent = (contentItem, index) => {
    switch (contentItem.type) {
      case 'paragraph':
        return (
          <p key={index} className="blogdetail-paragraph">
            {contentItem.content}
          </p>
        );
      
      case 'heading':
        const HeadingTag = `h${contentItem.level}`;
        return (
          <HeadingTag key={index} className={`blogdetail-heading blogdetail-heading-${contentItem.level}`}>
            {contentItem.content}
          </HeadingTag>
        );
      
      case 'list':
        return (
          <div key={index} className="blogdetail-list-container">
            {contentItem.listType === 'bullet' ? (
              <ul className="blogdetail-list">
                {contentItem.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="blogdetail-list-item">{item}</li>
                ))}
              </ul>
            ) : (
              <ol className="blogdetail-list">
                {contentItem.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="blogdetail-list-item">{item}</li>
                ))}
              </ol>
            )}
          </div>
        );
      
      case 'code':
        return (
          <div key={index} className="blogdetail-code-container">
            <div className="blogdetail-code-header">
              <span className="blogdetail-code-language">{contentItem.language}</span>
              <button className="blogdetail-copy-btn" onClick={() => navigator.clipboard.writeText(contentItem.content)}>
                Copy
              </button>
            </div>
            <pre className="blogdetail-code">
              <code>{contentItem.content}</code>
            </pre>
          </div>
        );
      
      case 'image':
        // images property should always be an array
        const imageSources = contentItem.images || [];
        
        return (
          <div key={index} className="blogdetail-content-image-container"> 
              <ImageRotator 
                images={imageSources} 
                alt={contentItem.alt || 'Blog content image'} 
                interval={contentItem.interval || 3000}
                showNavigator={contentItem.showNavigator !== false}
                className="blogdetail-image-rotator-16-9"
              />
            {contentItem.caption && (
              <p className="blogdetail-image-caption">{contentItem.caption}</p>
            )}
          </div>
        );
      
      case 'table':
        return (
          <div key={index} className="blogdetail-table-container">
            <table className="blogdetail-table">
              <thead>
                <tr>
                  {contentItem.headers.map((header, headerIndex) => (
                    <th key={headerIndex} className="blogdetail-table-header">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {contentItem.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="blogdetail-table-cell">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      
      default:
        return null;
    }
  };

  if (!blog) {
    return (
      <div className="blogdetail-container">
        <Navbar />
        <section className="blogdetail-section">
          <div className="container">
            <div className="blogdetail-not-found">
              <div className="blogdetail-not-found-content">
                <div className="blogdetail-not-found-icon">📝</div>
                <h2 className="blogdetail-not-found-title">Blog Not Found</h2>
                <p className="blogdetail-not-found-description">The blog you're looking for doesn't exist or has been moved.</p>
                <button onClick={navigateToBlogs} className="blogdetail-back-btn">
                  <span className="blogdetail-back-icon">←</span>
                  <span className="back-text">Back to Blogs</span>
                </button>
              </div>
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

  return (
    <div className="blogdetail-container">
      <Navbar />
      
      {/* Hero Section */}
      <section className="blogdetail-hero">
        <div className="container">
          <button onClick={navigateToBlogs} className="blogdetail-back-btn">
            <span className="blogdetail-back-icon">←</span>
            <span className="back-text">Back to Blogs</span>
          </button>
          
          <div className="blogdetail-hero-content">
            <h1 className="blogdetail-title">{blog.title}</h1>
            
            {/* Tags moved here from content section */}
            <div className="blogdetail-hero-tags">
              <div className="blogdetail-tags-container">
                {blog.tags.map((tag, index) => (
                  <span key={index} className="blogdetail-tag">
                    <span className="blogdetail-tag-hash">#</span>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="blogdetail-featured-image">
        <div className="container">
          <div className="blogdetail-image-container">
            <ImageRotator 
              images={blog.images || []} 
              alt={blog.title} 
              interval={4000}
              showNavigator={blog.images && blog.images.length > 1}
              className="blogdetail-image-rotator-16-9"
            />
            <div className="blogdetail-image-overlay"></div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="blogdetail-content-section">
        <div className="container">
          <div className="blogdetail-content-wrapper">
            <div className="blogdetail-content-main">
              {/* Blog Content */}
              <div className="blogdetail-content">
                <div className="blogdetail-content-body">
                  {blog.content.map((contentItem, index) => renderContent(contentItem, index))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="blogdetail-sidebar">
              {/* Article Info Block with Author and Key Takeaways */}
              <div className="blogdetail-article-info blogdetail-floating-sidebar">
                <h3 className="blogdetail-article-info-title">Article Info</h3>
                
                <div className="blogdetail-author-section">
                  <div className="blogdetail-author-avatar">
                    {PERSONAL_INFO.profileImage ? (
                      <img 
                        src={PERSONAL_INFO.profileImage} 
                        alt={PERSONAL_INFO.name}
                        className="blogdetail-author-image"
                      />
                    ) : (
                      <div className="blogdetail-author-initials">
                        {PERSONAL_INFO.name.split(' ').map(name => name.charAt(0)).join('')}
                      </div>
                    )}
                  </div>
                  <div className="blogdetail-author-details">
                    <h4 className="blogdetail-author-name">{PERSONAL_INFO.name}</h4>
                    <p className="blogdetail-author-title">{PERSONAL_INFO.title[0]}</p>
                  </div>
                </div>
                
                <div className="blogdetail-article-meta">
                  <div className="blogdetail-meta-item">
                    <span className="blogdetail-meta-label">Published</span>
                    <span className="blogdetail-meta-value">{blog.publishDate}</span>
                  </div>
                  <div className="blogdetail-meta-item">
                    <span className="blogdetail-meta-label">Read Time</span>
                    <span className="blogdetail-meta-value">{blog.readTime}</span>
                  </div>
                  <div className="blogdetail-meta-item">
                    <span className="blogdetail-meta-label">Category</span>
                    <span className="blogdetail-meta-value">{blog.category}</span>
                  </div>
                </div>

                {/* Key Takeaways as Paragraph */}
                <div className="blogdetail-key-takeaways">
                  <p className="blogdetail-takeaways-text">{blog.summary}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="blogdetail-navigation-section">
        <div className="container">
          <div className="blogdetail-navigation">
            <button onClick={navigateToBlogs} className="blogdetail-nav-btn blogdetail-nav-btn--primary">
              <span className="blogdetail-nav-icon">←</span>
              <span className="blogdetail-nav-text">All Blogs</span>
            </button>
            <button onClick={navigateToHome} className="blogdetail-nav-btn blogdetail-nav-btn--secondary">
              <span className="blogdetail-nav-text">Home</span>
              <span className="blogdetail-nav-icon">→</span>
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

export default BlogDetail;
