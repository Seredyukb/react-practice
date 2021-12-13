import axios from "axios";


const instance = axios.create(
    {
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        withCredentials: true,
        headers: { 'API-KEY': '889b0439-35ec-4778-b91d-221b807651f5' },
    }
)

export const usersAPI = {
    getUsers(currentPage = 1, pageSize) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`,).then(response => response.data)
    },
    unfollowDelete(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    followPost(id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    },
    authGet() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    getProfile(id) {
        console.warn('old method, pls use profileApi')
        return profileAPI.getProfile(id);
    },

}


export const profileAPI = {

    getProfile(id) {
        return instance.get(`profile/${id}`)
    },
    getProfileStatus(id) {
        return instance.get(`profile/status/${id}`)
    },
    updateProfileStatus(status) {
        return instance.put(`profile/status`, { status: status })
    },

}


