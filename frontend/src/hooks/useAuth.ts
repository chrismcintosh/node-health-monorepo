import axios from '../lib/axios'
import { useQuery } from '@tanstack/react-query'

export const useAuth = () => {

    interface Credentials {
        email: string;
        password: string;
    }

    // TODO: might need useEffect here

    const login = async ({email, password}: Credentials) => {
        console.log("Login is running")
        const res = await axios.post('/login', {email, password})
        console.log(res)
    }

    const user = useQuery({ queryKey: ['user'], queryFn: login })
    
    return {
        user,
        login,
    }
}