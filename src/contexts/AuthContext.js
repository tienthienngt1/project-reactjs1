import { createContext, useReducer } from "react"
import AuthReducer from "../reducers/AuthReducer";
import { login } from "../cores/AuthCore"
import { SET_AUTH } from "../constants/AuthConstant";
import { LOCAL_STORAGE_TOKEN_NAME } from "../constants/GeneralConstant";


export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    //call reducer
    const [authState, dispatch] = useReducer(AuthReducer, {
        isAuthenticate: false,
    })

    //login
    const loginUser = async form => {
        try {
            const user = await login(form)
            if(user.status){
                localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, user.data.token)
                dispatch({type: SET_AUTH, payload: {isAuthenticate: true}})
            }
            return user
        } catch (error) {
            console.log(error);
            return {status: false, message: 'Error! Please try again!'}
        }
    }
    //context data
    const data = {
        authState,
        loginUser
    }
    //return
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider