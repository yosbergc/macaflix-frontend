import { createContext } from "react";
import { useUser } from '../hooks/useUser'
const userContext = createContext()

function ProvideUser({ children }) {
    const { user } = useUser()
    
    return <userContext.Provider value={{
        user
    }}>
        { children }
    </userContext.Provider>
}

export { userContext, ProvideUser }