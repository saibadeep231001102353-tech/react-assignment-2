import React from 'react';
import { 
  Building, 
  Calendar, 
  Hash, 
  ExternalLink, 
  Star, 
  CheckCircle,
  Award
} from 'lucide-react';
import './StudentCard.css';

/**
 * StudentCard Component
 * Displays individual student information strictly via Props:
 * - Name
 * - Roll Number
 * - Department
 * - Semester
 * - CGPA
 * - Stylized Monogram Academic Avatar
 * Plus interactive tags and details trigger.
 */
const StudentCard = ({ student, onSelect }) => {
  const {
    id,
    name,
    rollNumber,
    department,
    semester,
    cgpa,
    badge,
    badgeType = 'indigo',
    skills = [],
    attendance
  } = student;

  // Determine CGPA rating tier for dynamic styling
  const getCgpaTheme = (score) => {
    if (score >= 9.5) return 'cgpa-outstanding';
    if (score >= 9.0) return 'cgpa-excellent';
    if (score >= 8.0) return 'cgpa-very-good';
    return 'cgpa-good';
  };

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
    <article className="student-card card-glass" id={`student-card-${id}`}>
      {/* Top Banner & CGPA Badge Ribbon */}
      <div className="card-header">
        {/* Student Academic Monogram Avatar (No Picture) */}
        <div 
          className="student-avatar-box" 
          style={{ background: getAvatarGradient(department) }}
          title={`${name} (${department})`}
        >
          <span className="avatar-initials">{getInitials(name)}</span>
          <span className="online-status-dot" title="Active Enrollment"></span>
        </div>

        {/* CGPA Display Pill - Key Requirement */}
        <div className={`cgpa-pill ${getCgpaTheme(cgpa)}`} title={`Cumulative GPA: ${cgpa} / 10.0`}>
          <div className="cgpa-score-group">
            <span className="cgpa-label">CGPA</span>
            <span className="cgpa-value">{cgpa.toFixed(1)}</span>
          </div>
          <Star size={13} className="cgpa-star-icon" />
        </div>
      </div>

      {/* Main Student Credentials */}
      <div className="card-body">
        {/* Name and Academic Honor Badge */}
        <div className="student-title-row">
          <h3 className="student-name" title={name}>
            {name}
          </h3>
          {badge && (
            <span className={`honor-badge badge-${badgeType}`}>
              <Award size={12} />
              <span>{badge}</span>
            </span>
          )}
        </div>

        {/* Roll Number - Key Requirement */}
        <div className="meta-pill-row">
          <span className="roll-number-pill" title="University Roll Number">
            <Hash size={13} className="meta-icon" />
            <span>{rollNumber}</span>
          </span>

          {attendance && (
            <span className="attendance-pill" title="Academic Attendance">
              <CheckCircle size={13} className="meta-icon" />
              <span>{attendance} Attd.</span>
            </span>
          )}
        </div>

        {/* Department - Key Requirement */}
        <div className="info-detail-row" title={`Department: ${department}`}>
          <Building size={16} className="detail-icon" />
          <span className="detail-text">{department}</span>
        </div>

        {/* Semester - Key Requirement */}
        <div className="info-detail-row" title={`Academic Semester: ${semester}`}>
          <Calendar size={16} className="detail-icon" />
          <span className="detail-text">{semester}</span>
        </div>

        {/* Skills Chips */}
        {skills.length > 0 && (
          <div className="student-skills-list">
            {skills.slice(0, 3).map((skill, idx) => (
              <span key={idx} className="student-skill-chip">
                {skill}
              </span>
            ))}
            {skills.length > 3 && (
              <span className="skills-more-count">+{skills.length - 3}</span>
            )}
          </div>
        )}
      </div>

      {/* Card Action Footer */}
      <div className="card-footer">
        <button 
          type="button" 
          className="btn-view-profile"
          onClick={() => onSelect(student)}
          aria-label={`View academic profile of ${name}`}
        >
          <span>View Academic Record</span>
          <ExternalLink size={15} />
        </button>
      </div>
    </article>
  );
};

export default StudentCard;
