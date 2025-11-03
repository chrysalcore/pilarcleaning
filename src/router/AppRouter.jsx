import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from '../components/pages/Home'
import About from '../components/pages/About'
import Contact from '../components/pages/Contact'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: '*',
                element: <Navigate to={''} />,
            },
        ]
    }
])

function AppRouter() {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter;