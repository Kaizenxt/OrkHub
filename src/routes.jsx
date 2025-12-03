import { createBrowserRouter } from 'react-router-dom'
import { Error } from './pages/Error'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Profile } from './pages/Perfil'
import { About } from './pages/About'

export const router = createBrowserRouter([
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
        element: <Profile />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '*',
        element: <Error />
    },
])