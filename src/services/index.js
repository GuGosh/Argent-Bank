import axios from "axios";
import { selectToken } from '../features/userToken'


export const login = async (email, password) => {
    return await axios.post('http://localhost:3001/api/v1/user/login', {
        email: email,
        password: password,
    });
}

export const updateUser = async (firstname, name, token) => {
    return await axios.put('http://localhost:3001/api/v1/user/profile', {
        firstName: firstname,
        lastName: name,
    }, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
}

export const getUser = async (token) => {
    return await axios.post('http://localhost:3001/api/v1/user/profile', {}, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
}