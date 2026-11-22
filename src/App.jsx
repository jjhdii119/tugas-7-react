import { useState } from 'react';
import Header from './components/Header';
import StatsSummary from './components/StatsSummary';
import CourseForm from './components/CourseForm';
import FilterBar from './components/FilterBar';
import CourseList from './components/CourseList';

const INITIAL_COURSES = [
  {
    id: 1,
    name: 'Pengembangan Aplikasi Web',
    sks: 3,
    category: 'Wajib',
    completed: false,
  },
  {
    id: 2,
    name: 'Praktikum Pengembangan Aplikasi Web',
    sks: 2,
    category: 'Praktikum',
    completed: false,
  },
  {
    id: 3,
    name: 'Manajemen Basis Data',
    sks: 3,
    category: 'Wajib',
    completed: true,
  },
  {
    id: 4,
    name: 'Interaksi Manusia dan Komputer',
    sks: 3,
    category: 'Wajib',
    completed: true,
  },
];

export default function App() {
  const [courses, setCourses] = useState(INITIAL_COURSES);
  const [filterStatus, setFilterStatus] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  // Fitur Interaktif 1: Tambah mata kuliah
  const handleAddCourse = (newCourse) => {
    setCourses([newCourse, ...courses]);
  };

  // Fitur Interaktif 2: Toggle status selesai/berjalan
  const handleToggleComplete = (id) => {
    setCourses(
      courses.map((course) =>
        course.id === id ? { ...course, completed: !course.completed } : course
      )
    );
  };

  // Fitur Interaktif 3: Hapus mata kuliah
  const handleDeleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  // Filter & Pencarian
  const filteredCourses = courses.filter((course) => {
    const matchesStatus =
      filterStatus === 'Semua'
        ? true
        : filterStatus === 'Selesai'
        ? course.completed
        : !course.completed;

    const matchesSearch = course.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  return (
    <div className="app-container">
      <Header
        title="Katalog & Tracker Mata Kuliah"
        studentName="Afdhal Jihadi"
        studentNim="1247050111"
      />

      <StatsSummary courses={courses} />

      <CourseForm onAddCourse={handleAddCourse} />

      <main className="card">
        <FilterBar
          filterStatus={filterStatus}
          onFilterChange={setFilterStatus}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <CourseList
          courses={filteredCourses}
          onToggleComplete={handleToggleComplete}
          onDeleteCourse={handleDeleteCourse}
        />
      </main>

      <footer className="footer-info">
        Tugas Pertemuan 7 • Component-Based UI Development with React • Afdhal Jihadi (1247050111)
      </footer>
    </div>
  );
}