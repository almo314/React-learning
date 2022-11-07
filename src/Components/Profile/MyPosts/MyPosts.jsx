import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let posts = [
        {id: 1, message: 'Hello, it is the first post!' , likesCount: 17},
        {id: 2, message: 'Hello, it is the second post!!' , likesCount: 12},

    ];
    let postsElements = posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>);
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;