
import axios from 'axios'

import { API_BASE_URL } from '../common'


// register user
export const register = async (userData) => {
    const response = await axios.post(`${API_BASE_URL}/signup`, userData)
    if (response.data) {
        localStorage.setItem("currentUser", JSON.stringify(response.data))
    }

    return response.data
}

// login user
export const login = async (userData) => {
    const response = await axios.post(`${API_BASE_URL}auth/login`, userData)
    if (response.data) {
        localStorage.setItem("currentUser", JSON.stringify(response.data))
    }

    return response.data
}

export const logout = () => {
    localStorage.removeItem("currentUser");
};

const authService = {
    register,
    login,
    logout
}

export default authService
