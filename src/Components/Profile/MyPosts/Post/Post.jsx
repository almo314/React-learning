import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://st2.depositphotos.com/1471096/7466/i/600/depositphotos_74661735-stock-photo-angry-wolf-head.jpg' />
            {props.message}
            <div>
                like {props.likesCount}
            </div>
        </div>
    );
};

export default Post;