import {ActionsType, DialogsType, MessageType} from "../types";

const SEND_MESSAGE = "SEND_MESSAGE";

const initialState = {
    dialogs: [
        {id: 1, name: 'Димыч'},
        {id: 2, name: 'Андрей'},
        {id: 3, name: 'Света'},
        {id: 4, name: 'Саша'},
        {id: 5, name: 'Валера'},
        {id: 6, name: 'Маша'}
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ] as Array<MessageType>
};

type InitialStateType = typeof initialState

const dialogs_reducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            const body = action.newMessageBody;
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {id: 6, message: body}
                ]
            };
        default:
            return state;
    }
};

export const sendMessageAC = (newMessageBody: string) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    } as const
};

export default dialogs_reducer