import { Link } from "react-router-dom"
import { listaProdutos } from "../../JS/listaProdutos"
import styles from './Produtos.css'
import { BiSolidKeyboard } from 'react-icons/bi'
import {BsFillMouse2Fill} from 'react-icons/bs'
import {FiMonitor} from 'react-icons/fi'
import {BiSolidPencil} from 'react-icons/bi'

export default function Produtos(){
    return(
        <main>
            <h1>Produtos</h1>
            {listaProdutos.map(prod => (
                <div key={prod.id} className="style.nomeProdutos">
                    <Link to={`/produtos/editar/${prod.id}`}>
                       <BiSolidPencil/> Editar o produto: {prod.nome} 
                    </Link>
                </div>
            ))}
        </main>
    )
}