import {LayoutProtect} from "../pages/layouts"
import Dashboard from "../pages/dashboard"
import About from "../pages/about"

const Protect = [
    {exact: true, path: '/dashboard', render: (props) => ( <LayoutProtect {...props} component={Dashboard}/>)},
    {exact: true, path: '/about', render: (props) => ( <LayoutProtect {...props} component={About}/>)},
]

export default Protect