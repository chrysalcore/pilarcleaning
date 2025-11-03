import "../../../assets/styles/Advantages.css";
import Advantage from "./Advantage";
import data from "../../../data/advantages"

function AdvantagesList() {
    return (
        <ul className="advantages-list">
            {data.map(item => (
                <Advantage {...item} key={item.name} />
            ))}
        </ul>
    )
}

export default AdvantagesList