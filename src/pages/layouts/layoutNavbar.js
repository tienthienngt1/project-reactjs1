import {useContext} from 'react'
import { Link } from "react-router-dom";
import { Navbar, NavDropdown, Nav, Button } from "react-bootstrap";
import { AuthContext } from "../../contexts/AuthContext";
import { PostContext } from '../../contexts/PostContext';

const LayoutNavbar = () => {
    const {refreshPostContext} = useContext(PostContext)
    const {logoutAuthContext, authState} = useContext(AuthContext)
    const logout = async () => {
        await logoutAuthContext()
        await refreshPostContext()
    }
	return (
        <>
		<Navbar collapseOnSelect expand="lg" >
			<Navbar.Brand to="/dashboard" as={Link}>COURSES</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link to="dashboard" as={Link}>Dashboard</Nav.Link>
					<Nav.Link  to="/about" as={Link}>About</Nav.Link>
					<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
						<NavDropdown.Item  as={Link} to="/dropdown1">
							dropdown1
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item as={Link} to="/dropdown2">
							dropdown2
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item as={Link} to="/dropdown3">
							dropdown3
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item as={Link} to="/dropdown4">
							dropdown4
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>
                { authState.user ? (
                    <Nav>
                        <Nav.Link  as="span">Hello, {authState.user.username} !</Nav.Link>
                        <Nav.Link as={Button} variant="secondary" onClick={logout}>
                            Logout
                        </Nav.Link>
                    </Nav>
                ) : ''
                }
			</Navbar.Collapse>
		</Navbar>
        </>
	);
};

export default LayoutNavbar;
