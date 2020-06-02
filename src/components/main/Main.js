import React from 'react';
import styles from "./Main.module.css"
import styleContainer from "../../common/styles/Container.module.css";

function Main() {
    return (
        <div className={styles.main}>
            <div className={styleContainer.container}>
                <div className={styles.greeting}>
                    <span>Hello</span>
                    <h1>I am  Farid Mohammad</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={styles.photo}>
                    <img src="" alt="photo"/>
                </div>
            </div>
        </div>
    );
}

export default Main;
