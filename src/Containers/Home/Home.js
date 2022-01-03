import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Feature from '../../Components/Feature/Feature'
import Prestations from '../../Components/Prestations/Prestations'
import Form from '../../Components/Form/Form'
import Plan from '../../Components/Plan/Plan'
import Footer from '../../Components/Footer/Footer'

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Header />
                <Feature />
                <Prestations />
                <Form />
                <Plan />
                <Footer />
            </main>
        </>
    )
}
