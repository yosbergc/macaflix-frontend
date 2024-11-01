import { useState } from "react"
function useUser() {
    const [user, setUser] = useState(null)

    return { user }
}
export { useUser }