type MessageType = {
    id: number
    message: string
}
type DialogsType = {
    id: number
    name: string
}
type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
type PostsType = {
    id: number
    message: string
    likesCount: number
}
type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostsType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type StoreType = {
    _state: RootStateType
    _onChange: (store: StoreType) => void
    subscribe: (callback: (store: StoreType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewText>

export const addPostAC = (postText: string) => {
    return {
        type: "ADD_POST",
        postText: postText
    } as const
};
export const changeNewText = (newText: string) => {
    return {
        type: "CHANGE_NEW_TEXT",
        newText: newText
    } as const
};

const store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: "",
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 45},
                {id: 2, message: 'Programming.....', likesCount: 18}
            ]
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Димыч'},
                {id: 2, name: 'Андрей'},
                {id: 3, name: 'Света'},
                {id: 4, name: 'Саша'},
                {id: 5, name: 'Валера'},
                {id: 6, name: 'Маша'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ]
        }
    },
    _onChange(store: StoreType) {
        console.log("state changed")
    },
    subscribe(callback: (store: StoreType) => void) {
        this._onChange = callback
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === "ADD_POST") {
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.messageForNewPost = "";
            this._onChange(store)
        } else if (action.type === "CHANGE_NEW_TEXT") {
            this._state.profilePage.messageForNewPost = action.newText;
            this._onChange(store)
        }
    }
};


export default store