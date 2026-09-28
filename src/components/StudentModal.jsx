import React, { useEffect } from 'react';
import { 
  X, 
  Building, 
  Calendar, 
  Hash, 
  Mail, 
  Phone, 
  Star, 
  BookOpen, 
  CheckCircle,
  GraduationCap
} from 'lucide-react';
import './StudentModal.css';

/**
 * StudentModal Component
 * Interactive modal that displays the full academic record of a student.
 * Receives all data via Props.
 */
const StudentModal = ({ student, onClose }) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!student) return null;

  const {
    name,
    rollNumber,
    department,
    semester,
    cgpa,
    email,
    phone,
    badge,
    attendance,
    bio,
    skills = [],
    enrolledCourses = []
  } = student;

  // Generate avatar initials
  const getInitials = (fullName) => {
    return fullName
      .split(' ')
      .map((part) => part[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  // Department-themed avatar gradients
  const getAvatarGradient = (dept) => {
    if (dept.includes('BCA')) return 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)';
    if (dept.includes('Computer Science')) return 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)';
    if (dept.includes('Information Technology')) return 'linear-gradient(135deg, #06b6d4 0%, #10b981 100%)';
    if (dept.includes('Artificial Intelligence')) return 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)';
    return 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)';
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container card-glass" onClick={(e) => e.stopPropagation()}>
        {/* Modal Close Button */}
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close student record modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="modal-header">
          <div 
            className="modal-avatar-box"
            style={{ background: getAvatarGradient(department) }}
            title={`${name} (${department})`}
          >
            <span className="modal-avatar-initials">{getInitials(name)}</span>
            <span className="modal-status-badge">Active</span>
          </div>

          <div className="modal-title-info">
            <div className="modal-badge-row">
              {badge && <span className="modal-honor-tag">{badge}</span>}
              <span className="modal-roll-tag">
                <Hash size={12} />
                {rollNumber}
              </span>
            </div>

            <h2 className="modal-student-name">{name}</h2>

            <div className="modal-meta-row">
              <span className="modal-meta-item">
                <Building size={14} className="meta-icon" />
                {department}
              </span>
              <span className="modal-meta-item">
                <Calendar size={14} className="meta-icon" />
                {semester}
              </span>
            </div>
          </div>

          {/* Large CGPA Gauge */}
          <div className="modal-cgpa-gauge">
            <span className="gauge-label">Cumulative GPA</span>
            <div className="gauge-score">
              <span className="gauge-num">{cgpa.toFixed(2)}</span>
              <span className="gauge-scale">/ 10</span>
            </div>
            <div className="gauge-stars">
              <Star size={14} fill="#fbbf24" stroke="#fbbf24" />
              <Star size={14} fill="#fbbf24" stroke="#fbbf24" />
              <Star size={14} fill="#fbbf24" stroke="#fbbf24" />
              <Star size={14} fill="#fbbf24" stroke="#fbbf24" />
              <Star size={14} fill={cgpa >= 9.0 ? '#fbbf24' : 'none'} stroke="#fbbf24" />
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Bio */}
          {bio && (
            <div className="modal-section">
              <h4 className="modal-section-title">Academic Biography</h4>
              <p className="modal-bio-text">{bio}</p>
            </div>
          )}

          {/* Quick Metrics */}
          <div className="modal-metrics-grid">
            <div className="metric-box">
              <span className="metric-box-label">Academic Attendance</span>
              <span className="metric-box-val text-emerald">{attendance || '94%'}</span>
            </div>
            <div className="metric-box">
              <span className="metric-box-label">Current Standing</span>
              <span className="metric-box-val text-indigo">
                {cgpa >= 9.0 ? 'First Class with Distinction' : 'First Class'}
              </span>
            </div>
            <div className="metric-box">
              <span className="metric-box-label">Total Credits Earned</span>
              <span className="metric-box-val text-cyan">148 / 160</span>
            </div>
          </div>

          {/* Two-Column: Enrolled Courses & Skills */}
          <div className="modal-columns-grid">
            {/* Courses */}
            <div className="modal-col">
              <h4 className="modal-section-title">
                <BookOpen size={16} />
                <span>Enrolled Semester Courses</span>
              </h4>
              <ul className="courses-list">
                {enrolledCourses.map((course, idx) => (
                  <li key={idx} className="course-item">
                    <CheckCircle size={14} className="course-check" />
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills & Contact */}
            <div className="modal-col">
              <h4 className="modal-section-title">
                <GraduationCap size={16} />
                <span>Technical Proficiencies</span>
              </h4>
              <div className="modal-skills-cloud">
                {skills.map((skill, idx) => (
                  <span key={idx} className="modal-skill-pill">
                    {skill}
                  </span>
                ))}
              </div>

              <h4 className="modal-section-title mt-4">
                <span>Contact Channels</span>
              </h4>
              <div className="modal-contact-links">
                <a href={`mailto:${email}`} className="modal-contact-item">
                  <Mail size={14} />
                  <span>{email}</span>
                </a>
                <a href={`tel:${phone}`} className="modal-contact-item">
                  <Phone size={14} />
                  <span>{phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Close Record
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentModal;
