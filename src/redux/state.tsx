import {renderTree} from "../render";

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

let state: RootStateType = {
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
};


export const addPost = () => {
    debugger
    const newPost: PostsType = {
        id: new Date().getTime(),
        message: state.profilePage.messageForNewPost,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.messageForNewPost = "";

    renderTree(state)
};

export const onPostChange = (newText: string) => {
    state.profilePage.messageForNewPost = newText;
    renderTree(state)
};


export default state