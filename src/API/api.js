import axios from "axios";


const instance = axios.create(
    {
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        withCredentials: true,
        headers: { 'API-KEY': '31d45e17-5ac1-4cd4-ac69-f4338413cacd' },
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

