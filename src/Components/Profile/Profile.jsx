import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../Redux/store";

const Profile = (props) => {

    return (
        <div>
            <div>
                <ProfileInfo />
            </div>
            <div>
                <MyPosts posts={props.profilePage.posts} dispatch={props.dispatch}/>
            </div>
        </div>
    );
};

export default Profile;