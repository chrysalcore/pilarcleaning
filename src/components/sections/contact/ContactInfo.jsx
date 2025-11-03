import ContactItem from "./ContactItem"
import { contact as data } from "../../../data/contact"

function ContactInfo() {
    return (
        <ul className="contact-info">
            {data.map(item => (
                <ContactItem {...item} />
            ))}
        </ul>
    )
}

export default ContactInfo