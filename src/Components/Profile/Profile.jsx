import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../Redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div>
            <div>
                <ProfileInfo />
                <MyPostsContainer store={props.store}/>
            </div>
        </div>
    );
};

export default Profile;