import { Home } from './pages/Home.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import { About } from './cmps/About.jsx'
import { BookIndex } from './cmps/BookIndex.jsx'


const { useState, useEffect } = React

export function App() {
    const [page, setPage] = useState('home')

    return <section className="app">
        <header className="app-header">
            <AppHeader setPage={setPage} />
        </header>
        <main className="container">
            {page === 'home' && <Home />}
            {page === 'about' && <About />}
            {page === 'books' && <BookIndex />}
        </main>
    </section>
}