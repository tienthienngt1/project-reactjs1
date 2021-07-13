import { useState, useContext } from "react"
import { Form, Button, Alert } from "react-bootstrap"
import { Link } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { StatusContext } from "../../contexts/StatusContext"
import './registerFormcss.css'

const RegisterForm = () => {
    // auth context
    const {registerAuthContext} = useContext(AuthContext)
    const {notifi, setNotifi} = useContext(StatusContext)
    //set state
    const [form, setForm] = useState({
        username:'' , password: '' , confirmPassword:''
    })
    const [error, setError] = useState({
        isError: false, messageError: '',
        isPass: false, isValid: false
    })
    const [classShowPass, setClassShowPass] = useState('bi bi-eye-slash')
    const {username, password, confirmPassword} = form
    //set value into state
    const onchangeForm = event => {
        if(error.isError){
            setError({...error, isErrror: false, messageError: ''})
        }
        if(event.target.name === 'password'){
            if(event.target.value !== confirmPassword){
                setError({...error, isPass: true})
            }else{
                setError({...error, isPass: false, messaegPass: '', isValid: true})
            }
        }
        if(event.target.name === 'confirmPassword'){
            if(event.target.value !== password){
                setError({...error, isPass: true})
            }else{
                setError({...error, isPass: false, messaegPass: '', isValid: true})
            }
        }
        setForm({...form, [event.target.name]: event.target.value})
    }
    //onsubmit form
    const onsubmitForm = async event => {
        event.preventDefault()
        if(password !== confirmPassword){
            return setError({...error, isError: true, message: 'Password not same'})
        }
        const responseRegister = await registerAuthContext(form)
        if(responseRegister.status){
            setNotifi({...notifi, isNotifi: true, message: responseRegister.message})
        }
        setError({isError: true, message: responseRegister.message})
    }
    const showPassword = () => {
        console.log('show');
        const inputPass = document.getElementById('inputPassword')
        const inputConfirm = document.getElementById('inputConfirm')
        if(inputPass.type === 'password'){
            inputPass.type = 'text'
            inputConfirm.type = 'text'
            setClassShowPass('bi bi-eye')
        }else{
            inputPass.type = 'password'
            inputConfirm.type = 'password'
            setClassShowPass('bi bi-eye-slash')
        }
    }
    return (
        <>
            {error.isError ? <Alert variant='danger'>{error.message}</Alert> : ''}
            <Form onSubmit={onsubmitForm}>
                <Form.Group>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        value={username}
                        onChange={onchangeForm}
                        type="text"
                        name="username"
                        placeholder="Username"
                        isInvalid={error.isError}
                        />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control 
                        id="inputPassword"
                        value={password}
                        onChange={onchangeForm}
                        type="password"
                        name="password"
                        placeholder="Password"
                        isInvalid={error.isPass}
                        isValid  = {error.isValid}
                        />
                        <Button variant="secondary" id='eyePasswordRegister' onClick={showPassword}>
                            <i className={classShowPass}></i>
                        </Button>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Confirm Password:</Form.Label>
                    <Form.Control 
                        id="inputConfirm"
                        value={confirmPassword}
                        onChange={onchangeForm}
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        isInvalid={error.isPass}
                        isValid  = {error.isValid}
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