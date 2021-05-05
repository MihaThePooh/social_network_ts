import React, {useEffect} from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType} from "../../types";
import {setUserProfile} from "../../redux/profile_reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AppStateType} from "../../redux/redux_store";

type PathParamsType = {
    userId: string
}
type MapStateToPropsType = {
    profile: ProfileType
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

function ProfileContainer(props: PropsType) {

    useEffect(() => {
        let userId = props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                props.setUserProfile(response.data);
            });
    }, []);

    return (
        <Profile {...props.profile}/>
    )
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profile_reducer.profile
});

export default connect(mapStateToProps, {
    setUserProfile
})(withRouter(ProfileContainer))