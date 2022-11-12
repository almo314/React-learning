import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello, it is the first post!' , likesCount: 17},
                {id: 2, message: 'Hello, it is the second post!!' , likesCount: 12},
            ],
            newPostText: '',
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Sasha'},
                {id: 2, name: 'Alex'},
                {id: 3, name: 'Vlad'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hi hi'},
                {id: 3, message: 'Bye'},
                {id: 4, message: 'Bye bye'},
            ],
            newMessageBody: '',
        },

        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
};

export default store;
window.store = store;