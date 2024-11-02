import { userContext } from "../../context/userContext"
import { useContext } from "react"
import { Navigate } from "react-router-dom"
function PublicRoute({ children }) {
    const { user } = useContext(userContext)

    if (user) {
        return <Navigate to='/dashboard' />
    } else {
        return children;
    }
}
export { PublicRoute }