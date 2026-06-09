import { AppRoutes } from './routes/AppRoutes'

/**
 * Raiz da aplicação.
 * Rotas e layouts ficam em ./routes para facilitar troca por data router / lazy load.
 */
function App() {
  return <AppRoutes />
}

export default App
