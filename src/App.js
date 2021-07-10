import { BrowserRouter as Router, Switch} from "react-router-dom"
import AuthContextProvider from "./contexts/AuthContext";
import Routes from "./routes"
import "bootstrap-icons/font/bootstrap-icons.css"
import './App.css'

const App = () => {
    return (
        <AuthContextProvider>
            <Router>
                <Switch>
                    <Routes />
                </Switch>
            </Router>
        </AuthContextProvider>
    );
};

export default App;