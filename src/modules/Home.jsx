import React, { Component, Fragment } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Section from './Section'
import Footer from './Footer'

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <Header />
                <Section />
                <Footer />
            </Fragment>

        )
    }
}
