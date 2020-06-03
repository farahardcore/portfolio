import React from 'react';
import styles from "./Projects.module.scss"
import Project from "./Project";
import styleContainer from "../../common/styles/Container.module.scss";
import Title from "../../common/components/title/title"
import imgUrl from "../../assets/image/soc.png"


function Projects() {
    const social = {
        backgroundImage : `url(${imgUrl})`,
        backgroundRepeat : "no-repeat"
    };
    return (
        <div className={styles.projects}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <Title title="Projects"/>
                <div className={styles.myProjects}>
                    <Project style={social} title="Social NEtwork" description="What is love baby dont heart me"/>
                    <Project style={social} title="ToDoList" description="hello hi how are you man"/>
                </div>


            </div>
        </div>
    );
}

export default Projects;
