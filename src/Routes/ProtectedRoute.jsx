import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({ Component }) => {
    const navigate = useNavigate()
    const [token, setToken] = useState("")
    const [isNavigated, setIsNavigated] = useState(false)

    useEffect(() => {
        const item = localStorage.getItem("token")
        setToken(item)
        if (!item && !isNavigated) {
            navigate("/")
            setIsNavigated(true)
        }
    }, [navigate, isNavigated])

    if (!token) {
        return null
    } else {
        return <Component />
    }
}

export default ProtectedRoute
