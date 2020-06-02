import React from 'react';
import styles from "./Projects.module.css"
import Project from "./Project";
import styleContainer from "../../common/styles/Container.module.css";


function Projects() {
    return (
        <div className={styles.projects}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <div className={styles.title}>
                    <h2>My Projects</h2>
                </div>
                <div className={styles.myProjects}>
                    <Project title="Social NEtwork" description="saddsassdas"/>
                    <Project title="ToDoList" description="saddsassdas"/>
                </div>


            </div>
        </div>
    );
}

export default Projects;
