import { useState } from "react";
import "../../../assets/styles/FAQ.css";
import FAQItem from './FAQItem'
import data from "../../../data/faq"

function FAQList() {
    const [id, setId] = useState(0)

    return (
        <div className="faq-list">
            {data.map(item => (
                <FAQItem {...item} active={id === item.id} setId={setId} key={item.question} />
            ))}
        </div>
    )
}

export default FAQList