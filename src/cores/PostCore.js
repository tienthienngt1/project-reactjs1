import axios from "axios"
import { apiUrl } from "../constants/GeneralConstant"

//get posts
export const getPostCore = async () => {
    try {
        const post = await axios.get(`${apiUrl}/post/get`)
        return post.data
    } catch (error) {
        if(error.response)
            return error.response.data
        return {status: false, message: 'Error! please try again! PostCore'}
    }
}

//create post
export const createPostCore = async form => {
    try {
        const post = await axios.post(`${apiUrl}/post/create`, form)
        return post.data
    } catch (error) {
        if(error.response)
            return error.response.data
        return {status: false, message: 'Error! Try again createPostCore!'}
    }
}

//edit post
export const editPostCore = async form => {
    try {
        const post = await axios.put(`${apiUrl}/post/edit/${form.postId}`, form)
        return post.data
    } catch (error) {
        if(error.response)
            return error.response.data
        return {status: false, message: 'Error! Try again editPostCore'}
    }
}

//delete post
export const deletePostCore = async id => {
    try {
        const post = await axios.delete(`${apiUrl}/post/delete/${id}`)
        return post.data
    } catch (error) {
        if(error.response)
            return error.response.data
        return {status: false, message: 'Error! Try again deletePostCore!'}
    }
}