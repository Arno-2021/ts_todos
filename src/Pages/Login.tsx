
import { useHistory } from 'react-router-dom'
import { HistoryState } from '../types'

export default function Login() {
    const history = useHistory<HistoryState>()
    const LoginTo = () => {
        history.push('/home', {
            demo: 'lets demo it',
        })
    }
    return (
        <div>
            <button onClick={LoginTo}>登录</button>
        </div>
    )
}
