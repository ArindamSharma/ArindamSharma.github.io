import React from "react";
import "./hire.css";
import { PERSONAL_INFO } from "../../constants";

function HireSection() {
  return (
    <section className="hire-section section" id="contact">
      <div className="container">
        <h2 className="section-title">Let's Work Together</h2>
        <p className="hire-subtitle">
          Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing people.
        </p>
        
        <div className="contact-grid">
          <div className="contact-item">
            <div className="contact-icon">
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <div className="contact-info">
              <h3 className="contact-title">Email</h3>
              <p className="contact-description">Drop me a line anytime</p>
              <a href={`mailto:${PERSONAL_INFO.CONTACT_INFO.email}`} className="contact-value">
                {PERSONAL_INFO.CONTACT_INFO.email}
              </a>
            </div>
          </div>
          
          {/* <div className="contact-item">
            <div className="contact-icon">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <div className="contact-info">
              <h3 className="contact-title">Phone</h3>
              <p className="contact-description">Call for urgent matters</p>
              <a href={`tel:${PERSONAL_INFO.CONTACT_INFO.phone}`} className="contact-value">
                {PERSONAL_INFO.CONTACT_INFO.phone}
              </a>
            </div>
          </div> */}
          
          <div className="contact-item">
            <div className="contact-icon">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div className="contact-info">
              <h3 className="contact-title">Location</h3>
              <p className="contact-description">Available for remote work</p>
              <span className="contact-value">{PERSONAL_INFO.CONTACT_INFO.location}</span>
            </div>
          </div>
        </div>
        
        <div className="hire-cta">
          {/* <a href={`mailto:${PERSONAL_INFO.CONTACT_INFO.email}`} className="hire-section-btn">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Let's Talk
          </a> */}
          
          <div className="social-connect">
            <span className="connect-text">Or connect with me on</span>
            <div className="social-buttons">
              {PERSONAL_INFO.SOCIAL_LINKS.map((social, index) => (
                <a key={index} href={social.link} className="social-btn" target="_blank" rel="noopener noreferrer">
                  <img 
                    src={social.icon} 
                    alt={social.name} 
                    style={{width: '20px', height: '20px', filter: 'invert(1)'}}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>        
      </div>
    </section>
  );
}

export default HireSection;
