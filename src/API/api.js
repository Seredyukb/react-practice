import axios from "axios";


const instance = axios.create(
    {
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        withCredentials: true,
        headers: { 'API-KEY': '68abddab-87d1-4ac6-82ce-c0fccdaa1b7a' },
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

}

