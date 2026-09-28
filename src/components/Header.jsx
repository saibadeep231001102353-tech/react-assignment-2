import React from 'react';
import { 
  GraduationCap, 
  Sun, 
  Moon, 
  Sparkles, 
  TrendingUp, 
  Users, 
  Award, 
  Building2 
} from 'lucide-react';
import './Header.css';

/**
 * Header Component
 * Displays the portal branding, navigation actions, theme toggle,
 * and high-level academic summary metric cards.
 * Data passed via Props.
 */
const Header = ({ 
  title, 
  subtitle, 
  stats, 
  theme, 
  onToggleTheme 
}) => {
  return (
    <header className="portal-header">
      {/* Top Navbar Ribbon */}
      <div className="header-nav">
        <div className="container header-nav-container">
          <div className="portal-brand">
            <div className="brand-logo-box">
              <GraduationCap size={24} className="brand-icon" />
            </div>
            <div className="brand-titles">
              <span className="brand-main">EduPortal</span>
              <span className="brand-sub">Student Information System</span>
            </div>
          </div>

          <div className="header-controls">
            <div className="assignment-badge">
              <span className="pulse-indicator"></span>
              <span>React Assignment 2: Props & Sorting</span>
            </div>

            <button 
              type="button" 
              className="theme-btn" 
              onClick={onToggleTheme}
              aria-label="Toggle theme mode"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Hero Welcome Banner */}
      <div className="container header-hero-container">
        <div className="header-intro">
          <div className="intro-badge">
            <Sparkles size={14} className="sparkle-icon" />
            <span>Academic Registry & Performance Portal</span>
          </div>
          <h1 className="header-headline">
            {title || 'Student Information Management'}
          </h1>
          <p className="header-description">
            {subtitle || 'Manage student profiles, monitor academic standing, and sort by CGPA dynamically with modular component architecture and Props data passing.'}
          </p>
        </div>

        {/* Dynamic Metric Stats Cards - Received via Props */}
        <div className="header-stats-grid">
          <div className="header-stat-card card-glass">
            <div className="stat-icon-wrapper stat-icon-blue">
              <Users size={22} />
            </div>
            <div className="stat-content">
              <span className="stat-number">{stats.totalStudents}</span>
              <span className="stat-label">Enrolled Students</span>
            </div>
          </div>

          <div className="header-stat-card card-glass">
            <div className="stat-icon-wrapper stat-icon-emerald">
              <Award size={22} />
            </div>
            <div className="stat-content">
              <span className="stat-number">{stats.topCgpa.toFixed(2)}</span>
              <span className="stat-label">Highest CGPA</span>
            </div>
          </div>

          <div className="header-stat-card card-glass">
            <div className="stat-icon-wrapper stat-icon-amber">
              <TrendingUp size={22} />
            </div>
            <div className="stat-content">
              <span className="stat-number">{stats.averageCgpa.toFixed(2)}</span>
              <span className="stat-label">Batch Avg CGPA</span>
            </div>
          </div>

          <div className="header-stat-card card-glass">
            <div className="stat-icon-wrapper stat-icon-violet">
              <Building2 size={22} />
            </div>
            <div className="stat-content">
              <span className="stat-number">{stats.departmentsCount}</span>
              <span className="stat-label">Active Departments</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
