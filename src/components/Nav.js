import { selectToken } from '../features/userToken'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'


import { removeToken } from '../features/userToken'

function Nav() {
    const isUserLoggedIn = useSelector(selectToken) != '' ? true : false

    const dispatch = useDispatch()
    function logoutUser() {
        dispatch(removeToken())
    }

    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="/">
                <img
                    className="main-nav-logo-image"
                    src="/images/argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
                {isUserLoggedIn ?
                    <a className="main-nav-item" onClick={logoutUser}>
                        <i className="fa fa-user-circle"></i>
                        Log Out
                    </a>
                    :
                    <a className="main-nav-item" href="/login">
                        <i className="fa fa-user-circle"></i>
                        SignIn
                    </a>
                }

            </div>
        </nav>
    )
}
export default Nav;