import { SET_AUTH } from "../constants/AuthConstant";


const AuthReducer = (state, action) => {
    const {type, payload:{isAuthenticate}} = action
    switch(type){
        case SET_AUTH:
            return {...state, isAuthenticate}
        default:
            return {...state}
    }
};

export default AuthReducer;