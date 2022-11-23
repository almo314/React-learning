import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '3930f8ff-e22c-4259-a073-3e68044a2fef'
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    }
};

// export const getUsers = (currentPage, pageSize) => {
//     return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
//         {
//             withCredentials: true
//         })
//         .then(response => response.data);
// }