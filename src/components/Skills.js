import React from 'react';
import styles from "./Skills.module.css"
import Skill from "./Skill";

function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <span className={styles.title} >SKILLS</span>
                <div className={styles.skillsList}>
                    <Skill name="HTML"/>
                    <Skill name="CSS"/>
                    <Skill name="JavaScript"/>
                </div>

            </div>
        </div>
    );
}

export default Skills;
