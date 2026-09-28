import React from 'react';
import { GraduationCap, ArrowUp } from 'lucide-react';
import './Footer.css';

/**
 * Footer Component
 * Displays institutional copyright, student developer metadata,
 * and quick back-to-top navigation.
 * All dynamic text passed via Props.
 */
const Footer = ({ 
  developer, 
  academicStanding, 
  assignmentTitle, 
  department, 
  year 
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="portal-footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand-column">
            <div className="footer-brand">
              <div className="footer-logo">
                <GraduationCap size={22} />
              </div>
              <span className="footer-brand-title">EduPortal</span>
            </div>
            <p className="footer-desc">
              Comprehensive student information system showcasing Props architecture,
              reusable component hierarchy, and multi-field CGPA sorting.
            </p>
          </div>

          <div className="footer-meta-column">
            <h4 className="footer-meta-heading">Academic Assignment Details</h4>
            <ul className="footer-meta-list">
              <li>
                <span className="meta-key">Project:</span>
                <span className="meta-val">{assignmentTitle}</span>
              </li>
              <li>
                <span className="meta-key">Developer:</span>
                <span className="meta-val highlight-val">{developer} ({academicStanding})</span>
              </li>
              <li>
                <span className="meta-key">Department:</span>
                <span className="meta-val">{department}</span>
              </li>
              <li>
                <span className="meta-key">Core Paradigm:</span>
                <span className="meta-val">Props Passing & Component Reusability</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {year} <strong>EduPortal</strong>. Developed by <strong>{developer}</strong> for React Academic Assignment 2.
          </p>

          <button 
            type="button" 
            className="footer-scroll-top-btn" 
            onClick={scrollToTop}
            title="Scroll to top of page"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
