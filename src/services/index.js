import axios from "axios";

export const login = async (email, password) => {
    return await axios.post('http://localhost:3001/api/v1/user/login', {
        email: email,
        password: password,
    });
}