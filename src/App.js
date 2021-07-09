import { BrowserRouter as Router, Switch} from "react-router-dom"
import "bootstrap-icons/font/bootstrap-icons.css"
import './App.css'
import Routes from "./routes"

const App = () => {
    return (
        <Router>
            <Switch>
                <Routes />
            </Switch>
        </Router>
    );
};

export default App;