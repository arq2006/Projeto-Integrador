import { useMemo, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { mockPetShops, mockUserPets } from '../data'
import { PATHS } from '../routes/paths'
import { resolveShopIdFromSearchParams } from '../utils/agendamentoParams'

export function Agendamento() {
  const routeParams = useParams()
  const [searchParams] = useSearchParams()
  const candidateId = routeParams.id ?? resolveShopIdFromSearchParams(searchParams)
  const initialId = mockPetShops.some((item) => item.id === candidateId)
    ? candidateId
    : mockPetShops[0]?.id

  const [petshopId, setPetshopId] = useState(initialId)
  const [service, setService] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [petId, setPetId] = useState(mockUserPets[0]?.id ?? '')
  const [notes, setNotes] = useState('')
  const [success, setSuccess] = useState(false)

  const shop = useMemo(
    () => mockPetShops.find((item) => item.id === petshopId) ?? mockPetShops[0],
    [petshopId],
  )

  const serviceOptions = shop?.services ?? []

  function handleSubmit(e) {
    e.preventDefault()
    setSuccess(true)
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-wider text-velaris-600">
        Agendamento demo
      </p>
      <h1 className="mt-1 text-3xl font-bold text-velaris-950">Agendar serviço</h1>
      <p className="mt-1 text-slate-600">
        Escolha estabelecimento, serviço, data e horário usando dados mockados.
      </p>

      {success && (
        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
          Agendamento solicitado com sucesso. Esta é uma confirmação simulada do MVP.
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5 rounded-3xl border border-velaris-100 bg-white p-6 shadow-[var(--shadow-card)]"
      >
        <label className="block text-sm font-medium text-velaris-900">
          Estabelecimento
          <select
            required
            value={petshopId}
            onChange={(e) => {
              setPetshopId(e.target.value)
              setService('')
              setSuccess(false)
            }}
            className="mt-1 w-full rounded-xl border border-velaris-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-velaris-400"
          >
            {mockPetShops.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name} - {item.category}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-sm font-medium text-velaris-900">
          Serviço
          <select
            required
            value={service}
            onChange={(e) => {
              setService(e.target.value)
              setSuccess(false)
            }}
            className="mt-1 w-full rounded-xl border border-velaris-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-velaris-400"
          >
            <option value="">Selecione</option>
            {serviceOptions.map((item) => (
              <option key={item} value={item}>
                {item}
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
              onChange={(e) => {
                setDate(e.target.value)
                setSuccess(false)
              }}
              className="mt-1 w-full rounded-xl border border-velaris-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-velaris-400"
            />
          </label>
          <label className="block text-sm font-medium text-velaris-900">
            Horário
            <select
              required
              value={time}
              onChange={(e) => {
                setTime(e.target.value)
                setSuccess(false)
              }}
              className="mt-1 w-full rounded-xl border border-velaris-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-velaris-400"
            >
              <option value="">Selecione</option>
              {['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'].map((item) => (
                <option key={item} value={item}>
                  {item}
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
              onChange={(e) => {
                setPetId(e.target.value)
                setSuccess(false)
              }}
              className="mt-1 w-full rounded-xl border border-velaris-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-velaris-400"
            >
              {mockUserPets.map((pet) => (
                <option key={pet.id} value={pet.id}>
                  {pet.name} - {pet.species}
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
          Observações
          <textarea
            value={notes}
            onChange={(e) => {
              setNotes(e.target.value)
              setSuccess(false)
            }}
            rows={3}
            className="mt-1 w-full rounded-xl border border-velaris-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-velaris-400"
            placeholder="Alergias, medicamentos, comportamento ou cuidados especiais"
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
