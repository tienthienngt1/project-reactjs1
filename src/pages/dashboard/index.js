import {useContext, useEffect} from 'react'
import CreateButtonDashboard from "../../component/dashboard/CreateButtonDashboard";
import CardMain from "../../component/dashboard/CardMain";
import ModalDashboard from "../../component/dashboard/ModalDashboard";
import { Col, Row } from "react-bootstrap";
import CardPost from "../../component/dashboard/CardPost";
import { PostContext } from '../../contexts/PostContext'

const Dashboard = () => {
    const {postState:{post}, getPostContext} = useContext(PostContext)
    useEffect(() => getPostContext(), [])
    return (
        <>
        {
            post.length >= 1 ? (
                    <Row lg>
                        {post.map((p, key) => 
                        <Col lg={4} key={key}>
                            <CardPost   post={p}/>
                        </Col>
                         )}
                    </Row>
                ) :
            <CardMain />
        }
            <CreateButtonDashboard />
            <ModalDashboard />
        </>
    );
};

export default Dashboard;