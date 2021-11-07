import {UserProfileType} from "../types";

type OrUndef<T extends Object> = {
    [key in keyof T]?: T[key]
}

export const updateObjectInArray = (
    items: Array<UserProfileType>,
    itemId: UserProfileType[keyof UserProfileType],
    objPropName: keyof UserProfileType,
    newObjProps: OrUndef<UserProfileType>
): Array<UserProfileType> => {
    return items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u
    })
};