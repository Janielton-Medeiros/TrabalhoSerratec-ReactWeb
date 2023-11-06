import { createContext, useState } from "react";

export const CarrinhoContext = createContext()

export const CarrinhoProvider = ({ children }) => {
    
    const [produtos, setProdutos] = useState([])
    const [itens, setItens] = useState([])
    const [produto, setProduto] = useState({})
    const [usuario, setUsuario] = useState({})
    const [quantidade, setQuantidade] = useState(1)

    const limparCarrinho = () => {

        setProdutos([]);
    };

    return(

        <CarrinhoContext.Provider value={{itens, setItens, usuario, setUsuario ,produto, setProduto, produtos, setProdutos, quantidade, setQuantidade, limparCarrinho }}>
            {children}
        </CarrinhoContext.Provider>
    )    
}