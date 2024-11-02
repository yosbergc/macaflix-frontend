import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
function useUser() {
    const [user, setUser] = useState(() => {
        const localStorageUser = window.localStorage.getItem('macaflix');
        return localStorageUser ? JSON.parse(localStorageUser) : null; 
    });

    useEffect(() => {
        if (user) {
            const localStorage = window.localStorage.getItem('macaflix')
            if (!localStorage) {
                window.localStorage.setItem('macaflix', JSON.stringify(user))
            }
        }
    }, [user])

    const navigate = useNavigate()

    function logoutUser() {
        window.localStorage.removeItem('macaflix')
        setUser(null)
        navigate('/')
    }
    function loginUser(nombre, token) {
        setUser({
            nombre,
            token
        })
    }
    return { user, loginUser, logoutUser }
}
export { useUser }