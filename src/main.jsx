import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home' // Como fizemos o export na outra página agora precisamos fazer o import do nosso componente dentro do nosso main, como nosso arquivo é um index não precisamos passar o nome do arquivo e extenção
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
