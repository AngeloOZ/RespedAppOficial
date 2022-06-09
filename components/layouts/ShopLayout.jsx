import Head from "next/head";

import { MaterialUILayout } from "./MaterialUILayout";
import { Navbar, SideMenu } from "../ui";
import { Footer } from "../Landing";

export const ShopLayout = ({
  children,
  title,
  pageDescription,
  imageFullUrl = null,
  categories,
}) => {
  return (
    <MaterialUILayout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
      </Head>
      <nav>
        <Navbar categories={categories}/>
      </nav>
      <SideMenu categories={categories}/>
      <main
        style={{
          margin: "60px auto auto 0",
          maxWidth: "1440px",
          padding: "20px 30px 30px 30px",
          minHeight: "400px",
          background: "#111111"
        }}
      >
        {children}
      </main>
      <Footer />
    </MaterialUILayout>
  );
};
