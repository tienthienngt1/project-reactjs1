import {useState, useContext} from 'react'
import { Button, Modal,Form } from "react-bootstrap";
import { PostContext } from '../../contexts/PostContext';
import { StatusContext } from '../../contexts/StatusContext';

const ModalDashboard = () => {
    console.log('modalDashboard');
    //context
    const {createPostContext} = useContext(PostContext)
    const {isOpenModal, setIsOpenModal, setNotifi} = useContext(StatusContext)
    //use  state
    const [postForm,setPostForm] = useState({
        title:'',description:'',url:'',status:'TO LEARN'
    })
    //change input
    const onchangeForm = event => {
        setPostForm({
            ...postForm, [event.target.name]: event.target.value
        })
    }
    //submit form
    const submitForm = async event => {
        event.preventDefault()
        console.log(postForm);
        const post = await createPostContext(postForm)
        console.log(post)
        setIsOpenModal(false)
        setNotifi({isNotifi:true, message: post.message})
        setPostForm({title:'',description:'',url:'',status:'TO LEARN'})
    }
    const {title, description, url, status} = postForm
    return (
        <>
            <Modal  aria-labelledby="modalDashboard" centered show={isOpenModal}>
                <Modal.Header closeButton onHide={() => setIsOpenModal(false)}>
                    <Modal.Title id="modalDashboard">
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
                                value={title}
                                onChange={onchangeForm}
                                />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description:</Form.Label>
                            <Form.Control
                                type="text"
                                name="description"
                                placeholder="description"
                                value={description}
                                onChange={onchangeForm}
                                />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Url:</Form.Label>
                            <Form.Control
                                type="text"
                                name="url"
                                placeholder="https://example.com"
                                value={url}
                                onChange={onchangeForm}
                                />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Status:</Form.Label>
                            <Form.Control
                                as="select"
                                defaultValue="TO LEARN"
                                name="status"
                                value={status}
                                onChange={onchangeForm}
                            >
                                <option value="TO LEARN">TO LEARN</option>
                                <option value="LEARNING">LEARNING</option>
                                <option value="LEARNED">LEARNED</option>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="secondary" type="submit">Create</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setIsOpenModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalDashboard;