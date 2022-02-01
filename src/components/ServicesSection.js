import * as React from "react"
import services from "../data/serviceData"

const ServicesSection = ({ setServiceScreen }) => {
    return ( 
        <section className="services-section">
            <div className="services-title">
                <h1>What we offer?</h1>
            </div>
            <div className="services-grid">
                {services.map((service) => {
                    return (
                        <div 
                            className="service-box"
                            onClick={() => { setServiceScreen({id: service.id, isOpen: true}) }} 
                            key={service.id}
                        >
                            <div 
                                className="bg-img" 
                                style={{backgroundImage: 'url('+service.image+')'}}>
                            </div>
                            <p>{service.title}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}
 
export default ServicesSection;