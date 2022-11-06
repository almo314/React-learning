import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-literary-flowers-retro-background-image_17072.jpg' />
            </div>
            <div>
                ava + description
            </div>
            <div>
                <MyPosts />
            </div>
        </div>
    );
};

export default Profile;