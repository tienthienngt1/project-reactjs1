import { createContext, useReducer, useEffect } from "react"
import AuthReducer from "../reducers/AuthReducer";
import { loginCore, sendResAuthCore, registerCore } from "../cores/AuthCore"
import setToken from "../helps/setToken";
import { SET_AUTH } from "../constants/AuthConstant";
import { LOCAL_STORAGE_TOKEN_NAME } from "../constants/GeneralConstant";


export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    //call reducer
    const [authState, dispatch] = useReducer(AuthReducer, {
        isAuthenticate: false,
        user:null,
    })
    //send request authorization
    const sendResAuth = async () => {
        if(localStorage[LOCAL_STORAGE_TOKEN_NAME]){
            setToken(localStorage[LOCAL_STORAGE_TOKEN_NAME])
            const user = await sendResAuthCore()
            if(!user.status){
                localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
                dispatch({type: SET_AUTH, payload: {isAuthenticate: false, user:null}})
            }else {
                dispatch({type: SET_AUTH, payload: {isAuthenticate: true, user:user.user}})
            }
        }else{
            dispatch({type: SET_AUTH, payload: {isAuthenticate: false, user:null}})
        }
    }
    //use effect 
    useEffect(() => sendResAuth(), [])
    //login
    const loginAuthContext = async form => {
        const user = await loginCore(form)
        if(user.status){
            localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, user.token)
            await sendResAuth()
        }else{
            localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
        }
        return user
    }
    //register
    const registerAuthContext = async form => {
        const user = await registerCore(form)
        if(user.status){
            localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, user.token)
            await sendResAuth()
        }else{
            localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
        }
        return user
    }
    //logout
    const logoutAuthContext =async () => {
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
        await sendResAuth()
    }
    //context data
    const data = {
        authState,
        loginAuthContext, registerAuthContext, logoutAuthContext
    }
    //return
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider