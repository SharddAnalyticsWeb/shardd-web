import * as React from "react"
import projects from "../data/projectData"

const ProjectSection = ({ setProjectScreen }) => {

    const handleProject = (id) => {
        
        console.log(id)
        document.addEventListener('mousedown', handleProject);

        return() => {
            document.removeEventListener('mousedowm', handleProject);
        }
    }

    return ( 
        <section className="project-section">
            <h1>Projects</h1>
            <div className="card-container" id="less-cards"> {/* Remove less-cards when no of cards > 3 */}
                {projects.map((project) => {
                    return (
                        <div 
                            className="project-card"
                            onClick={() => { setProjectScreen({id: project.id, isOpen: true}); }}
                            onKeyDown={() => { handleProject(project.id) }}
                            key={project.id}
                        >
                            <div className="card-image" style={{backgroundImage: 'url('+ project.cardImage + ')'}}></div>
                            <div className="card-des">
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
     );
}
 
export default ProjectSection;