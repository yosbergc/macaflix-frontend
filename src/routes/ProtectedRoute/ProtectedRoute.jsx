import { userContext } from "../../context/userContext"
import { useContext } from "react"
import { Navigate } from "react-router-dom"
function ProtectedRoute({ children }) {
    const { user } = useContext(userContext)

    if (!user) {
        return <Navigate to='/login' />
    } else {
        return children;
    }
}
export { ProtectedRoute }