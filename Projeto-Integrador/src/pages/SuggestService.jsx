import { useState } from 'react'
import { serviceCategories } from '../data'

const initialForm = {
  establishmentName: '',
  category: '',
  neighborhood: '',
  address: '',
  phone: '',
  description: '',
  hours: '',
  suggestedBy: '',
}

export function SuggestService() {
  const [form, setForm] = useState(initialForm)
  const [success, setSuccess] = useState(false)

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }))
    setSuccess(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSuccess(true)
    setForm(initialForm)
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-velaris-600">
          Colaboração comunitária
        </p>
        <h1 className="mt-1 text-3xl font-bold text-velaris-950">Sugerir serviço</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Indique um estabelecimento pet local para entrar na fila de revisão administrativa do
          protótipo.
        </p>
      </header>

      {success && (
        <div className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-800">
          Sugestão enviada com sucesso. A revisão é simulada nesta versão do MVP.
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="grid gap-5 rounded-3xl border border-velaris-100 bg-white p-6 shadow-[var(--shadow-card)] sm:grid-cols-2"
      >
        <TextField
          label="Nome do estabelecimento"
          value={form.establishmentName}
          onChange={(value) => updateField('establishmentName', value)}
        />
        <label className="block text-sm font-medium text-velaris-900">
          Categoria
          <select
            required
            value={form.category}
            onChange={(e) => updateField('category', e.target.value)}
            className="mt-1 w-full rounded-xl border border-velaris-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-velaris-400"
          >
            <option value="">Selecione</option>
            {serviceCategories.map((category) => (
              <option key={category.id} value={category.label}>
                {category.label}
              </option>
            ))}
          </select>
        </label>
        <TextField
          label="Bairro"
          value={form.neighborhood}
          onChange={(value) => updateField('neighborhood', value)}
        />
        <TextField
          label="Telefone/WhatsApp"
          value={form.phone}
          onChange={(value) => updateField('phone', value)}
          placeholder="(62) 99999-9999"
        />
        <TextField
          label="Endereço"
          value={form.address}
          onChange={(value) => updateField('address', value)}
          className="sm:col-span-2"
        />
        <TextField
          label="Horário de funcionamento"
          value={form.hours}
          onChange={(value) => updateField('hours', value)}
          placeholder="Ex.: Seg-Sex 8h-18h"
          className="sm:col-span-2"
        />
        <label className="block text-sm font-medium text-velaris-900 sm:col-span-2">
          Descrição
          <textarea
            required
            value={form.description}
            onChange={(e) => updateField('description', e.target.value)}
            rows={4}
            className="mt-1 w-full rounded-xl border border-velaris-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-velaris-400"
            placeholder="Conte quais serviços são oferecidos e por que a comunidade deveria conhecer."
          />
        </label>
        <TextField
          label="Nome de quem está sugerindo"
          value={form.suggestedBy}
          onChange={(value) => updateField('suggestedBy', value)}
          className="sm:col-span-2"
        />
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="w-full rounded-2xl bg-velaris-600 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-velaris-700"
          >
            Enviar sugestão
          </button>
        </div>
      </form>
    </div>
  )
}

function TextField({ label, value, onChange, placeholder = '', className = '' }) {
  return (
    <label className={`block text-sm font-medium text-velaris-900 ${className}`}>
      {label}
      <input
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1 w-full rounded-xl border border-velaris-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-velaris-400"
      />
    </label>
  )
}
