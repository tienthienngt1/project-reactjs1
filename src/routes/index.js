import {Route} from 'react-router-dom'
import NotFound from '../pages/NotFound'
import Auth from './Auth'
import Protect from './Protect'

const Routes = () => {
    return (
        <>
            {Protect.map((protect,key) => (
                <Route key={key} exact={protect.exact} path={protect.path} render={protect.render} />
                ))}
            {Auth.map((auth, key) => (
                <Route key={key} exact={auth.exact} path={auth.path} render={auth.render}/>
            ))}
            <Route component={NotFound} />
        </>
    );
};

export default Routes;