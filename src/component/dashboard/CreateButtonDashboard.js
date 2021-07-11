import { useContext } from 'react';
import { StatusContext } from '../../contexts/StatusContext'
import {Button} from 'react-bootstrap'
import './dashboard.css'

const CreateButtonDashboard = () => {
    const {setIsOpenModal} = useContext(StatusContext)
    return (
        <div className="createButtonDiv">
            <Button className="createButton" variant="secondary" onClick={() => setIsOpenModal(true)}><i class="bi bi-plus-lg"></i></Button>
        </div>
    );
};

export default CreateButtonDashboard;