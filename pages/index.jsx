import Head from "next/head";
import { MainLayout } from "../components/layouts/MainLayout";
import { Header } from "../components/Landing/Header/Header";
import { Reservation } from "../components/Landing/Reservation/Reservation";
import { Galeria } from "../components/Landing/Galeria/Galeria";
import { Nosotros } from "../components/Landing/Nosotros/Nosotros";
import { Contacto } from "../components/Landing/Contacto/Contacto";

export default function Home() {
  return (
    <MainLayout>
      <Header />
      <Reservation />
      <Galeria />
      <Nosotros />
      <Contacto />
    </MainLayout>
  );
}
