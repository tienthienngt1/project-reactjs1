import { createContext,useReducer } from "react"
import PostReducer from "../reducers/PostReducer";

export const PostContext = createContext()

const PostContextProvider = ({children}) => {
    const [postState, dispatch] = useReducer(PostReducer, {
        post: null
    })

    const data = {
        postState,
        
    }
    return (
        <PostContext.Provider value={data}>
            {children}
        </PostContext.Provider>
    );
};

export default PostContextProvider;