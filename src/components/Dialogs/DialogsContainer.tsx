import React from 'react'
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs_reducer";
import {AppStateType} from "../../redux/redux_store";
import {Dispatch} from "redux";

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogs_reducer
    }
};
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer
