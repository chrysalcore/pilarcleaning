import SectionHeader from './SectionHeader';
import data from '../../data/headers'

function Section({ children, type, ref = null }) {
    return (
        <section ref={ref} className={`${type} section`} id={data[type]} >
            <SectionHeader {...data[type]} />
            {children}
        </section>
    )
}

export default Section;