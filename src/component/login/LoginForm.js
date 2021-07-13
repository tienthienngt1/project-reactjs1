import { useState, useContext } from "react"
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext"
import { StatusContext } from "../../contexts/StatusContext";

const LoginForm = () => {
    //context
    const {notifi, setNotifi} = useContext(StatusContext)
    const {loginAuthContext} = useContext(AuthContext)
    //set state
    const [form, setForm] = useState({
        username: '' , password: ''
    })
    const [messageAlert, setMessageAlert] = useState(false)
    const {username, password} = form
    //onchange
    const onchangeForm = event => {
        if(messageAlert){
            setMessageAlert(false)
        }
        setForm({...form, [event.target.name]:event.target.value})
    }
    //onsubmit form
    const onsubmitForm = async event => {
        event.preventDefault()
        const res = await loginAuthContext(form)
        if(!res.status){
            setMessageAlert(res.message)
        }else{
            setNotifi({...notifi, isNotifi: true, message: res.message})
        }
    }
    return (
        <div className='formHome'>
            {messageAlert ? (<Alert variant='danger'>{messageAlert}</Alert>) : ''}
            <Form onSubmit={onsubmitForm}>
                <Form.Group>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control  
                        onChange={onchangeForm}
                        value={username}
                        type="text"
                        name="username"
                        placeholder="Username"
                        isInvalid={messageAlert ? true : false}
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
                        isInvalid={messageAlert ? true : false}
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