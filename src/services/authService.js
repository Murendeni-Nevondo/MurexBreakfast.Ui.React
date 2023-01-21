import jwtDecode from "jwt-decode";
import axios from "axios";

const baseUrl = 'http://localhost:5256';

export function UserLogin(data) {
    return axios.post(`${baseUrl}/api/auth/login`,data);
}

export function getUserFromJwtToken(token){
    return jwtDecode(token);
}