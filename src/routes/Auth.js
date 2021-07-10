import { Route } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login"
import Register from "../pages/register";
import {LayoutAuth} from "../pages/layouts";

const Auth = [
    {exact: true,path: '/', render:(props) => (<Route {...props} component={Home} />)},
    {exact: true,path: '/login', render:(props) => (<LayoutAuth {...props} component={Login} />)},
    {exact: true,path: '/register', render:(props) => (<LayoutAuth {...props} component={Register} />)},
]

export default Auth;