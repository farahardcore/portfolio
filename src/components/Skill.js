import React from 'react';
import styles from "./Skill.module.css"

function Skill(props) {
  return (
    <div className={styles.skill} >
      <div className={styles.title}>
          <img src="" alt="logo"/>
        <span>{props.name}</span>
      </div>
      <div className={styles.description}>
          <span>Advanced description about skill</span>
      </div>
    </div>
  );
}

export default Skill;
