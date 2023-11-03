import { useState } from "react"
import { api } from '../api/Api'


const ProdutoDesc = () => {

    const CadastroProd= () => {
        const [nome, setNome] = useState('')
        const [preco, setPreco] = useState('')
        const [quantidade, setQuantidade] = useState('')
        const [descricao, setDescricao] = useState('')
        const [img, setImg] = useState('')
        const [favoritos, setFavoritos] = useState ('')
    
            const handleSave = async (e) => {
                e.preventDefault()
                await api.post('/produtos', {nome, preco, quantidade, descricao, img, favoritos, like: 0})
                
            }
    
            const handleLimpar = () => {
                setNome('')
                setEmail('')
                setSenha('')
                }
            }
        

    return(
        <>
        <div>TESTE PRODUTO DESCRIÇÃO</div>
        </>
    )
}

export default ProdutoDesc