import { NavLink, useNavigate } from 'react-router-dom'
import data from '../../data/navigation'

function Nav({ active, handleMenu }) {
    return (
        <nav className={active? "nav active" : "nav"}>
            <ul className="nav-list">
            {data.map(item => {
                return (
                    <li className="nav-list__item" key={item.text}>
                        <NavLink to={item.href} className={({isActive}) => (isActive? 'selected nav-list__link' : 'nav-list__link')} rel="noopener noreferrer" onClick={handleMenu}>{item.text}</NavLink>
                    </li>
                )
            })}
            </ul>
        </nav>
    )
}

export default Nav