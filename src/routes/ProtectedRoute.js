
import React, { useState, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import jwt_decode from 'jwt-decode'

export const ProtectedRoute = ({ childreen, redirectPath = '/login' }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(null)
    const user = JSON.parse(localStorage.getItem("currentUser"))
    const token = user?.token

    useEffect(() => {
        if (token) {
            let tokenExpiration = jwt_decode(token).exp;
            let dateNow = new Date()
            if (tokenExpiration < dateNow.getTime() / 1000) {
                setIsAuthenticated(false)
            } else {
                setIsAuthenticated(true)
            }
        } else {
            setIsAuthenticated(false)
        }

    }, [token])

    if (!token) {
        return <Navigate to={redirectPath} replace />
    }


    return childreen ? childreen : <Outlet />
}
