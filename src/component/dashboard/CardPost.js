import {useContext} from 'react'
import { Button, Card, Col, Row, Badge } from "react-bootstrap";
import { PostContext } from '../../contexts/PostContext'
import { StatusContext } from '../../contexts/StatusContext';

const CardPost = props => {
    const color = props.post.status === 'TO LEARN' ? 'secondary' : props.post.status === 'LEARNING' ? 'danger' : 'success'
    const {setIsOpenModalEdit , setNotifi, setPostEdit} = useContext(StatusContext)
    const {deletePostContext } = useContext(PostContext)
    const editPost = () => {
        setPostEdit(props.post)
        setIsOpenModalEdit(true)
    }
    return (
        <Card border= {color} className='mt-5'>
            <Card.Body className='text-center'>
                <Row className="text-center">
                    <Col sm={5}>
                        <Card.Title>
                            <strong>{props.post.title}</strong>
                        </Card.Title>
                    </Col>
                    <Col sm={7}>
                        <a  href={props.post.url}>
                            <Button variant={color} className="m-1"><i className="bi bi-eye"></i></Button>
                        </a>
                        <Button variant= {color} className="m-1" onClick={editPost} ><i className="bi bi-pencil-square"></i></Button>
                        <Button variant= {color} className="m-1" onClick = {() => {deletePostContext(props.post._id); setNotifi({isNotifi: true, message: 'Delete successfully!'})}} ><i className="bi bi-trash"></i></Button>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col>
                        <Card.Text>
                            <small>{props.post.description}</small>
                        </Card.Text>
                    </Col>
                    <Col>
                    <Badge variant={color}>{props.post.status}</Badge>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default CardPost;