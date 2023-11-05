import { createContext, useState } from "react";

export const CarrinhoContext = createContext()

export const CarrinhoProvider = ({ children }) => {
    
    const [produtos, setProdutos] = useState([])
    const [produto, setProduto] = useState({})
    const [quantidade, setQuantidade] = useState(1)

    return(

        <CarrinhoContext.Provider value={{ produto, setProduto, produtos, setProdutos, quantidade, setQuantidade }}>
            {children}
        </CarrinhoContext.Provider>
    )    
}