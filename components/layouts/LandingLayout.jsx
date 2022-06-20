import Head from "next/head";
import { Footer, Navbar } from "../Landing";
import { MaterialUILayout } from "./MaterialUILayout";

export const LandingLayout = ({
  title = "Fogón de COZ",
  desc = "",
  children,
}) => {
  return (
    <MaterialUILayout>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={desc} />
      </Head>
      <Navbar />
      <main className="main_layout">{children}</main>
      <Footer />
    </MaterialUILayout>
  );
};
