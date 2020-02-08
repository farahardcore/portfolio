import React from 'react';
import styles from "./Contacts.module.css"

function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
              <div className={styles.title}>
                  <span>Contacts</span>
              </div>
                <div className={styles.form}>
                    <form action="submit">
                        <div>
                            <input className={styles.form} type="text"/>
                        </div>
                        <div>
                            <input className={styles.form} type="text"/>
                        </div>
                        <div>
                            <textarea className={styles.form} cols="30" rows="10"></textarea>
                        </div>




                    </form>
                </div>
                <div className={styles.submit}>
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
