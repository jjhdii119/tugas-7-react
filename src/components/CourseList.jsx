import CourseCard from './CourseCard';

export default function CourseList({ courses, onToggleComplete, onDeleteCourse }) {
  if (courses.length === 0) {
    return (
      <div className="empty-state">
        <p style={{ fontWeight: 600 }}>Tidak ada mata kuliah yang sesuai filter.</p>
        <p style={{ fontSize: '0.85rem', marginTop: '0.25rem' }}>
          Coba ubah kata kunci pencarian atau tambahkan mata kuliah baru di atas.
        </p>
      </div>
    );
  }

  return (
    <div className="course-grid">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          onToggleComplete={onToggleComplete}
          onDeleteCourse={onDeleteCourse}
        />
      ))}
    </div>
  );
}