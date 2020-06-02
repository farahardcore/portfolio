import React from 'react';
import styles from "./Skill.module.css"

function Skill(props) {
  return (
    <div className={styles.skill} >
      <div className={styles.icon}>
          <img src="" alt="logo"/>
      </div>
        <h3>{props.title}</h3>
      <div className={styles.description}>
          <span>Advanced description about skill</span>
      </div>
    </div>
  );
}

export default Skill;
