import { useEffect, useRef } from 'react'
import '../../assets/styles/Contact.css'
import Section from '../global/Section'
import ContactContent from "../sections/contact/ContactContent"
import ContactInfo from "../sections/contact/ContactInfo"
import ContactForm from "../sections/contact/ContactForm"

function Contact() {
    const ref = useRef()

    useEffect(() => {
        ref.current.scrollIntoView()
    }, [])

    return (
        <Section type={'contact'} ref={ref} >
            <ContactContent>
                <ContactInfo />
                <ContactForm />
            </ContactContent>
        </Section>
    )
}

export default Contact