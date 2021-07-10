import axios from "axios"
import { apiUrl } from "../constants/GeneralConstant"

export const login = async form => {
    try {
        const user = await axios.post(`${apiUrl}/auth/login`, form)
        return user
    } catch (error) {
        console.log(error);
        if(error.response)
            return error.response.data
        return {status: false, message: 'Error!'}
    }
}