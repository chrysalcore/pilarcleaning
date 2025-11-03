import { useNavigate } from 'react-router-dom'
import Title from '../../others/Title'
import Slogan from '../../others/Slogan'
import CTA from "../../others/CTA"

function HeroContent() {
    const nav = useNavigate()

    const handleClick = () => {
        nav('contact')
    }

    return (
        <section className="hero-content">
            <Title />
            <Slogan />
            <CTA onClick={handleClick}>Contact</CTA>
        </section> 
    )
}

export default HeroContent