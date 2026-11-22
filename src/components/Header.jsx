export default function Header({ title, studentName, studentNim }) {
  return (
    <header className="header-card">
      <div>
        <h1>{title}</h1>
        <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
          Aplikasi Manajemen & Tracking Mata Kuliah Berbasis Komponen React
        </p>
      </div>
      <div className="student-badge">
        {studentName} • NIM: {studentNim}
      </div>
    </header>
  );
}