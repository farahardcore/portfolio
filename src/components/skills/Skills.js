import React from 'react';
import styles from "./Skills.module.css"
import styleContainer from "../../common/styles/Container.module.css";

import Skill from "./Skill";
import Title from "../../common/components/title/title";

function Skills() {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
               <Title title="Skills"/>
                <div className={styles.skills}>
                    <Skill title="HTML"/>
                    <Skill title="CSS"/>
                    <Skill title="JavaScript"/>
                </div>

            </div>
        </div>
    );
}

export default Skills;
