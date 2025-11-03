import '../../assets/styles/Banner.css'
import { contact } from "../../data/contact"

function Banner() {
    return (
        <section className="banner section">
            {contact.slice(2,).map(item => (
                <BannerItem {...item} key={item.name} />
            ))}
        </section>
    )
}

function BannerItem({ name, text, href }) {
    return (
        <a className="banner-link" href={href} target='__blank' rel='noopener noreferrer' >
            <h2 className="banner-link__name">{name}</h2>
            <p className="banner-link__text">{text}</p>
        </a>
    )
}

export default Banner