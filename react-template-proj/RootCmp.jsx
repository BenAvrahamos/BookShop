const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { Home } from './pages/Home.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import { About } from './cmps/About.jsx'
import { BookIndex } from './cmps/BookIndex.jsx'
import { BookDetails } from './cmps/BookDetails.jsx'


const { useState, useEffect } = React

export function App() {

    return <Router>
        <section className="app">
            <header className="app-header">
                <AppHeader />
            </header>
            <main className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/books" element={<BookIndex />} />
                    <Route path="/book/:bookId" element={<BookDetails />} />

                </Routes>
                {/* {page === 'home' && <Home />}
            {page === 'about' && <About />}
            {page === 'books' && <BookIndex />} */}
            </main>
        </section>
    </Router>
}