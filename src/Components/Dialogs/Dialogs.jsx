import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/'+props.id}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
};

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name='Sasha' id='1'/>
                <DialogItem name='Lesha' id='2'/>
                <DialogItem name='Vlad' id='3'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='Hi hi'/>
                <Message message='Bye'/>
                <Message message='Bye bye'/>
            </div>
        </div>
    );
};

export default Dialogs;