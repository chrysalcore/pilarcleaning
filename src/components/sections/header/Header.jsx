import { useState } from 'react'
import '../../../assets/styles/Header.css'
import Logo from '../../others/Logo'
import Nav from '../../others/Nav'
import CTA from '../../others/CTA'

function Header() {
    const [active, setActive] = useState(false)

    const handleMenu = () => {
        setActive(!active)
    }

    const handleClick = () => {
        window.open('tel:17865807657')
    }

    return (
        <section className="header">
            <Logo />
            <Nav active={active} handleMenu={handleMenu} />
            <div className='header-buttons'>
                <CTA onClick={handleClick}>Call Us</CTA>
                <button className='header-button button' onClick={handleMenu}>
                    <img className='header-button__img' src={new URL('../../../assets/icons/menu.svg', import.meta.url).href} alt="menu icon" />
                </button>
            </div>
        </section>
    )
}

export default Header