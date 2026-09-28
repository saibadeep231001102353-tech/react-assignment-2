import React from 'react';
import { 
  ArrowDownWideNarrow, 
  ArrowUpNarrowWide, 
  Search, 
  Filter, 
  RotateCcw,
  Sparkles
} from 'lucide-react';
import './ControlsBar.css';

/**
 * ControlsBar Component
 * Provides mechanism to sort students by CGPA (Ascending & Descending),
 * filter by department, search, and reset filters.
 * Receives all control states and handler functions via Props.
 */
const ControlsBar = ({
  sortBy,
  onSortChange,
  department,
  onDepartmentChange,
  searchQuery,
  onSearchChange,
  departmentOptions,
  resultCount,
  totalCount,
  onReset
}) => {
  return (
    <section className="controls-section">
      <div className="container">
        <div className="controls-card card-glass">
          {/* Top Row: Search and Department Filter */}
          <div className="controls-top-row">
            {/* Search Input */}
            <div className="search-input-wrapper">
              <Search size={18} className="search-icon" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search by student name, roll number, or skills..."
                className="search-input"
                id="student-search-input"
              />
              {searchQuery && (
                <button 
                  type="button" 
                  className="clear-search-btn"
                  onClick={() => onSearchChange('')}
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Department Dropdown Filter */}
            <div className="filter-select-wrapper">
              <Filter size={17} className="filter-icon" />
              <select 
                value={department} 
                onChange={(e) => onDepartmentChange(e.target.value)}
                className="department-select"
                id="department-filter-select"
              >
                {departmentOptions.map((dept, idx) => (
                  <option key={idx} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Bottom Row: CGPA Sorting Mechanism & Results Counter */}
          <div className="controls-bottom-row">
            <div className="sort-group">
              <span className="sort-label">
                <Sparkles size={14} className="sort-sparkle" />
                <span>Sort Students:</span>
              </span>

              {/* Dedicated CGPA Sort Buttons for Requirement Demonstration */}
              <div className="sort-pills">
                <button
                  type="button"
                  id="sort-cgpa-desc-btn"
                  className={`sort-pill-btn ${sortBy === 'cgpa-desc' ? 'active' : ''}`}
                  onClick={() => onSortChange('cgpa-desc')}
                  title="Sort by CGPA: Highest to Lowest"
                >
                  <ArrowDownWideNarrow size={15} />
                  <span>CGPA: Highest First</span>
                  {sortBy === 'cgpa-desc' && <span className="active-dot"></span>}
                </button>

                <button
                  type="button"
                  id="sort-cgpa-asc-btn"
                  className={`sort-pill-btn ${sortBy === 'cgpa-asc' ? 'active' : ''}`}
                  onClick={() => onSortChange('cgpa-asc')}
                  title="Sort by CGPA: Lowest to Highest"
                >
                  <ArrowUpNarrowWide size={15} />
                  <span>CGPA: Lowest First</span>
                  {sortBy === 'cgpa-asc' && <span className="active-dot"></span>}
                </button>

                <button
                  type="button"
                  id="sort-name-btn"
                  className={`sort-pill-btn ${sortBy === 'name-asc' ? 'active' : ''}`}
                  onClick={() => onSortChange('name-asc')}
                  title="Sort alphabetically by Name"
                >
                  <span>Name (A–Z)</span>
                  {sortBy === 'name-asc' && <span className="active-dot"></span>}
                </button>

                <button
                  type="button"
                  id="sort-roll-btn"
                  className={`sort-pill-btn ${sortBy === 'roll-asc' ? 'active' : ''}`}
                  onClick={() => onSortChange('roll-asc')}
                  title="Sort by Roll Number"
                >
                  <span>Roll No</span>
                  {sortBy === 'roll-asc' && <span className="active-dot"></span>}
                </button>
              </div>
            </div>

            {/* Results Count & Reset Button */}
            <div className="results-meta">
              <span className="results-count">
                Showing <strong>{resultCount}</strong> of <strong>{totalCount}</strong> students
              </span>

              {(searchQuery || department !== 'All Departments' || sortBy !== 'cgpa-desc') && (
                <button 
                  type="button" 
                  className="reset-btn"
                  onClick={onReset}
                  title="Reset all filters and sort order"
                >
                  <RotateCcw size={14} />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ControlsBar;
