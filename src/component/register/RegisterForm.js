import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const RegisterForm = () => {
    //set state
    const [form, setForm] = useState({
        username:'' , password: '' , confirmPassword:''
    })
    const {username, password, confirmPassword} = form
    //set value into state
    const onchangeForm = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    //onsubmit form
    const onsubmitForm = event => {
        event.preventDefault()
    }
    return (
        <>
            <Form onSubmit={onsubmitForm}>
                <Form.Group>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        value={username}
                        onChange={onchangeForm}
                        type="text"
                        name="username"
                        placeholder="Username"
                        />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control 
                        value={password}
                        onChange={onchangeForm}
                        type="text"
                        name="password"
                        placeholder="Password"
                        />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Confirm Password:</Form.Label>
                    <Form.Control 
                        value={confirmPassword}
                        onChange={onchangeForm}
                        type="text"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                    />
                </Form.Group>
                <Button type="submit" variant="info" className="mt-3">Register</Button>
            </Form>
            <center>
                I have an acount?
                <Link to="login">
                    <Button variant="primary">Login</Button>
                </Link>
            </center>
        </>
    );
};

export default RegisterForm;