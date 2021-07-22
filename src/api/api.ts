import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "dda4294f-5067-4f04-82b4-17ab88b183bd"}
});

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: number) {
        console.warn("Obsolete method. Please use profileAPI object (рефакторили тут апишку");
        return profileAPI.getProfile(userId).then(res => res.data)
    },
};

export const authAPI = {
    me() {return instance.get(`auth/me`)},
};

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`).then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status});
    },
};