
import styles from "./Projects.module.scss";
import cards from './data/cardlist'; 
import ProjectItem from './Cards';


  
export default function Projects() {
  return (
    <div className={styles.projects}>{cards.projects.map((project) => (
      <ProjectItem 
        project={project} 
        key={project.id}>
      </ProjectItem>
     ))}
    </div>
  )
}