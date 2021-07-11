import { useContext } from "react"
import { Button, Card } from "react-bootstrap";
import { AuthContext } from "../../contexts/AuthContext"
import { StatusContext } from "../../contexts/StatusContext"

const Main = () => {
    const {authState} = useContext(AuthContext)
    const {setIsOpenModal} = useContext(StatusContext)
    return (
        <>
            <Card border="secondary" className="mt-5 text-center">
                <Card.Header >
                    <h1>HELLO, {authState.user ? authState.user.username : 'Error'}!</h1>
                </Card.Header>
                <Card.Body>
                    <h3>Create awesome things!</h3>
                    <Button variant="secondary" onClick={()=>setIsOpenModal(true)}>Create</Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default Main;