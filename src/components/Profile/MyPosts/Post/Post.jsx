import React from 'react';
import s from './Post.module.css';
import avaPhoto from "../../../../img/ava_1.jpg";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={avaPhoto}/>
            {props.message}
            <div><span>like {props.likesCount}</span></div>
        </div>
    );
};

export default Post;