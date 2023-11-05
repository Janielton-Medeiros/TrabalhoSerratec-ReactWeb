import { createContext, useState } from "react";

export const CarrinhoContext = createContext({})

export const CarrinhoProvider = ({ children }) =>{
    const[nome, setNome] = useState("")
    const [preco, setPreco] = useState(0)
    const [quantidade, setQuantidade] = useState(1)
    const [listaProduto, setListaProduto] = useState([])
    const [produto, setProduto] = useState([])
    return(

        <CarrinhoContext.Provider value={{ nome, setNome, preco, setPreco, quantidade, setQuantidade, listaProduto, setListaProduto, produto, setProduto}}>
            {children}
        </CarrinhoContext.Provider>
    )    
}