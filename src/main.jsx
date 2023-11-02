import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/login.jsx";
import Pedidos from "./pages/Pedidos.jsx";
import ProdutoDesc from "./pages/ProdutoDesc.jsx";
import Page404 from './pages/Page404.jsx';



const router = createBrowserRouter([
{
    path: "/",
    element: <Login/>,
    errorElement: <Page404/>,
},
{
        
    path: "/home",
    element: <Home/>,
    errorElement: <Page404/>
        
},
{
    path: "/pedidos/:id",
    element: <Pedidos />,
    errorElement: <Page404/>,
},
{
    path: "/produtodesc/:id",
    element: <ProdutoDesc />,
    errorElement: <Page404/>,
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <RouterProvider router={router} />
</React.StrictMode>,
)