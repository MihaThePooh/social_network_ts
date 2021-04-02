import React from "react";
import {UsersPropsType} from "./UsersContainer";
import s from "./Users.module.css"


export function Users(props: UsersPropsType) {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                fullName: "Yury",
                status: "I am a programmer",
                photoURL: "",
                followed: true,
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 2,
                photoURL: "",
                followed: true,
                fullName: "Sergey",
                status: "I am a boss",
                location: {city: "Moscow", country: "Russia"}
            },
            {
                id: 3,
                photoURL: "",
                followed: true,
                fullName: "Sasha",
                status: "I am a storekeeper",
                location: {city: "Kiev", country: "Ukrane"}
            }
        ])
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={s.userAva} src={u.photoURL}/>
                        </div>
                        <div>
                            {u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}