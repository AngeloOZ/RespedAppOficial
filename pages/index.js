import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { Header } from '../components/Header/Header'
import { Navbar } from '../components/Navbar/Navbar'
import { Reservation } from '../components/Reservation/Reservation'
import styles from '../styles/Home.module.css'

export default function Home({fecha}) {
    return (
        <>
            <Head>
                <title>El fogón de COZ</title>
            </Head>
            <Navbar />
            <Header/>
            <Reservation fecha={fecha}/>
        </>
    ) 
}

export async function getStaticProps(){
    let date = new Date();
    date = date.toISOString().split('T')[0];
    console.log(date);
    return {
        props:{
            fecha: date
        }
    }
}