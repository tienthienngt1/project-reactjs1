import { useContext } from 'react';
import { StatusContext } from '../../contexts/StatusContext'
import {Button} from 'react-bootstrap'
import './dashboard.css'

const CreateButtonDashboard = () => {
    console.log('createButtonDashboard')
    const {setIsOpenModal} = useContext(StatusContext)
    return (
        <div className="createButtonDiv">
            <Button className="createButton" variant="secondary" onClick={() => setIsOpenModal(true)}><i className="bi bi-plus-lg"></i></Button>
        </div>
    );
};

export default CreateButtonDashboard;