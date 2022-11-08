import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello, it is the first post!' , likesCount: 17},
            {id: 2, message: 'Hello, it is the second post!!' , likesCount: 12},
        ],
    },

    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hi hi'},
            {id: 3, message: 'Bye'},
            {id: 4, message: 'Bye bye'},
        ],
        dialogs: [
            {id: 1, name: 'Sasha'},
            {id: 2, name: 'Lesha'},
            {id: 3, name: 'Vlad'},
        ],
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 5
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};
export default state;