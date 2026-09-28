# ⚡ Assignment 2: Student Information Management using Props

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Open%20Website-success?style=for-the-badge&logo=githubpages&logoColor=white)](https://saibadeep231001102353-tech.github.io/react-assignment-2/)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/saibadeep231001102353-tech/react-assignment-2)

> ### 🌐 Live Application URL:
> **👉 [https://saibadeep231001102353-tech.github.io/react-assignment-2/](https://saibadeep231001102353-tech.github.io/react-assignment-2/)**
> 
> 👨‍🎓 **Submitted by:** Saibadeep Mullick  
> 🆔 **Roll Number:** 231001102353  
> 📌 **Assignment:** Student Information Management using Props & CGPA Sorting

> **Assignment Objective:** Create a student information portal. Each student card should display **Name / Roll Number / Department / Semester / CGPA / Photo**. Create the following components: **App**, **Student List**, **Student Card**, **Header/Footer**. Pass all data through Props. Provide a mechanism to sort students by CGPA.

---

## 📋 Requirements & Compliance Matrix

| Requirement / Constraint | Specified in Assignment | Implementation Details | Status |
| :--- | :--- | :--- | :---: |
| **Component Hierarchy** | `App`, `Student List`, `Student Card`, `Header/Footer` | Created `App.jsx`, `StudentList.jsx`, `StudentCard.jsx`, `Header.jsx`, `Footer.jsx` + `ControlsBar.jsx` + `StudentModal.jsx` | ✅ Met & Exceeded |
| **Required Card Fields** | Name / Roll Number / Department / Semester / CGPA / Photo | Displayed clearly on every card with styled department-themed monogram avatars (no picture), roll number badges, and CGPA gauge pills | ✅ 100% Met |
| **Pass Data Through Props** | Pass all data through Props | All student records, statistical metrics, filter states, sort criteria, and event handlers are passed exclusively via React Props | ✅ 100% Met |
| **CGPA Sorting Mechanism** | Provide a mechanism to sort students by CGPA | Interactive sort controls: **CGPA Highest First (Descending)** & **CGPA Lowest First (Ascending)** with visual active indicators and instant re-ordering | ✅ 100% Met |
| **Component Reusability** | Pre-requisite: Component Reusability | `StudentCard` is rendered modularly for each record in `StudentList` via mapping | ✅ 100% Met |
| **External CSS Styling** | Modular CSS | Separate `.css` stylesheets for every single component (`Header.css`, `ControlsBar.css`, `StudentCard.css`, `StudentList.css`, `StudentModal.css`, `Footer.css`, `App.css`, `index.css`) | ✅ 100% Met |
| **Theme & Responsiveness** | Production-Grade UI | Dark / Light theme toggle with local storage persistence, responsive grid (1 to 3 columns) | ✅ 100% Met |

---

## 🌳 Props Passing Architecture

```
App.jsx (Root State Holder: students, sortBy, departmentFilter, searchQuery, selectedStudent, theme)
  │
  ├──► <Header />
  │      ├── title="Student Information Management"
  │      ├── subtitle="..."
  │      ├── stats={totalStudents, topCgpa, averageCgpa, departmentsCount}
  │      ├── theme={theme}
  │      └── onToggleTheme={toggleTheme}
  │
  ├──► <ControlsBar />
  │      ├── sortBy={sortBy}
  │      ├── onSortChange={setSortBy}  <-- Controls CGPA Sort
  │      ├── department={departmentFilter}
  │      ├── onDepartmentChange={setDepartmentFilter}
  │      ├── searchQuery={searchQuery}
  │      ├── onSearchChange={setSearchQuery}
  │      ├── departmentOptions={departmentOptions}
  │      ├── resultCount={processedStudents.length}
  │      ├── totalCount={initialStudents.length}
  │      └── onReset={handleResetFilters}
  │
  ├──► <StudentList />
  │      ├── students={processedStudents}  <-- Filtered & CGPA-Sorted array
  │      ├── sortBy={sortBy}
  │      └── onSelectStudent={setSelectedStudent}
  │            │
  │            └──► <StudentCard /> (Repeated for each student via .map())
  │                   ├── student={student}
  │                   │     ├── name
  │                   │     ├── rollNumber
  │                   │     ├── department
  │                   │     ├── semester
  │                   │     ├── cgpa
  │                   │     ├── badge
  │                   │     ├── attendance
  │                   │     └── skills
  │                   └── onSelect={onSelectStudent}
  │
  ├──► <StudentModal />
  │      ├── student={selectedStudent}
  │      └── onClose={() => setSelectedStudent(null)}
  │
  └──► <Footer />
         ├── developer="Saibadeep Mullick"
         ├── academicStanding="4th Year BCA Student"
         ├── assignmentTitle="Assignment 2: Student Information Management using Props"
         ├── department="Department of Computer Applications"
         └── year={2026}
```

---

## ⚡ CGPA Sorting Implementation Detail

The portal calculates the sorted students array dynamically in `App.jsx` using `useMemo`:

```javascript
result.sort((a, b) => {
  switch (sortBy) {
    case 'cgpa-desc':
      return b.cgpa - a.cgpa; // Highest CGPA first (e.g. 9.8 -> 7.6)
    case 'cgpa-asc':
      return a.cgpa - b.cgpa; // Lowest CGPA first (e.g. 7.6 -> 9.8)
    case 'name-asc':
      return a.name.localeCompare(b.name);
    case 'roll-asc':
      return a.rollNumber.localeCompare(b.rollNumber);
    default:
      return b.cgpa - a.cgpa;
  }
});
```

---

## 🚀 How to Run Locally

```bash
cd "/Users/saibadeepmullick/Desktop/React Assignment/react-assignment-2"
npm install
npm run dev
```

Visit the local development server URL (typically `http://localhost:5174/` or `http://localhost:5173/`).

---

## 📚 Master Directory of All Assignments

| Assignment | Description | GitHub Repository | Live Demo Link |
|---|---|---|---|
| **Assignment 1** | Personal Portfolio | [Code](https://github.com/saibadeep231001102353-tech/react-assignment-1) | [🔗 Live Demo](https://saibadeep231001102353-tech.github.io/react-assignment-1/) |
| **Assignment 2** | Student Cards & Sorting | [Code](https://github.com/saibadeep231001102353-tech/react-assignment-2) | [🔗 Live Demo](https://saibadeep231001102353-tech.github.io/react-assignment-2/) |
| **Assignment 3** | Agro Employee Directory | [Code](https://github.com/saibadeep231001102353-tech/react-assignment-3) | [🔗 Live Demo](https://saibadeep231001102353-tech.github.io/react-assignment-3/) |
| **Assignment 4** | Weather Metrics Dashboard | [Code](https://github.com/saibadeep231001102353-tech/react-assignment-4) | [🔗 Live Demo](https://saibadeep231001102353-tech.github.io/react-assignment-4/) |
| **Assignment 5** | NexusCart Shopping Cart | [Code](https://github.com/saibadeep231001102353-tech/react-assignment-5) | [🔗 Live Demo](https://saibadeep231001102353-tech.github.io/react-assignment-5/) |
| **Assignment 6** | TaskFlow Multi-Page App | [Code](https://github.com/saibadeep231001102353-tech/react-assignment-6) | [🔗 Live Demo](https://saibadeep231001102353-tech.github.io/react-assignment-6/) |
| **Assignment 7** | AuthGuard Enterprise Portal | [Code](https://github.com/saibadeep231001102353-tech/react-assignment-7) | [🔗 Live Demo](https://saibadeep231001102353-tech.github.io/react-assignment-7/) |
