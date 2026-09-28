import React from 'react';
import StudentCard from './StudentCard';
import { UserX, Sparkles, ArrowDownWideNarrow, ArrowUpNarrowWide } from 'lucide-react';
import './StudentList.css';

/**
 * StudentList Component
 * Renders the collection of student cards in a responsive grid.
 * Data passed via Props:
 * - students: Array of student objects
 * - sortBy: Current sort criteria
 * - onSelectStudent: Callback when a student is selected
 */
const StudentList = ({ students, sortBy, onSelectStudent }) => {
  // Human readable sort badge text
  const getSortDescription = () => {
    switch (sortBy) {
      case 'cgpa-desc':
        return { text: 'Sorted by CGPA (Highest to Lowest)', icon: <ArrowDownWideNarrow size={14} /> };
      case 'cgpa-asc':
        return { text: 'Sorted by CGPA (Lowest to Highest)', icon: <ArrowUpNarrowWide size={14} /> };
      case 'name-asc':
        return { text: 'Sorted by Name (A to Z)', icon: <Sparkles size={14} /> };
      case 'roll-asc':
        return { text: 'Sorted by Roll Number', icon: <Sparkles size={14} /> };
      default:
        return { text: 'Custom Sorted', icon: <Sparkles size={14} /> };
    }
  };

  const sortInfo = getSortDescription();

  if (students.length === 0) {
    return (
      <section className="student-list-section">
        <div className="container">
          <div className="empty-state-card card-glass">
            <div className="empty-icon-box">
              <UserX size={44} />
            </div>
            <h3 className="empty-title">No Students Found</h3>
            <p className="empty-desc">
              We couldn't find any students matching your search criteria or department filter.
              Try adjusting your query or reset the filters.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="student-list-section" id="student-registry">
      <div className="container">
        {/* Section Header with Active Sort Indicator */}
        <div className="list-meta-header">
          <div className="list-title-group">
            <h2 className="list-heading">
              Student <span className="gradient-text">Profiles</span>
            </h2>
            <span className="student-count-badge">
              {students.length} {students.length === 1 ? 'Record' : 'Records'}
            </span>
          </div>

          <div className="active-sort-indicator">
            {sortInfo.icon}
            <span>{sortInfo.text}</span>
          </div>
        </div>

        {/* Student Cards Grid */}
        <div className="students-grid">
          {students.map((student) => (
            <StudentCard 
              key={student.id} 
              student={student} 
              onSelect={onSelectStudent} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentList;
