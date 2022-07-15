import {Link} from 'react-router-dom'
import './menu.css'

function Menu() {
    return(
        <ul className='lista-menu'>
            <li className='item-menu'>
                <Link to="/">Sobre</Link>
            </li>
            <li className='item-menu'>
                <Link to="portfolio">Portfólio</Link>
            </li>
            <li className='item-menu'>
                <Link to="comentarios">Comentários</Link> 
            </li>
        </ul>

    )
}

export default Menu