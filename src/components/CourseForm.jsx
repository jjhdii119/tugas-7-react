import { useState } from 'react';

export default function CourseForm({ onAddCourse }) {
  const [name, setName] = useState('');
  const [sks, setSks] = useState('3');
  const [category, setCategory] = useState('Wajib');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    onAddCourse({
      id: Date.now(),
      name: name.trim(),
      sks: Number(sks),
      category,
      completed: false,
    });

    setName('');
    setSks('3');
    setCategory('Wajib');
  };

  return (
    <section className="card">
      <h2 style={{ fontSize: '1.05rem' }}>Tambah Mata Kuliah Baru</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <input
            type="text"
            placeholder="Nama Mata Kuliah (misal: Pemrograman Web)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <select value={sks} onChange={(e) => setSks(e.target.value)}>
            <option value="2">2 SKS</option>
            <option value="3">3 SKS</option>
            <option value="4">4 SKS</option>
          </select>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Wajib">Wajib Prodi</option>
            <option value="Praktikum">Praktikum</option>
            <option value="Pilihan">Pilihan</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary" style={{ marginTop: '0.85rem' }}>
          + Tambah ke Daftar
        </button>
      </form>
    </section>
  );
}