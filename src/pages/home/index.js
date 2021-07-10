import { Redirect } from "react-router-dom"
import { useContext} from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Home = () => {
    const {authState:{isAuthenticate}} = useContext(AuthContext)
    return (
        <>
            { isAuthenticate ? <Redirect to='/dashboard' /> : <Redirect to='/login' /> }
        </>
    );
};

export default Home;