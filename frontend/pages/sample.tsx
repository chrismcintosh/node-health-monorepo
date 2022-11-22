import styles from '../styles/Home.module.css'
import { useAuth } from '../src/hooks/useAuth'

export default function Sample() {

    const { user } = useAuth()

    if (user && user.id) {
        return (
            <div>
                There is a user
                {user.id}
            </div>
        )
    } else {
        return (<div>Sample page</div>)
    }

}
