import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateUser from './pages/CreateSinger'
import Singers from './pages/Singers'
import Singer from './pages/Singer'
import App from './pages/App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/singers',
    element: <Singers />,
  },
  {
    path: '/singers/new',
    element: <CreateUser />,
  },
  {
    path: '/singers/:id',
    element: <Singer />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
