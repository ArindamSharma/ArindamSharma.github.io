import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
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
        return (
          <div key={index} className="blogdetail-content-image-container">
            <img 
              src={contentItem.src} 
              alt={contentItem.alt || 'Blog content image'} 
              className="blogdetail-content-image"
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
            <div className="blogdetail-meta">
              <span className="blogdetail-category">{blog.category}</span>
              <span className="blogdetail-separator">•</span>
              <span className="blogdetail-date">{blog.publishDate}</span>
              <span className="blogdetail-separator">•</span>
              <span className="blogdetail-read-time">{blog.readTime}</span>
            </div>
            <h1 className="blogdetail-title">{blog.title}</h1>
            <div className="blogdetail-author-info">
              <div className="blogdetail-author-avatar">
                <span className="blogdetail-author-initial">{blog.author.charAt(0)}</span>
              </div>
              <div className="blogdetail-author-details">
                <span className="blogdetail-author-name">{blog.author}</span>
                <span className="blogdetail-author-role">Software Engineer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="blogdetail-featured-image">
        <div className="container">
          <div className="blogdetail-image-container">
            <img src={blog.image} alt={blog.title} className="blogdetail-image" />
            <div className="blogdetail-image-overlay"></div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="blogdetail-content-section">
        <div className="container">
          <div className="blogdetail-content-wrapper">
            <div className="blogdetail-content-main">
              {/* Summary */}
              <div className="blogdetail-summary-card">
                <div className="blogdetail-summary-icon">💡</div>
                <div className="blogdetail-summary-content">
                  <h3 className="blogdetail-summary-title">Key Takeaway</h3>
                  <p className="blogdetail-summary-text">{blog.summary}</p>
                </div>
              </div>

              {/* Article Info with Author */}
              <div className="blogdetail-article-info">
                <div className="blogdetail-article-meta">
                  <div className="blogdetail-article-author">
                    <div className="blogdetail-article-author-avatar">
                      <span className="blogdetail-article-author-initial">{blog.author.charAt(0)}</span>
                    </div>
                    <div className="blogdetail-article-author-details">
                      <span className="blogdetail-article-author-name">{blog.author}</span>
                      <span className="blogdetail-article-author-title">Software Engineer</span>
                    </div>
                  </div>
                  <div className="blogdetail-article-details">
                    <div className="blogdetail-article-detail">
                      <span className="blogdetail-article-detail-label">Published</span>
                      <span className="blogdetail-article-detail-value">{blog.publishDate}</span>
                    </div>
                    <div className="blogdetail-article-detail">
                      <span className="blogdetail-article-detail-label">Read Time</span>
                      <span className="blogdetail-article-detail-value">{blog.readTime}</span>
                    </div>
                    <div className="blogdetail-article-detail">
                      <span className="blogdetail-article-detail-label">Category</span>
                      <span className="blogdetail-article-detail-value">{blog.category}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags Section - Moved here */}
              <div className="blogdetail-tags-section">
                <h3 className="blogdetail-tags-title">Related Topics</h3>
                <div className="blogdetail-tags-container">
                  {blog.tags.map((tag, index) => (
                    <span key={index} className="blogdetail-tag">
                      <span className="blogdetail-tag-hash">#</span>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Blog Content */}
              <div className="blogdetail-content">
                <div className="blogdetail-content-body">
                  {blog.content.map((contentItem, index) => renderContent(contentItem, index))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="blogdetail-sidebar">
              <div className="blogdetail-sidebar-card">
                <h4 className="blogdetail-sidebar-title">Quick Navigation</h4>
                <div className="blogdetail-sidebar-toc">
                  {blog.content
                    .filter(item => item.type === 'heading')
                    .map((heading, index) => (
                      <div key={index} className={`blogdetail-toc-item blogdetail-toc-${heading.level}`}>
                        {heading.content}
                      </div>
                    ))}
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
