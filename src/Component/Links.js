import { Link } from "react-router-dom"
import RouterLink from '../RoutesLink'

export const Links = () => {
    return (
        <>
            <Link to={RouterLink.login}>Login</Link>
            <br />
            <Link to={RouterLink.dashboard}>DashBoard</Link>
            <br />
            <Link to={RouterLink.profile} >Profile</Link>
            <br />
            <Link to={RouterLink.account}>Account</Link>

        </>
    )
}