function FooterNav({ data }) {
    return (
        <nav className="footer-nav">
            <ul className="footer-nav-list">
            {data.map(item => {
                return (
                    <li className="footer-nav__item" key={item.name}>
                        <a href={item.href} className='footer-nav__link' target="__blank" rel="noopener noreferrer" >{item.text}</a>
                    </li>
                )
            })}
            </ul>
        </nav>
    )
}

export default FooterNav