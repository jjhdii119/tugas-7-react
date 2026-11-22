export default function FilterBar({
  filterStatus,
  onFilterChange,
  searchQuery,
  onSearchChange,
}) {
  const tabs = ['Semua', 'Berjalan', 'Selesai'];

  return (
    <div className="filter-bar">
      <div className="filter-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            className={`btn ${filterStatus === tab ? 'btn-accent' : ''}`}
            onClick={() => onFilterChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div style={{ minWidth: '240px', flex: '1', maxWidth: '320px' }}>
        <input
          type="text"
          placeholder="Cari nama mata kuliah..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
}