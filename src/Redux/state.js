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
          if (action.type === 'ADD-POST') {
              let newPost = {
                  id: 5,
                  message: this._state.profilePage.newPostText,
                  likesCount: 5
              };
              this._state.profilePage.posts.push(newPost);
              this._state.profilePage.newPostText = '';
              this._callSubscriber(this._state);
          } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
              this._state.profilePage.newPostText = action.newText;
              this._callSubscriber(this._state);
          }
    },
}

export default store;
window.store = store;