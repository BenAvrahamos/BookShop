

export function AppHeader({setPage}){

    function onSetPage(ev, page) {
		ev.preventDefault()
		setPage(page)
	}
    return <header className ="flex justify-between">
        <h1>The BookShop</h1>
        
        <nav >
            <a href=""onClick={(ev => onSetPage(ev,'home'))} >Home</a> |
            <a href=""onClick={(ev => onSetPage(ev,'about'))} >About</a>|
            <a href=""onClick={(ev => onSetPage(ev,'books'))} >Browse Books</a>
        </nav>

    </header>

}