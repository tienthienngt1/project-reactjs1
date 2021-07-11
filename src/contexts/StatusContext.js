import { useState, createContext } from "react"

export const StatusContext = createContext()

const StatusContextProvider = ({children}) => {
    const [isOpenModal, setIsOpenModal] = useState(false)

    //data 
    const data = {
        isOpenModal, setIsOpenModal
    }
    return (
        <StatusContext.Provider value={data} >
            {children}
        </StatusContext.Provider>
    )
}
export default StatusContextProvider;