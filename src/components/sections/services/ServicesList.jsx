import '../../../assets/styles/Services.css'
import Service from './Service'
import data from "../../../data/services"

function ServicesList() {
    return (
        <ul className="services-list">
            {data.map((item, index) => (
                <Service {...item} key={index} />
            ))}
        </ul>
    )
}

export default ServicesList