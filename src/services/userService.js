import axios from "axios";

const baseUrl = "http://localhost:5256";

export function GetUsers(){
    return axios.get(baseUrl+"/"+"api/users");
}

export function CreateUser(data){
    return axios.post(`${baseUrl}/api/users`,data);
}

export function getUser(userId){
    return axios.get(`${baseUrl}/api/users/${userId}`);
}

export function updateUserProfile(data, userId){
    return axios.put(`${baseUrl}/api/users/${userId}/profile/update`,data)
}