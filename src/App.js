import { BrowserRouter as Router, Switch} from "react-router-dom"
import "bootstrap-icons/font/bootstrap-icons.css"
import './App.css'
import Provider from "./provider";

const App = () => {
    return (
        <Router>
            <Switch>
                <Provider />
            </Switch>
        </Router>
    );
};

export default App;