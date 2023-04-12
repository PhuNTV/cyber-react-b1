import React, { Component, Fragment } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Section from './Section'
import Footer from './Footer'

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Navbar />
                </nav>
                <header className="py-5">
                    <Header />
                </header>
                <section className="pt-4">
                    <Section />
                </section>
                <footer className="py-5 bg-dark">
                    <Footer />
                </footer>

            </Fragment>

        )
    }
}
