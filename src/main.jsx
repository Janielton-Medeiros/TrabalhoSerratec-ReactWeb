import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Produtos from "./pages/Produtos.jsx"
import Login from './pages/login.jsx';
import Cadastrar from './pages/Cadastrar.jsx';
import { Pedido } from './pages/Pedido.jsx';
import {Pedidos} from "./pages/Pedidos.jsx";
import ProdutoDesc from "./pages/ProdutoDesc.jsx";
import Page404 from './pages/Page404.jsx';
import App from './App.jsx';
import { GlobalStyle } from './GlobalStyle.jsx';
import { CarrinhoProvider } from './context/CarrinhoContext.jsx';

const router = createBrowserRouter([

    {
        path: "/",
        element: <App />,
        errorElement: <Page404 />,
        children: [

            {
                path: "/",
                element: <Login />,
                errorElement: <Page404 />,
            },
            {
                path: "/cadastrar",
                element: <Cadastrar />,
                errorElement: <Page404 />,
            },
            {
                path: "/produtos",
                element: <Produtos />,
                errorElement: <Page404 />
            },
            {
                path: "/pedidos/:id",
                element: <Pedidos />,
                errorElement: <Page404 />
            },
            {
                path: "/finalizar",
                element: <Pedido />,
                errorElement: <Page404 />
            },
            {
                path: "/produtos/:id",
                element: <ProdutoDesc />,
                errorElement: <Page404 />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(

    <>
        <CarrinhoProvider>
            <GlobalStyle />
            <RouterProvider router={router} />
        </CarrinhoProvider>
    </>
)