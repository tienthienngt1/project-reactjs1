import { Button, Card, Col, Row, Badge } from "react-bootstrap";

const CardPost = post => {
    return (
        <Card border='secondary' className='mt-5'>
            <Card.Body className='text-center'>
                <Row className="text-center">
                    <Col sm={5}>
                        <Card.Title>
                            <strong>{post.post.title}</strong>
                        </Card.Title>
                    </Col>
                    <Col sm={7}>
                        <Button variant='secondary' className="m-1 littleButton"><i className="bi bi-eye"></i></Button>
                        <Button variant='secondary' className="m-1 littleButton"><i className="bi bi-pencil-square"></i></Button>
                        <Button variant='secondary' className="m-1 littleButton"><i className="bi bi-trash"></i></Button>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col>
                        <Card.Text>
                            <small>{post.post.description}</small>
                        </Card.Text>
                    </Col>
                    <Col>
                    <Badge variant="secondary">{post.post.status}</Badge>

                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default CardPost;