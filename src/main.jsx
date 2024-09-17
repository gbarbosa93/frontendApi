import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home' // Como fizemos o export na outra página agora precisamos fazer o import do nosso componente dentro do nosso main, como nosso arquivo é um index não precisamos passar o nome do arquivo e extenção
import Editar from './pages/editar'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "editar",
    element: <Editar />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
