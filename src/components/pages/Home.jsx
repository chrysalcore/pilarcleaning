import Section from "../global/Section"
import AdvantagesList from "../sections/advantages/AdvantagesList"
import ServicesList from "../sections/services/ServicesList"
import AreaMap from "../sections/area/AreaMap"
import FAQList from "../sections/faq/FAQList"

function Home() {
    return (
        <>
            <Section type={'advantages'}>
                <AdvantagesList />
            </Section>
            <Section type={'services'}>
                <ServicesList />
            </Section>
            <Section type={'area'}>
                <AreaMap />
            </Section>
            <Section type={'faq'}>
                <FAQList />
            </Section>
        </>
    )
}

export default Home