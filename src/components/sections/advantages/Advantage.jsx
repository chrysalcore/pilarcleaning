function Advantage({ icon, name, desc }) {
    return (
        <li className="advantage">
            <img className="advantage__img" src={new URL(`../../../assets/icons/${icon}`, import.meta.url).href} alt={`${name} icon`} loading="lazy" />
            <h3 className="advantage__name">{name}</h3>
            <p className="advantage__desc">{desc}</p>
        </li>
    )
}

export default Advantage