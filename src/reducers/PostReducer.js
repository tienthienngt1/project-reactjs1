import { CREATE_POST, GET_POST, REFRESH_POST } from "../constants/PostConstant";

const PostReducer = (state, action) => {
    const {type, payload} = action
    switch (type) {
        case GET_POST:
            return {...state, post: payload}
        case CREATE_POST:
            return {...state,post: [...state.post, payload]}
        case REFRESH_POST:
            return {...state, post: false}
        default:
            return {...state}
    }
};

export default PostReducer;