import Head from "next/head";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

export const MainLayout = ({title = "Fogón de COZ", desc ="", children}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={desc} />
        {/* <link rel="shortcut icon" href="favicon.ico"/> */}
      </Head>
      <Navbar />
      <main className="main_layout">
          {children}
      </main>
      <Footer />
    </>
  );
};
