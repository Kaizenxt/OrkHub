import { createBrowserRoute } from 'react-router-dom'

export const router = createBrowserRoute([
    {
        path: '/',
        children: [
            { path: '/login', element: <Login /> },
            { path: '/singUp', element: <SingUp /> } 
        ]
    },
    {
        path: '/',
        element: <PrivateRoute />, //Aqui ele vai exigir autenticação
        children: [
            { path: '/home', element: <Home /> },
            { path: '/about', element: <About /> },
        ]
    },
    {
        path: '*',
        element: <Error />
    },
])