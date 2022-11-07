import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = () => {
    let dialogs = [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Lesha'},
        {id: 3, name: 'Vlad'},
    ];
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi hi'},
        {id: 3, message: 'Bye'},
        {id: 4, message: 'Bye bye'},
    ];
    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElement = messages.map(message => <Message message={message.message}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    );
};

export default Dialogs;