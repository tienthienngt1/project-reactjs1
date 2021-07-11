import { SET_AUTH } from "../constants/AuthConstant";


const AuthReducer = (state, action) => {
    const {type, payload:{...rest}} = action
    switch(type){
        case SET_AUTH:
            return {...state, ...rest}
        default:
            return {...state}
    }
};

export default AuthReducer;