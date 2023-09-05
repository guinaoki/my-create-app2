import { Link } from "react-router-dom"
import { listaProdutos } from "../../JS/listaProdutos"
import { BiSolidKeyboard } from 'react-icons/bi'
import {BsFillMouse2Fill} from 'react-icons/bs'

export default function Produtos(){
    return(
        <main>
            <h1>Produtos</h1>
            {listaProdutos.map(prod => (
                <div key={prod.id}>
                    <Link to={`/produtos/editar/${prod.id}`}>
                        Editar o produto: {prod.nome}
                    </Link>
                </div>
            ))}
            <div className="logoTeclado">
                <BiSolidKeyboard size='1rem'/>
            </div>
            <div className="logoMouse">
                <BsFillMouse2Fill size='1rem'/>
            </div>
        </main>
    )
}