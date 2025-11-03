function ContactItem({ icon, name, text, href }) {
    return (
        <li className="contact-item">
            <img className="contact-item__img" src={new URL(`../../../assets/icons/${icon}`, import.meta.url).href} alt={`${name} icon`} loading="lazy" />
            <a className="contact-item__link" href={href} rel="noopener noreferrer">
                <h3 className="contact-item__title">{name}</h3>
                <p className="contact-item__text">{text}</p>
            </a>
        </li>
    )
}

export default ContactItem