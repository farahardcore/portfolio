import React from 'react';
import styles from "./Contacts.module.css"
import styleContainer from "../../common/styles/Container.module.css";


function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                  <h2 className={styles.title}>Contacts</h2>
                    <form className={styles.form}>
                            <input className={styles.form} type="text"/>
                            <input className={styles.form} type="text"/>
                            <textarea></textarea>
                            <button type="submit" className={styles.submitBtn}>Send</button>
                    </form>
            </div>
        </div>
    );
}

export default Contacts;
