import { createBrowserRoute } from 'react-router-dom'
import { Error } from './pages/Error'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Perfil } from './pages/Perfil'

export const router = createBrowserRoute([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/perfil',
        element: <Perfil />
    },
    {
        path: '*',
        element: <Error />
    },
])