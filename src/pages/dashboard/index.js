import { Link } from "react-router-dom"

const Dashboard = () => {
    return (
        <div>
            dashboard
            <Link to='/about'>
                about
            </Link>
        </div>
    );
};

export default Dashboard;