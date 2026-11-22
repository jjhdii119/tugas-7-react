export default function StatsSummary({ courses }) {
  const totalCourses = courses.length;
  const totalSks = courses.reduce((acc, item) => acc + Number(item.sks), 0);
  const completedCount = courses.filter((item) => item.completed).length;

  return (
    <section className="stats-grid">
      <div className="stat-box">
        <span>Total Mata Kuliah</span>
        <strong>{totalCourses} Matkul</strong>
      </div>
      <div className="stat-box">
        <span>Total Beban SKS</span>
        <strong>{totalSks} SKS</strong>
      </div>
      <div className="stat-box">
        <span>Status Selesai</span>
        <strong>
          {completedCount} / {totalCourses}
        </strong>
      </div>
    </section>
  );
}