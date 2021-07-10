import axios from "axios"
import { apiUrl } from "../constants/GeneralConstant"

export const loginCore = async form => {
    try {
        const user = await axios.post(`${apiUrl}/auth/login`, form)
        if(user.data)
            return user.data
        return {status: false, message: 'Error try loginCore'}
    } catch (error) {
        console.log(error);
        if(error.response)
            return error.response.data
        return {status: false, message: 'Error catch loginCore'}
    }
}

export const sendResAuthCore = async () => {
    try {
        const user = await axios.get(`${apiUrl}/auth`)
        if(user.data.status)
            return user.data
        return {status: false, message: 'Error try sendRes Cores!'}
    } catch (error) {
        console.log(error)
        if(error.response)
            return error.response.data
        return {status: false, message: 'Error sendResAuth Cores!'}
    }
}

export const registerCore = async form => {
    try {
        const user = axios.post(`${apiUrl}/auth/register`, form)
        if(user.data.status)
            return user.data
        return {status: false, message: 'Error try registerCores!'}
    } catch (error) {
        console.log(error)
        if(error.response)
            return error.response.data
        return {status: false, message: 'Error catch registerCores!'}
    }
}