export default function CourseCard({ course, onToggleComplete, onDeleteCourse }) {
  return (
    <article className={`course-card ${course.completed ? 'completed' : ''}`}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <span className="badge-pill">{course.category} • {course.sks} SKS</span>
          <span className={`badge-pill ${course.completed ? 'badge-done' : 'badge-active'}`}>
            {course.completed ? 'Selesai' : 'Berjalan'}
          </span>
        </div>
        <h3 style={{ fontSize: '1.05rem', marginTop: '0.35rem' }}>{course.name}</h3>
      </div>

      <div className="card-actions">
        <button
          type="button"
          className={`btn ${course.completed ? '' : 'btn-success'}`}
          onClick={() => onToggleComplete(course.id)}
        >
          {course.completed ? 'Batal Selesai' : 'Tandai Selesai'}
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onDeleteCourse(course.id)}
        >
          Hapus
        </button>
      </div>
    </article>
  );
}