const { Link, NavLink } = ReactRouterDOM
const { useNavigate } = ReactRouter

export function AppHeader() {

    const navigate = useNavigate()

    function onGoHome() {
        navigate('/')
    }

    return <header className="flex justify-between">
        <h1 onClick={onGoHome}>The BookShop</h1>

        <nav >

            <NavLink to="/">Home</NavLink>
            |
            <NavLink to="/about">about</NavLink>
            |
            <NavLink to="/Books">Books</NavLink>

        </nav>

    </header >

}