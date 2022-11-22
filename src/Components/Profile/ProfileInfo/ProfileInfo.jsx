import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src='https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-literary-flowers-retro-background-image_17072.jpg' />
            </div>
            <div className={s.description}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;