import { useState, createContext } from "react"

export const StatusContext = createContext()

const StatusContextProvider = ({children}) => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [isOpenModalEdit, setIsOpenModalEdit] = useState(false)
    const [postEdit, setPostEdit] = useState('')
    console.log('statusContext');
    //data 
    const data = {
        isOpenModal, setIsOpenModal,
        isOpenModalEdit, setIsOpenModalEdit,
        postEdit, setPostEdit,
    }
    return (
        <StatusContext.Provider value={data} >
            {children}
        </StatusContext.Provider>
    )
}
export default StatusContextProvider;