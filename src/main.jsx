import React from 'react'
import ReactDOM from 'react-dom/client'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Produtos from "./pages/Produtos.jsx"
import Login from "./pages/Login.jsx";
import Pedidos from "./pages/Pedidos.jsx";
import ProdutoDesc from "./pages/ProdutoDesc.jsx";
import Page404 from './pages/Page404.jsx';
import App from './App.jsx';
import { GlobalStyle } from './GlobalStyle.jsx';




const router = createBrowserRouter([

    {
        path: "/",
        element: <App />,
        errorElement: <Page404 />,
        children: [
            {
                path: "/login",
                element: <Login />,
                errorElement: <Page404 />,
            },
            {
                path: "/produtos",
                element: <Produtos/>,
                errorElement: <Page404 />
            },
            {
                path: "/pedidos/:id",
                element: <Pedidos />,
                errorElement: <Page404/>,
            },
            {
                path: "/produtodesc/:id",
                element: <ProdutoDesc />,
                errorElement: <Page404 />,
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GlobalStyle/>
        <RouterProvider router={router} />
    </React.StrictMode>,
)