import React, {useState} from "react";

type ProfileStatusPropsType = {
    status: string
}

export const ProfileStatus = (props: ProfileStatusPropsType) => {

    const [status, setStatus] = useState("LooooooooL");
    const [editMode, setEditMode] = useState(false);

    const activateEditMode = () => {
        setEditMode(true)
    };

    const deactivateEditMode = () => {
        setEditMode(false)
    };

    return <>
        {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{status}</span>
            </div>
        }
        {editMode &&
            <div>
                <input autoFocus onBlur={deactivateEditMode} value={status}/>
            </div>
        }
    </>
};