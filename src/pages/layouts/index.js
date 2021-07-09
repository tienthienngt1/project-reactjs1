import LayoutFooter from "./layoutFooter";
import LayoutHeader from "./layoutHeader";
import LayoutNavbar from "./layoutNavbar";

function Layout ({component: Component, ...rest}){
    return (
        <>
            <LayoutHeader />
            <LayoutNavbar />
            <Component />
            <LayoutFooter />
        </>
    );
};

export default Layout;