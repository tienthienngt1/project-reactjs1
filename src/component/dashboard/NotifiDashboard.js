import { useContext, useEffect} from 'react'
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import { StatusContext } from '../../contexts/StatusContext'

const NotifiDashboard = () => {
    const {notifi, setNotifi} = useContext(StatusContext)
    const {isNotifi, message} = notifi
    useEffect(() => {
        if(isNotifi){
            setNotifi({...notifi, isNotifi:false})
            store.addNotification({
                title: 'Success',
                message: message,
                type: "success",
                container: "top-center",
                animationIn: ["animate__animated", "animate__bouncesIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 5000,
                }
            })
        }
    }, [isNotifi])
    return (
        <>
           <ReactNotification />
        </>
    )
};

export default NotifiDashboard;