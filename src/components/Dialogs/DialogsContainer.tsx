import React from 'react'
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {sendMessageAC} from "../../redux/dialogs_reducer";
import {AppStateType} from "../../redux/redux_store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogs_reducer,
        isAuth: state.auth_reducer.isAuth
    }
};
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageAC(newMessageBody))
        }
    }
};

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
