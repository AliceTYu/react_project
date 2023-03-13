import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "27e4675c-f804-4a6f-9041-626042cb1409",
  },
});

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
};

export const unFollowAPI = {
  unFollow(id) {
    return instance.delete(`follow/${id}`)
    .then((response) => response.data);
  },
};

export const followAPI = {
  follow(id) {
    return instance.post(`follow/${id}`)
    .then((response) => response.data);
  },
};
