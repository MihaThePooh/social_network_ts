import React from "react";
import s from "./Users.module.css"
import {UserProfileType} from "../../types";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserProfileType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPageHandler: (p: number) => void
}

export function Users(props: UsersPropsType) {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= 10; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {
                    pages.map(p => {
                        return <span className={props.currentPage === p ? s.selectedPage : ""}
                                     onClick={(e) => {
                                         props.setCurrentPageHandler(p)
                                     }}> |{p}| </span>
                    })
                }
                ...
                <span className={props.currentPage === pagesCount ? s.selectedPage : ""}
                      onClick={(e) => {
                          props.setCurrentPageHandler(pagesCount)
                      }}> |{pagesCount}| </span>
            </div>
            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={`/profile/${u.id}`}>
                        <img className={s.userAva}
                             src={u.photos.small != null ?
                                 u.photos.small :
                                 "https://t4.ftcdn.net/jpg/03/32/59/65/360_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg"}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {

                                axios.delete(
                                    `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {withCredentials: true, headers: {"API-KEY": "dda4294f-5067-4f04-82b4-17ab88b183bd"}}
                                    )
                                    .then(response =>{
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id);
                                        }
                                    });

                            }}>Unfollow</button>
                            : <button onClick={() => {

                                axios.post(
                                    `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {},
                                    {withCredentials: true, headers: {"API-KEY": "dda4294f-5067-4f04-82b4-17ab88b183bd"}})
                                    .then(response =>{
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id);
                                        }
                                    });

                            }}>Follow</button>}
                    </div>
                </span>
                    <span>
                        <div>{u.name}</div>
                        <hr/>
                </span>
                </div>)
            }
        </div>
    )
}