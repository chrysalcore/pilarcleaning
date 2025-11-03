import FooterNav from './FooterNav'
import Logo from '../../others/Logo'
import Nav from '../../others/Nav'
import { contact as data } from '../../../data/contact'

function FooterContent() {
    return (
        <ul className='footer-content'>
            <li className='footer-list'>
                <h3 className='footer__header'>Pages</h3>
                <Nav />
            </li>
            <li className='footer-list'>
                <h3 className='footer__header'>Contact</h3>
                <FooterNav data={data.slice(1)} />
            </li>
            <li className='footer-list'>
                <Logo />
                <h2 className='footer__title'>Pilar <span>Cleaning Services LLC</span></h2>
            </li>
        </ul>
    )
}

export default FooterContent