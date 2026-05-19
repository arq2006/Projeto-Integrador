import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { mockPetShops, mockUserPets } from '../data'
import { PATHS } from '../routes/paths'
import { resolveShopIdFromSearchParams } from '../utils/agendamentoParams'

/**
 * Fluxo de agendamento — pré-seleção via query ?petshopId=
 * (remontado pelo wrapper de rota quando o parâmetro muda)
 */
export function Agendamento() {
  const [params] = useSearchParams()
  const [petshopId, setPetshopId] = useState(() => resolveShopIdFromSearchParams(params))
  const [service, setService] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [petId, setPetId] = useState(mockUserPets[0]?.id ?? '')
  const [notes, setNotes] = useState('')

  const shop = useMemo(
    () => mockPetShops.find((p) => p.id === petshopId) ?? mockPetShops[0],
    [petshopId],
  )

  const serviceOptions = shop?.services ?? []

  function handleSubmit(e) {
    e.preventDefault()
    alert(
      `Agendamento (demo)\nPet shop: ${shop?.name}\nServiço: ${service}\nData: ${date} ${time}\nPet: ${petId}\nObs: ${notes}`,
    )
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-velaris-950">Agendar serviço</h1>
      <p className="mt-1 text-slate-600">Preencha os campos — integração com API substitui este fluxo.</p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5 rounded-3xl border border-velaris-100 bg-white p-6 shadow-[var(--shadow-card)]"
      >
        <label className="block text-sm font-medium text-velaris-900">
          Pet shop
          <select
            required
            value={petshopId}
            onChange={(e) => {
              setPetshopId(e.target.value)
              setService('')
            }}
            className="mt-1 w-full rounded-xl border border-velaris-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-velaris-400"
          >
            {mockPetShops.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-sm font-medium text-velaris-900">
          Serviço
          <select
            required
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="mt-1 w-full rounded-xl border border-velaris-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-velaris-400"
          >
            <option value="">Selecione…</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-medium text-velaris-900">
            Data
            <input
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 w-full rounded-xl border border-velaris-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-velaris-400"
            />
          </label>
          <label className="block text-sm font-medium text-velaris-900">
            Horário
            <select
              required
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="mt-1 w-full rounded-xl border border-velaris-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-velaris-400"
            >
              <option value="">Selecione…</option>
              {['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'].map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-velaris-900">
            Pet
            <select
              required
              value={petId}
              onChange={(e) => setPetId(e.target.value)}
              className="mt-1 w-full rounded-xl border border-velaris-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-velaris-400"
            >
              {mockUserPets.map((pet) => (
                <option key={pet.id} value={pet.id}>
                  {pet.name} — {pet.species}
                </option>
              ))}
            </select>
          </label>
          <Link
            to={PATHS.perfilUsuario}
            className="mt-2 inline-block text-sm font-semibold text-velaris-700 hover:underline"
          >
            Gerenciar pets
          </Link>
        </div>

        <label className="block text-sm font-medium text-velaris-900">
          Observações (opcional)
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            className="mt-1 w-full rounded-xl border border-velaris-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-velaris-400"
            placeholder="Alergias, medicação, preferências de tosa…"
          />
        </label>

        <button
          type="submit"
          className="w-full rounded-2xl bg-velaris-600 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-velaris-700"
        >
          Confirmar agendamento
        </button>
      </form>
    </div>
  )
}
