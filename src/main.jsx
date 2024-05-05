import React, { useEffect, useState, lazy } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";

import './styles.css'
import Layout from "./Componentes/Layout";
const Home = lazy(() => import('./paginas/Home'))
const Error = lazy(() => import('./paginas/Error'))
const DetallePost = lazy(() => import('./paginas/DetallePost'))
const Registro = lazy(() => import('./paginas/Registro'))
const Login = lazy(() => import('./paginas/Login'))
const CrearPost = lazy(() => import('./paginas/CrearPost'))
const EditarPost = lazy(() => import('./paginas/EditarPost'))
const EliminarPost = lazy(() => import('./paginas/EliminarPost'))
const AuthError = lazy(() => import('./paginas/AuthError'))


const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLogged(!!token); 
  }, []); 


  const router = createBrowserRouter([
    {
        path: '/posts/',
        element: <Layout/>,
        errorElement: <Error/>,
        children: [
            {index: true, element:<Login/>},
            {path: ':id', element: isLogged ? <DetallePost/> : <AuthError/>},
            {path: 'registro', element: <Registro/>},
            {path: 'Home', element:  isLogged ? <Home/> : <AuthError/>},
            {path: 'crear', element:  isLogged ? <CrearPost/> : <AuthError/>},
            {path: ':id/editar', element:  isLogged ? <EditarPost/> : <AuthError/>},
            {path: ':id/borrar', element:  isLogged ? <EliminarPost/> : <AuthError/>},
            {path: 'admin', element: isLogged ? <Navigate to="/posts/Home" /> : <Login />}
        ]
    }
])

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( 
      <App />
);


