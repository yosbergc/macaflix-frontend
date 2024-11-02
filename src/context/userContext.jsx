import { createContext, useEffect } from "react";
import { useUser } from '../hooks/useUser'
const userContext = createContext()

function ProvideUser({ children }) {
    const { user, loginUser, logoutUser } = useUser()

    return <userContext.Provider value={{
        user,
        loginUser,
        logoutUser
    }}>
        { children }
    </userContext.Provider>
}

export { userContext, ProvideUser }