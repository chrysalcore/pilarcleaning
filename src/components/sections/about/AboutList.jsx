import data from "../../../data/about"

function AboutList() {
    return (
        <ul className="about-list">
            {data.map(item => (
                <AboutInfo {...item} key={item.title} />
            ))}
        </ul>
    )
}

function AboutInfo({ title, info }) {
    return (
        <li className="about-info">
            <h3 className="about__title">{title}</h3>
            <ul className="about-text-list">
                {info.map((item, index) => (
                    <li className="about__text" key={index} >{item}</li>
                ))}
            </ul>
        </li>
    )
}

export default AboutList