import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PATHS } from '../routes/paths'

/**
 * Login — estado local; futuro: POST /auth/login + contexto de sessão.
 */
export function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const [remember, setRemember] = useState(true)

  function handleSubmit(e) {
    e.preventDefault()
    // Demo: sempre redireciona como se login tivesse sucesso
    navigate(remember ? PATHS.perfilUsuario : PATHS.home)
  }

  return (
    <div className="flex min-h-[calc(100dvh-8rem)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md overflow-hidden rounded-3xl border border-velaris-100 bg-white shadow-[var(--shadow-soft)]">
        <div className="border-b border-velaris-100 bg-gradient-to-r from-velaris-50 to-white px-8 py-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-velaris-600 text-2xl text-white">
            🐾
          </div>
          <h1 className="mt-4 text-2xl font-bold text-velaris-950">Bem-vindo de volta!</h1>
          <p className="mt-1 text-sm text-slate-600">Entre para gerenciar agendamentos e pets.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 px-8 py-8">
          <label className="block text-sm font-medium text-velaris-900">
            E-mail
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-xl border border-velaris-200 bg-velaris-50/50 px-3 py-2.5 text-slate-900 outline-none ring-velaris-400 focus:ring-2"
              placeholder="voce@email.com"
              autoComplete="email"
            />
          </label>
          <label className="block text-sm font-medium text-velaris-900">
            Senha
            <div className="relative mt-1">
              <input
                type={show ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-velaris-200 bg-velaris-50/50 px-3 py-2.5 pr-12 text-slate-900 outline-none ring-velaris-400 focus:ring-2"
                placeholder="••••••••"
                autoComplete="current-password"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-sm text-slate-500 hover:bg-velaris-100"
                onClick={() => setShow((s) => !s)}
                aria-label={show ? 'Ocultar senha' : 'Mostrar senha'}
              >
                {show ? '🙈' : '👁️'}
              </button>
            </div>
          </label>

          <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
            <label className="flex cursor-pointer items-center gap-2 text-slate-600">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="rounded border-velaris-300 text-velaris-600 focus:ring-velaris-500"
              />
              Lembrar de mim
            </label>
            <button
              type="button"
              className="font-semibold text-velaris-700 hover:text-velaris-900"
              onClick={() => alert('Fluxo de recuperação seria integrado à API.')}
            >
              Esqueci minha senha
            </button>
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-velaris-600 py-3 text-base font-semibold text-white shadow-lg shadow-velaris-600/25 transition hover:bg-velaris-700"
          >
            Entrar
          </button>

          <p className="text-center text-sm text-slate-600">
            Não tem conta?{' '}
            <Link to={PATHS.cadastro} className="font-semibold text-velaris-700 hover:underline">
              Cadastre-se
            </Link>
          </p>
        </form>

        <div className="flex justify-center border-t border-velaris-50 bg-velaris-50/40 px-6 py-4">
          <img
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=200&h=120&fit=crop"
            alt=""
            className="h-16 rounded-xl object-cover opacity-90"
          />
          <img
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200&h=120&fit=crop"
            alt=""
            className="-ml-4 h-16 rounded-xl object-cover ring-4 ring-white"
          />
        </div>
      </div>
    </div>
  )
}
