import {Route} from 'react-router-dom'
import Auth from './Auth'

const Routes = () => {
    return (
        <>
            {Auth.map((auth) => (
                <Route  exact={auth.exact} path={auth.path} render={auth.render}/>
            ))}
        </>
    );
};

export default Routes;