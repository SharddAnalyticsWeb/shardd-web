import React from 'react';
import { MdClose } from "@react-icons/all-files/md/MdClose";
import { MdOpenInNew } from "@react-icons/all-files/md/MdOpenInNew"

import projectData from '../data/projectData';

export default function ProjectScreen({ projectScreen, setProjectScreen }) {
    const data = projectData[projectScreen.id];

    const handleClose = () => {
        setProjectScreen({id: projectScreen.id, isOpen: false});
        setTimeout(() => setProjectScreen({id: -1, isOpen: false}), 250) // delay added to prevent 404 error showing during closing animation    
        document.addEventListener('click', handleClose);

        return () => {
            document.removeEventListener('click', handleClose);
        };
    }
    return (
        <div 
            className="project-screen-container"
            style={projectScreen.isOpen ? {opacity: 1, pointerEvents: 'unset'} : null}
            onClick={() => handleClose()}>
            <div className="project-screen" style={projectScreen.isOpen ? {transform: 'none', opacity: 1} : null}>
                {data ?
                    <> 
                        <div 
                            className="cover-img" 
                            style={{backgroundImage: 'url('+ data.coverImage +')'}}
                        >
                            <a href={data.projectLink} className="web-link">
                                <p>View Project</p>
                                <MdOpenInNew />
                            </a>
                        </div>
                        <h1>{data.title}</h1>
                        <p>{data.content}</p>

                        <div 
                            className="close-btn"
                            onClick={() => { 
                                setProjectScreen({id: projectScreen.id, isOpen: false});
                                setTimeout(() => setProjectScreen({id: -1, isOpen: false}), 250)} // delay added to prevent 404 error showing during closing animation    
                            }
                        >
                            <MdClose />
                        </div>
                    </>:
                    <h1>404 Not Found</h1>
                }
            </div>
        </div>
    );
}
