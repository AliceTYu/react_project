import React from 'react';
import s from './FindUsers.module.css';

const FindUsers = (props) => {
    return (
        <div className={s.userPart}>
            <h1>Users</h1>
            {
                props.users.map(u => <div className={s.part} key={u.id}>
                    <div className={s.leftPart}>
                        <div>
                            <img src={u.photoUrl} className={s.photo} alt="error" />
                        </div>
                        <div>
                            {u.followed ? <button onClick={()=>{props.unfollow(u.id)}}>UNFOLLOW</button> : <button onClick={()=>{props.follow(u.id)}}>FOLLOW</button>}
                        </div>
                    </div>
                    <div className={s.rightPart}>
                        <div className={s.partIngo}>
                            <div className={s.partName}>{u.fullName}</div>
                            <div className={s.partStatus}>{u.status}</div>
                        </div>
                        <div className={s.partLocation}>
                            <div className={s.partCountry}>{u.location.country}</div>
                            <div className={s.partCity}>{u.location.city}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default FindUsers;