import "../../../assets/styles/Area.css";
import CTA from "../../others/CTA";

function AreaMap() {
    const handleClick = () => {
        window.open('https://www.google.com/maps/place/Roanoke,+Virginia,+EE.+UU./@37.2793162,-80.0383478,12.01z/data=!4m6!3m5!1s0x884d0c4d6aa966fd:0x249dbecbdbb0989b!8m2!3d37.2709116!4d-79.9449495!16zL20vMGsxamc?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D', '__blank', 'noopener noreferrer')
    }

    return (
        <div className="area-pict">
            <img className="area__map" src={new URL('../../../assets/imgs/maps.webp', import.meta.url).href} alt="Roanoke map image" loading="lazy" />
            <h3 className="area__text">Proudly serving <span>Roanoke, Salem, Vinton, and the surrounding communities of the Roanoke Valley</span>. If you live or work in our area, let us be your trusted partner in caring for your space.</h3>
            <CTA onClick={handleClick}>Services Area</CTA>
        </div>
    )
}

export default AreaMap