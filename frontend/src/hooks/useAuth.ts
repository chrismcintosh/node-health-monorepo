import axios from '../lib/axios'
import { useQuery } from '@tanstack/react-query'
import { useCookies } from "react-cookie"

export const useAuth = () => {

    const [cookie, setCookie, removeCookie] = useCookies(["token"])

    interface Credentials {
        email: string;
        password: string;
    }

    const login = async ({email, password}: Credentials) => {
        const res = await axios.post('/login', {email, password})
        const token = res.data.token

        setCookie("token", JSON.stringify(token), {
            path: "/",
            maxAge: 3600 * 24, // Expires after 1hr
            sameSite: true,
        })

        return token
    }

    const { data: user, isLoading, isError, error } = useQuery({ 
        queryKey: ['user', cookie.token], 
        queryFn: () => fetchUser()
    })

    const fetchUser = async () =>  {
        if (!cookie || !cookie.token) {
            return null
        }

        const req = await axios.get('/user', {
            headers: { Authorization: `Bearer ${cookie.token}` }
        })
        
        return req.data
    }

    const logout = async() => {
        removeCookie("token")
    }
    
    return {
        user,
        login,
        logout
    }
}