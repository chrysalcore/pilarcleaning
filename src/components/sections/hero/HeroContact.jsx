function HeroContact() {
    return (
        <ul>
            {data.map(item => (
                <ContactItem {...item} key={item.name} />
            ))}
        </ul>
    )
}

function ContactItem({ name, href, icon }) {
    return (
        <li className="contact-item">
            <a className="contact-item__link" href={href}><img className="contact-item__img" src={new URL(`../../../assets/icons/${icon}`, import.meta.url).href} alt={`${name} icon`} /></a>
        </li>
    )
}

export default HeroContact