import React from 'react';
import styles from './User.module.css';
import { MdAlternateEmail } from "react-icons/md";
import userAvatar from '../../assets/images/userAvatar.png';
import plusIcon from './../../assets/images/plus.png';
import minusIcon from './../../assets/images/minus.png';

const User = (props) => {
    return (
        <li>
            <div className={styles.userContainer}>
                <img className={styles.avatar} src={props.avatar ? props.avatar : userAvatar} alt="avatar" />
                <div className={styles.nameContainer}>
                    <h3 className={styles.userName}>{props.first_name} {props.last_name}</h3>
                    <span className={styles.userEmail}>
                        <MdAlternateEmail className={styles.emailIcon}/>
                        <p>{props.email}</p>
                    </span>
                </div>
                <img onClick={() => props.onClickInvite(props.id)} src={props.isInvited ? minusIcon : plusIcon} className={styles.addIcon} alt='plusIcon'/>
            </div>
            
        </li>
    )
}

export default User;