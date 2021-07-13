import {useContext,useState, useEffect} from 'react'
import { Button, Modal,Form } from "react-bootstrap";
import { PostContext } from '../../contexts/PostContext';
import { StatusContext } from '../../contexts/StatusContext';

const ModalEdit = () => {
    //context
    const {editPostContext} = useContext(PostContext)
    const {isOpenModalEdit, setIsOpenModalEdit,setNotifi, postEdit} = useContext(StatusContext)
    const [postForm , setPostForm] = useState('')
    useEffect(() => {
        setPostForm(postEdit)
    }, [postEdit])
    //change input
    const onchangeForm = event => {
        setPostForm({
            ...postForm, [event.target.name]: event.target.value
        })
        console.log(postForm);
    }

    //submit form
    const submitForm = async event => {
        event.preventDefault()
        const post = await editPostContext(postForm)
        console.log(post);
        if(post.status){
            setIsOpenModalEdit(false)
            setNotifi({isNotifi: true, message: post.message})
        }
    }
    return (
        <>
            <Modal  aria-labelledby="modalEdit" centered animation={false} show={isOpenModalEdit}>
                <Modal.Header closeButton onHide={() => {setIsOpenModalEdit(false)}}>
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
                                value={postForm.title}
                                onChange={onchangeForm}
                                />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description:</Form.Label>
                            <Form.Control
                                type="text"
                                name="description"
                                placeholder="description"
                                value={postForm.description}
                                onChange={onchangeForm}
                                />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Url:</Form.Label>
                            <Form.Control
                                type="text"
                                name="url"
                                placeholder="https://example.com"
                                value={postForm.url}
                                onChange={onchangeForm}
                                />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Status:</Form.Label>
                            <Form.Control
                                as="select"
                                defaultValue={postForm.status}
                                name="status"
                                value={postForm.status}
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
                    <Button onClick={() => {setIsOpenModalEdit(false); }} >Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalEdit;