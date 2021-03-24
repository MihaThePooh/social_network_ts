import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

type RootStateType = {
    dialogsPage: DialogsPageType
}
type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
type DialogsType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}

function Dialogs(props: RootStateType) {

    let dialogsElements = props.dialogsPage.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messagesElements = props.dialogsPage.messages.map( message => <Message message={message.message} id={message.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea placeholder='enter your message'></textarea></div>
                    <div>
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs