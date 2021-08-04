import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfileType} from "../../types";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile_reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AppStateType} from "../../redux/redux_store";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}
type MapStateToPropsType = {
    profile: ProfileType
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}
type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

function ProfileContainer(props: PropsType) {
    console.log(props);
    useEffect(() => {
        let userId = +props.match.params.userId;
        if(!userId) {
            userId = 14348 // мой айди
        }
        props.getUserProfile(userId)
    }, []);

    return (
        <Profile {...props} getStatus={props.getStatus} updateStatus={props.updateStatus}/>
    )
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profile_reducer.profile
});

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
)(ProfileContainer)