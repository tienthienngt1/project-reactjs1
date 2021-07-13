import { useState, createContext } from "react"

export const StatusContext = createContext()

const StatusContextProvider = ({children}) => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [isOpenModalEdit, setIsOpenModalEdit] = useState(false)
    const [notifi, setNotifi] = useState({
        isNotifi: false,
        message: ''
    })
    const [postEdit, setPostEdit] = useState('')
    //data 
    const data = {
        isOpenModal, setIsOpenModal,
        isOpenModalEdit, setIsOpenModalEdit,
        postEdit, setPostEdit,
        notifi, setNotifi,
    }
    return (
        <StatusContext.Provider value={data} >
            {children}
        </StatusContext.Provider>
    )
}
export default StatusContextProvider;