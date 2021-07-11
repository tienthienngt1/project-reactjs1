import { useContext } from "react"
import { Redirect } from "react-router-dom"
import LayoutFooter from "./layoutFooter";
import LayoutHeader from "./layoutHeader";
import LayoutNavbar from "./layoutNavbar";
import { AuthContext } from "../../contexts/AuthContext"
import './layoutCss.css'

export function LayoutProtect ({component: Component, ...rest}){
    const {authState} = useContext(AuthContext)
    return (
        <div className="container p-5">
            {authState.isAuthenticate ? '' : <Redirect to='/login' />}
            <LayoutHeader />
            <LayoutNavbar />
            <Component />
            <LayoutFooter />
        </div>
    );
};


export function LayoutAuth ({component: Component, ...rest}){
    const {authState} = useContext(AuthContext)
    return (
        <div className="container p-5">
            {authState.isAuthenticate ? <Redirect to='/dashboard' />: '' }
            <LayoutHeader />
            <LayoutNavbar />
            <Component />
            <LayoutFooter />
        </div>
    );
};
