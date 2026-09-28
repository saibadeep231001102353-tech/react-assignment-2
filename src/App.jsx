import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import ControlsBar from './components/ControlsBar';
import StudentList from './components/StudentList';
import StudentModal from './components/StudentModal';
import Footer from './components/Footer';
import { initialStudents, departmentOptions } from './data/studentsData';
import './App.css';

/**
 * App Component - Root Component
 * Demonstrates:
 * 1. Props Passing to Child Components (Header, ControlsBar, StudentList, StudentCard, Footer)
 * 2. Component Reusability
 * 3. Dynamic Mechanism to Sort Students by CGPA (Ascending & Descending)
 * 4. Real-time Search and Department Filtering
 * 5. Dark / Light Theme Switching
 */
function App() {
  // Theme state with localStorage persistence
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('eduportal-theme') || 'dark';
  });

  // Controls state
  const [sortBy, setSortBy] = useState('cgpa-desc'); // Default to CGPA Highest First
  const [departmentFilter, setDepartmentFilter] = useState('All Departments');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Synchronize theme with root document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('eduportal-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Compute filtered & sorted students dynamically
  const processedStudents = useMemo(() => {
    let result = [...initialStudents];

    // 1. Department Filtering
    if (departmentFilter !== 'All Departments') {
      result = result.filter((student) => student.department === departmentFilter);
    }

    // 2. Search Query Filtering (Name, Roll Number, Skills)
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter((student) => {
        const matchName = student.name.toLowerCase().includes(q);
        const matchRoll = student.rollNumber.toLowerCase().includes(q);
        const matchDept = student.department.toLowerCase().includes(q);
        const matchSkills = student.skills?.some((s) => s.toLowerCase().includes(q));
        return matchName || matchRoll || matchDept || matchSkills;
      });
    }

    // 3. Sorting Mechanism (Specifically by CGPA)
    result.sort((a, b) => {
      switch (sortBy) {
        case 'cgpa-desc':
          // CGPA Highest to Lowest
          return b.cgpa - a.cgpa;
        case 'cgpa-asc':
          // CGPA Lowest to Highest
          return a.cgpa - b.cgpa;
        case 'name-asc':
          // Name Alphabetical
          return a.name.localeCompare(b.name);
        case 'roll-asc':
          // Roll Number Natural Sort
          return a.rollNumber.localeCompare(b.rollNumber);
        default:
          return b.cgpa - a.cgpa;
      }
    });

    return result;
  }, [departmentFilter, searchQuery, sortBy]);

  // Compute portal-wide summary statistics for Header Props
  const stats = useMemo(() => {
    const total = initialStudents.length;
    const top = Math.max(...initialStudents.map((s) => s.cgpa));
    const avg = initialStudents.reduce((acc, curr) => acc + curr.cgpa, 0) / (total || 1);
    const uniqueDepts = new Set(initialStudents.map((s) => s.department)).size;

    return {
      totalStudents: total,
      topCgpa: top,
      averageCgpa: avg,
      departmentsCount: uniqueDepts,
    };
  }, []);

  // Reset all filters and sort order back to defaults
  const handleResetFilters = () => {
    setSortBy('cgpa-desc');
    setDepartmentFilter('All Departments');
    setSearchQuery('');
  };

  return (
    <div className="eduportal-app">
      {/* 1. Header Component - Receives Branding, Statistics & Theme via Props */}
      <Header
        title="Student Information Management"
        subtitle="Manage student profiles, monitor academic standing, and sort by CGPA dynamically with modular component architecture and Props data passing."
        stats={stats}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="portal-main-content">
        {/* 2. ControlsBar Component - Receives Sort Mechanism & Filter Handlers via Props */}
        <ControlsBar
          sortBy={sortBy}
          onSortChange={setSortBy}
          department={departmentFilter}
          onDepartmentChange={setDepartmentFilter}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          departmentOptions={departmentOptions}
          resultCount={processedStudents.length}
          totalCount={initialStudents.length}
          onReset={handleResetFilters}
        />

        {/* 3. StudentList Component - Receives Processed Students Array via Props */}
        <StudentList
          students={processedStudents}
          sortBy={sortBy}
          onSelectStudent={setSelectedStudent}
        />
      </main>

      {/* 4. StudentModal Component - Displays Full Student Academic Transcript via Props */}
      <StudentModal
        student={selectedStudent}
        onClose={() => setSelectedStudent(null)}
      />

      {/* 5. Footer Component - Receives Developer & Assignment Information via Props */}
      <Footer
        developer="Saibadeep Mullick"
        academicStanding="4th Year BCA Student"
        assignmentTitle="Assignment 2: Student Information Management using Props"
        department="Department of Computer Applications"
        year={new Date().getFullYear()}
      />
    </div>
  );
}

export default App;
