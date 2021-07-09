import Home from "../pages/home";
import Login from "../pages/login"
import Register from "../pages/register";
import Layout from "../pages/layouts";

const Auth = [
    {exact: true,path: '/login', render:(props) => (<Layout {...props} component={Login} />)},
    {exact: true,path: '/', render:(props) => (<Layout {...props} component={Home} />)},
    {exact: true,path: '/register', render:(props) => (<Layout {...props} component={Register} />)},
]

export default Auth;