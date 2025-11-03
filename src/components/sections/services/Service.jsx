import { useNavigate } from 'react-router-dom'
import CTA from '../../others/CTA'

function Service({ img, title, desc }) {
    const nav = useNavigate()

    const handleClick = () => {
        nav('contact')
    }

    return (
        <li className="service">
            <img className="service__img" src={new URL(`../../../assets/imgs/${img}`, import.meta.url).href} alt={`${title} icon`} loading='lazy' />
            <div className="service-text"> 
                <h3 className="service__title">{title}</h3>
                <p className="service__desc">{desc}</p>
                <CTA onClick={handleClick}>Get On the Schedule</CTA>
            </div>
        </li>
    )
}

export default Service