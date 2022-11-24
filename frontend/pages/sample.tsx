import styles from '../styles/Home.module.css'
import { useAuth } from '../src/hooks/useAuth'

export default function Sample() {

    const { user } = useAuth()

    console.log(user)

    if (user) {
        return (
            <div>
                There is a user
            </div>
        )
    } else {
        return (<div>Sample page</div>)
    }

}
