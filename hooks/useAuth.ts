"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const useAuth = () => {
    const router = useRouter()
    const [token, setToken] = useState(() => localStorage.getItem('token'))

    useEffect (() => {
        const token = localStorage.getItem('token')

        if (!token) {
            router.replace('/')
        }
    }, [token])

    return { isAuthenticated: !!localStorage.getItem('token') }
}

export default useAuth;