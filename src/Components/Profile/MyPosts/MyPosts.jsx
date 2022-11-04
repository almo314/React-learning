import React from 'react';
import s from './MyPosts.module.css';
import Post1 from './Post1/Post1';

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                New Posts
            </div>
            <div className={s.posts}>
                <Post1/>
                <Post1/>
                <Post1/>
            </div>
        </div>
    );
};

export default MyPosts;