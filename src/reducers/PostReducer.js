
const PostReducer = (state, action) => {
    const {type, payload: {...rest}} = action
    
    switch (type) {
        default:
            return {...state}
    }
};

export default PostReducer;