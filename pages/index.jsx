import Head from 'next/head'
import { Contacto } from '../components/Contacto/Contacto'
import { Footer } from '../components/Footer/Footer'
import { Galeria } from '../components/Galeria/Galeria'
import { Header } from '../components/Header/Header'
import { Navbar } from '../components/Navbar/Navbar'
import { Nosotros } from '../components/Nosotros/Nosotros'
import { Reservation } from '../components/Reservation/Reservation'

export default function Home() {
    return (
        <>
            <Head>
                <title>El fogón de COZ</title>
            </Head>
            <Navbar />
            <Header />
            <Reservation />
            <Galeria />
            <Nosotros />
            <Contacto />
            <Footer />
        </>
    )
}
