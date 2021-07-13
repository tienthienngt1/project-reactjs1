import { createContext,useReducer } from "react"
import { CREATE_POST, DELETE_POST, GET_POST, REFRESH_POST } from "../constants/PostConstant";
import {createPostCore, deletePostCore, editPostCore, getPostCore } from "../cores/PostCore"
import PostReducer from "../reducers/PostReducer"

export const PostContext = createContext()

const PostContextProvider = ({children}) => {
    const [postState, dispatch] = useReducer(PostReducer, {
        post: false
    })
    //get post
    const getPostContext = async () => {
        try {
            const posts = await getPostCore()
            if(posts.status){
                dispatch({type: GET_POST, payload: posts.post})
                return posts
            }
            return{status: false, message: 'Get Posts Error! try getpostContext'}
        } catch (error) {
            console.log(error);
            return {status: false, message: 'Error! getPostContext'}
        }
    }
    
    //create post
    const createPostContext = async form => {
        try {
            const post = await createPostCore(form)
            console.log(post.post)
            if(post.status){
                dispatch({type:CREATE_POST, payload:post.post})
            }
            return post
        } catch (error) {
            console.log(error)
            return {status: false, message: 'Error! createPostContext'}
        }
    }
    
    //edit post
    const editPostContext = async (form) => {
        try {
            const post = await editPostCore(form)
            if(post.status){
                await getPostContext()
                return post
            }
        } catch (error) {
            console.log(error)
            return {status: false, message: 'Error! editPostContext'}
        }
    }

    //delete post 
    const deletePostContext = async id => {
        try {
            const post = await deletePostCore(id)
            if(post.status){
                dispatch({type:DELETE_POST, payload:id})
                return post
            }
        } catch (error) {
            console.log(error)
            return {status: false, message: 'Error! editPostContext'}
        }
    }
    //refesh post
    const refreshPostContext = () => {
        dispatch({type: REFRESH_POST})
    }
    //data
    const data = {
        postState,
        getPostContext,createPostContext,deletePostContext,editPostContext, refreshPostContext
    }
    //return
    return (
        <PostContext.Provider value={data}>
            {children}
        </PostContext.Provider>
    );
};

export default PostContextProvider;