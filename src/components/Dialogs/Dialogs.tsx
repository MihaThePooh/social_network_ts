import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../types";
import { Redirect } from "react-router-dom";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
    isAuth: boolean
}

function Dialogs(props: DialogsPropsType) {

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name}
                                                                              key={dialog.id}
                                                                              id={dialog.id}/>);
    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message}
                                                                              key={message.id}
                                                                              id={message.id}/>);

    const onSendMessageClickHandler = () => {
        props.sendMessage()
    };

    const onNewMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea placeholder='enter your message'
                                   value={props.dialogsPage.newMessageBody}
                                   onChange={onNewMessageChangeHandler}/></div>
                    <div>
                        <button onClick={onSendMessageClickHandler}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs