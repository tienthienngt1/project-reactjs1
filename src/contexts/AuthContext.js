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
    })
    //send request authorization
    const sendResAuth = async () => {
        if(localStorage[LOCAL_STORAGE_TOKEN_NAME]){
            setToken(localStorage[LOCAL_STORAGE_TOKEN_NAME])
            const user = await sendResAuthCore()
            if(!user.status){
                localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
                dispatch({type: SET_AUTH, payload: {isAuthenticate: false}})
            }else {
                dispatch({type: SET_AUTH, payload: {isAuthenticate: true}})
            }
        }else{
            dispatch({type: SET_AUTH, payload: {isAuthenticate: false}})
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
        }
        return user
    }
    //register
    const registerAuthContext = async form => {
        const user = await registerCore(form)
        if(user.status){
            localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, user.token)
            dispatch({type: SET_AUTH, payload: {isAuthenticate: true}})
        }
        await sendResAuth()
        return user
    }
    //context data
    const data = {
        authState,
        loginAuthContext, registerAuthContext
    }
    //return
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider