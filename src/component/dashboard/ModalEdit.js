import {useContext} from 'react'
import { Button, Modal,Form } from "react-bootstrap";
import { PostContext } from '../../contexts/PostContext';
import { StatusContext } from '../../contexts/StatusContext';

const ModalEdit = () => {
    //context
    const {editPostContext} = useContext(PostContext)
    const {isOpenModalEdit, setIsOpenModalEdit,postEdit,setPostEdit} = useContext(StatusContext)
    //change input
    const onchangeForm = event => {
        setPostEdit({
            ...postEdit, [event.target.name]: event.target.value
        })
    }
    console.log(postEdit);
    //submit form
    const submitForm = async event => {
        event.preventDefault()
        const post = await editPostContext(postEdit)
        if(post.status)
            setIsOpenModalEdit(false)
    }
    return (
        <>
            <Modal  aria-labelledby="modalEdit" centered show={isOpenModalEdit}>
                <Modal.Header closeButton onHide={() => {setIsOpenModalEdit(false); setPostEdit('')}}>
                    <Modal.Title id="modalEdit">
                        <h2>Create Awesome Things!</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={submitForm}>
                        <Form.Group>
                            <Form.Label>Title:</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                placeholder="title"
                                value={postEdit.title}
                                onChange={onchangeForm}
                                />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description:</Form.Label>
                            <Form.Control
                                type="text"
                                name="description"
                                placeholder="description"
                                value={postEdit.description}
                                onChange={onchangeForm}
                                />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Url:</Form.Label>
                            <Form.Control
                                type="text"
                                name="url"
                                placeholder="https://example.com"
                                value={postEdit.url}
                                onChange={onchangeForm}
                                />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Status:</Form.Label>
                            <Form.Control
                                as="select"
                                defaultValue={postEdit.status}
                                name="status"
                                value={postEdit.status}
                                onChange={onchangeForm}
                            >
                                <option value="TO LEARN">TO LEARN</option>
                                <option value="LEARNING">LEARNING</option>
                                <option value="LEARNED">LEARNED</option>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="secondary" type="submit">Edit</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {setIsOpenModalEdit(false); setPostEdit('')}} >Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalEdit;