import React from 'react';
import styles from './Success.module.css';
import { AiFillCheckCircle } from "react-icons/ai";


const Success = (props) => {
    return (
        <div className={styles.successContainer}>
            <AiFillCheckCircle className={styles.successIcon}/>
            <h2 className={styles.successTitle}>
                Success
            </h2>
            <p className={styles.successText}>An invitation has been sent to all {props.count} users.</p>
            <button onClick={() => window.location.reload()} className={styles.successButton}>back</button>
        </div>
    )
}

export default Success;