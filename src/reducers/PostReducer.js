import { CREATE_POST, DELETE_POST, GET_POST, REFRESH_POST } from "../constants/PostConstant";

const PostReducer = (state, action) => {
    const {type, payload} = action
    switch (type) {
        case GET_POST:
            return {...state, post: payload}
        case CREATE_POST:
            return {...state,post: [...state.post, payload]}
        case REFRESH_POST:
            return {...state, post: false}
        case DELETE_POST:
            return {...state, post: state.post.filter((post) => post._id !== payload)}
        default:
            return {...state}
    }
};

export default PostReducer;