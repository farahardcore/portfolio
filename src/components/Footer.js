import React from 'react';
import styles from "./Footer.module.css"
import Link from "./Link";

function Footer() {
  return (
    <div className={styles.footer} >
        <div className={styles.container}>
            <div className={styles.title}>
                <span>Farid Mohammad</span>
            </div>
            <div className={styles.links}>
                <Link/>
                <Link/>
                <Link/>
            </div>
            <div className={styles.end}>
                <span>$All rights recerved 2020</span>
            </div>
        </div>
    </div>
  );
}

export default Footer;
