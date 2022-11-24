import { useState } from "react"
import { useAuth } from '../hooks/useAuth'

export default function LoginForm () {

    const { user, login, logout } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    if (user) {
        return (
            <button onClick={() => logout()}>Logout</button>
        )
    } else {
        return(
            <form onSubmit={(e) => {
                e.preventDefault()
                login({email, password})
            }}>
                <input name="email" type="email" placeholder="email" onInput={(e) => setEmail(e.target.value)} />
                <input name="password" type="password" placeholder="password" onInput={(e) => setPassword(e.target.value)} />
                <input type="submit" />
            </form>
        )
    }

}