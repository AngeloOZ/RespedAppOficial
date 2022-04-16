import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/Navbar/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>El fogón de COZ</title>
      </Head>
      <Navbar />
    </>
  )
}
