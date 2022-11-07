import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-literary-flowers-retro-background-image_17072.jpg' />
            </div>
            <div className={s.description}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;