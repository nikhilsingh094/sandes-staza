
import React from 'react'
import NavbarDash from '../../components/Dashboard/NavbarDash'
import Dashboard_Admin from '../../components/Dashboard/Dashboard_Admin'
import Footer from '../../components/Footer/Footer'

function Dashboard() {
    return (
        <div>
            <NavbarDash />
            <Dashboard_Admin />
            <Footer />
        </div>
    )
}

export default Dashboard