import { Link, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Articles from './Pages/Articles'
export default function App() {
    return (
        <div>
            <Link to='/login'>登录页</Link>
            <br />
            <Link to='/home'>首页</Link>
            <hr />
            <Route path='/login'>
                <Login></Login>
            </Route>
            <Route path='/home'>
                <Home></Home>
            </Route>
            <Route path='/article/:id'>
                <Articles></Articles>
            </Route>
        </div>
    )
}
