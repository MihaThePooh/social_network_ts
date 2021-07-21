import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfileType} from "../../types";
import {getUserProfile} from "../../redux/profile_reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {AppStateType} from "../../redux/redux_store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}
type MapStateToPropsType = {
    profile: ProfileType
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
}
type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

function ProfileContainer(props: PropsType) {

    useEffect(() => {
        let userId = props.match.params.userId;
        props.getUserProfile(+userId);
    }, []);

    return (
        <Profile {...props.profile}/>
    )
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profile_reducer.profile
});

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)