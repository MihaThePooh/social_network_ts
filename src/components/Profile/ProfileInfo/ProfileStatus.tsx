import React, {ChangeEvent, useEffect, useState} from "react";

type ProfileStatusPropsType = {
    status: string | undefined
    updateStatus: (status: string) => void
}

export const ProfileStatus = (props: ProfileStatusPropsType) => {

    const [statusLocal, setStatusLocal] = useState(props.status);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setStatusLocal(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true)
    };

    const deactivateEditMode = (e: ChangeEvent<HTMLInputElement>) => {
        setEditMode(false);
        props.updateStatus(e.currentTarget.value)
    };

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatusLocal(e.currentTarget.value)
    };

    return <>
        {!editMode &&
        <div>
            <span onDoubleClick={activateEditMode}>{statusLocal}</span>
        </div>}
        {editMode &&
        <div>
            <input autoFocus onBlur={deactivateEditMode} value={statusLocal} onChange={onChange}/>
        </div>}
    </>
};