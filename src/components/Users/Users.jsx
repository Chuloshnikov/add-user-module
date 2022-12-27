import React from 'react';
import styles from './Users.module.css';
import { SlMagnifier } from 'react-icons/sl';
import Skeleton from './../Skeleton/Skeleton';
import User from './User';

const Users = (props) => {
    console.log(props.searchValue);
    return (
        <div className={styles.usersContainer}>
            <div className={styles.search}>
                <div className={styles.searchContainer}>
                    <SlMagnifier className={styles.searchIcon}/>
                    <input value={props.searchValue} onChange={props.onChangeSearchValue} type="text" placeholder='Search user...'/>
                </div>
            </div>
            { props.isLoading ? (
                <div className={styles.skeletonList}>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            ) : (
                <ul className={styles.userList}>
                    {
                        props.items.filter( obj => {
                            const fullName = (obj.first_name + obj.last_name).toLowerCase();
                          
                                return fullName.includes(props.searchValue.toLowerCase()) || obj.email.toLowerCase().includes(props.searchValue.toLowerCase());
                            })
                        .map(obj => (
                            <User onClickInvite={props.onClickInvite} isInvited={props.invites.includes(obj.id)} key={obj.id} {...obj}/>
                        ))
                    }
                </ul>
            )}
            {
                props.invites.length > 0 && <button 
                onClick={props.onClickSendInvites} 
                className={styles.sendInviteBtn}>send invite</button>
            }
            
        </div>
    )
}

export default Users;