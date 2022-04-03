import * as React from "react"
import img from '../../static/h.jpg'

const IntroSection = () => {
    return ( 
        <section className="intro-section" style={{backgroundImage: 'url(' + img + ')'}}>
            <h1>SHARDD</h1>
            <h2>ANALYTICS</h2>
            <div className="title-line"></div>
        </section>
    );
}
 
export default IntroSection;