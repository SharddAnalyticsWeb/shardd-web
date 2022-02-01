import React from 'react';
import { MdClose } from "@react-icons/all-files/md/MdClose";

import serviceData from '../data/serviceData';

export default function ServicePopup({ serviceScreen, setServiceScreen }) {
    const data = serviceData[serviceScreen.id];

    return (
        <div 
            className="service-popup-container" 
            style={serviceScreen.isOpen ? {opacity: 1, pointerEvents: 'unset'} : null}
            onClick={() => { 
                setServiceScreen({id: serviceScreen.id, isOpen: false});
                setTimeout(() => setServiceScreen({id: -1, isOpen: false}), 250)} // delay added to prevent 404 error showing during closing animation    
            }
        >
            <div className="service-popup" style={serviceScreen.isOpen ? {transform: 'none', opacity: 1} : null}>
                <div 
                    className="close"
                    onClick={() => { 
                        setServiceScreen({id: serviceScreen.id, isOpen: false});
                        setTimeout(() => setServiceScreen({id: -1, isOpen: false}), 250)} // delay added to prevent 404 error showing during closing animation    
                    }
                >
                    <MdClose />
                </div>
                {data ? 
                    <>
                        <h1>{data.title}</h1>
                        <p>{data.content}</p>
                    </>:
                        <h1>404 Not Found</h1>
                }
            </div>
        </div>
    );
}