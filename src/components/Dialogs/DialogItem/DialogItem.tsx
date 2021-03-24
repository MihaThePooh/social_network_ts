import React from 'react'
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsPropsType = {
    id: number
    name: string
}

const DialogItem = (props: DialogsPropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>{props.name}</NavLink>
            {/*<NavLink to="/dialogs/">props.name</NavLink>*/}
        </div>
    )
}

export default DialogItem