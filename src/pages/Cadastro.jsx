import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PATHS } from '../routes/paths'

/**
 * Cadastro — demonstração com “upload” falso de imagem de perfil.
 */
export function Cadastro() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [avatarPreview, setAvatarPreview] = useState(null)

  /** Simula escolha de arquivo — sem envio real ao servidor. */
  function handleFakeUpload(e) {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setAvatarPreview(url)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (password !== confirm) {
      alert('As senhas não coincidem.')
      return
    }
    alert('Conta criada (demo). Redirecionando…')
    navigate(PATHS.perfilUsuario)
  }

  return (
    <div className="flex min-h-[calc(100dvh-8rem)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-3xl border border-velaris-100 bg-white shadow-[var(--shadow-soft)]">
        <div className="border-b border-velaris-100 px-8 py-8 text-center">
          <h1 className="text-2xl font-bold text-velaris-950">Crie sua conta</h1>
          <p className="mt-1 text-sm text-slate-600">Leva menos de um minuto para começar.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 px-8 py-8">
          <div className="flex flex-col items-center gap-2">
            <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-velaris-100 ring-2 ring-velaris-200">
              {avatarPreview ? (
                <img src={avatarPreview} alt="" className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-2xl text-velaris-400">
                  📷
                </div>
              )}
            </div>
            <label className="cursor-pointer text-sm font-semibold text-velaris-700 hover:underline">
              <input type="file" accept="image/*" className="sr-only" onChange={handleFakeUpload} />
              Foto de perfil (upload demo)
            </label>
          </div>

          <label className="block text-sm font-medium text-velaris-900">
            Nome completo
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded-xl border border-velaris-200 px-3 py-2.5 outline-none ring-velaris-400 focus:ring-2"
            />
          </label>
          <label className="block text-sm font-medium text-velaris-900">
            E-mail
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-xl border border-velaris-200 px-3 py-2.5 outline-none ring-velaris-400 focus:ring-2"
            />
          </label>
          <label className="block text-sm font-medium text-velaris-900">
            Telefone
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 w-full rounded-xl border border-velaris-200 px-3 py-2.5 outline-none ring-velaris-400 focus:ring-2"
              placeholder="(11) 99999-9999"
            />
          </label>
          <label className="block text-sm font-medium text-velaris-900">
            Senha
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-xl border border-velaris-200 px-3 py-2.5 outline-none ring-velaris-400 focus:ring-2"
            />
          </label>
          <label className="block text-sm font-medium text-velaris-900">
            Confirmar senha
            <input
              type="password"
              required
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="mt-1 w-full rounded-xl border border-velaris-200 px-3 py-2.5 outline-none ring-velaris-400 focus:ring-2"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-2xl bg-velaris-600 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-velaris-700"
          >
            Criar conta
          </button>
          <p className="text-center text-sm text-slate-600">
            Já tem conta?{' '}
            <Link to={PATHS.login} className="font-semibold text-velaris-700 hover:underline">
              Entrar
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
