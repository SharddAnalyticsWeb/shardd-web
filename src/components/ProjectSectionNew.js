import React from 'react'
import projects from "../data/projectData"

export default function ProjectSectionNew({ setProjectScreen }) {
    const dataA = projects[0];
    const dataB = projects[1];

    return (
        <section className="projects-section-new" id="projects">
            <div className="project">
                <div className="project-shape"></div>
                <img src={dataA.coverImage} alt="coverImage" data-aos="fade-in" data-aos-delay="150" data-aos-anchor-placement="bottom-bottom"/>

                <div className="project-content" data-aos="fade-up" data-aos-delay="800" data-aos-offset="100" data-aos-anchor-placement="bottom-bottom">
                    <h1>{dataA.title}</h1>
                    <p>{dataA.content}</p>
                    <button onClick={() => { setProjectScreen({id: dataA.id, isOpen: true}); }}>Read More</button>
                    <button>View Project</button>
                </div>
            </div>

            <div className="project">
                <div className="project-content" data-aos="fade-left" data-aos-delay="800" data-aos-offset="100" data-aos-anchor-placement="bottom-bottom">
                    <h1>{dataB.title}</h1>
                    <p>{dataB.content}</p>
                    <button onClick={() => { setProjectScreen({id: dataB.id, isOpen: true}); }}>Read More</button>
                    <button>View Project</button>
                </div>

                <div className="project-shape"></div>
                <img src={dataB.coverImage} alt="coverImage" data-aos="fade-in" data-aos-delay="150" data-aos-anchor-placement="bottom-center"/>
            </div>
        </section>
    )
}
