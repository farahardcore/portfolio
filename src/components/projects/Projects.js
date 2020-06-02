import React from 'react';
import styles from "./Projects.module.css"
import Project from "./Project";
import styleContainer from "../../common/styles/Container.module.css";
import Title from "../../common/components/title/title";


function Projects() {
    // const social = {
    //     color : "blue",
    //     backgroundImage : `url(${imhUrl})`
    // };
    return (
        <div className={styles.projects}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <Title title="Projects"/>
                <div className={styles.myProjects}>
                    <Project title="Social NEtwork" description="What is love baby dont heart me"/>
                    <Project title="ToDoList" description="hello hi how are you man"/>
                </div>


            </div>
        </div>
    );
}

export default Projects;
