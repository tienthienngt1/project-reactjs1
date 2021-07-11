import {Route} from 'react-router-dom'
import StatusContextProvider from '../contexts/StatusContext';
import Auth from './Auth'
import Protect from './Protect'

const Routes = () => {
    return (
        <StatusContextProvider>
            {Protect.map((protect,key) => (
                <Route key={key} exact={protect.exact} path={protect.path} render={protect.render} />
                ))}
            {Auth.map((auth, key) => (
                <Route key={key} exact={auth.exact} path={auth.path} render={auth.render}/>
                ))}
        </StatusContextProvider>
    );
};

export default Routes;