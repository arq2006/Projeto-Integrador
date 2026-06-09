export function CategoryFilter({ categories, selectedCategory, onChange }) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoria">
      <button
        type="button"
        onClick={() => onChange('')}
        className={[
          'rounded-xl border px-3 py-2 text-sm font-semibold transition',
          selectedCategory === ''
            ? 'border-velaris-600 bg-velaris-600 text-white shadow-md shadow-velaris-600/20'
            : 'border-velaris-200 bg-white text-velaris-800 hover:border-velaris-400 hover:bg-velaris-50',
        ].join(' ')}
      >
        Todas
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          onClick={() => onChange(category.id)}
          className={[
            'inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-semibold transition',
            selectedCategory === category.id
              ? 'border-velaris-600 bg-velaris-600 text-white shadow-md shadow-velaris-600/20'
              : 'border-velaris-200 bg-white text-velaris-800 hover:border-velaris-400 hover:bg-velaris-50',
          ].join(' ')}
        >
          <span aria-hidden>{category.emoji}</span>
          {category.label}
        </button>
      ))}
    </div>
  )
}
