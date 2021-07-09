import { useState } from "react"
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginForm = () => {
    //set state
    const [form, setForm] = useState({
        username: '' , password: ''
    })
    const {username, password} = form
    //onchange
    const onchangeForm = event => {
        setForm({...form, [event.target.name]:event.target.value})
    }
    //onsubmit form
    const onsubmitForm = event => {
        event.preventDefault()
    }
    return (
        <div className='formHome'>
            <Form onSubmit={onsubmitForm}>
                <Form.Group>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control  
                        onChange={onchangeForm}
                        value={username}
                        type="text"
                        name="username"
                        placeholder="Username"
                        />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control  
                        onChange={onchangeForm}
                        value={password}
                        type="text"
                        name="password"
                        placeholder="Password"
                    />
                </Form.Group>
                <Button type="submit" variant="info" className="mt-3">Login</Button>
            </Form>
            <center>
                I have no an acount? 
                <Link to="register">
                    <Button variant="primary">Register</Button>
                </Link>
            </center>
        </div>
    );
};

export default LoginForm;