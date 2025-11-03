import { useEffect, useRef } from 'react'
import '../../assets/styles/About.css'
import AboutList from "../sections/about/AboutList"
import Section from '../global/Section'

function About() {
    const ref = useRef()
    
    useEffect(() => {
        ref.current.scrollIntoView()
    }, [])

    return (
        <Section type={'about'} ref={ref} >
            <AboutList />
        </Section>
    )
}

export default About