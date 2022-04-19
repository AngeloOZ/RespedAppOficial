import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { Galeria } from '../components/Galeria/Galeria'
import { Header } from '../components/Header/Header'
import { Navbar } from '../components/Navbar/Navbar'
import { Reservation } from '../components/Reservation/Reservation'

export default function Home({fecha}) {
    return (
        <>
            <Head>
                <title>El fogón de COZ</title>
            </Head>
            <Navbar />
            <Header/>
            <Reservation fecha={fecha}/>
            <Galeria />
        </>
    ) 
}

export async function getStaticProps(){
    let date = new Date();
    date = date.toISOString().split('T')[0];
    return {
        props:{
            fecha: date
        }
    }
}