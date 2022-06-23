import Head from "next/head";

import { MaterialUILayout } from "./MaterialUILayout";
import { Navbar, SideMenu } from "../ui";
import { Footer } from "../Landing";
import { useCategories } from "../../Hooks";

export const ShopLayout = ({
  children,
  title = "El fogón de COZ",
  pageDescription,
  imageFullUrl = null,
}) => {
  const { categories } = useCategories();
  return (
    <MaterialUILayout>
      <Head>
        <title>{title.replace(/^\w/, (c) => c.toUpperCase())}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="og:title"
          content={title.replace(/^\w/, (c) => c.toUpperCase())}
        />
        <meta name="og:description" content={pageDescription} />
        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
      </Head>
      <nav>
        <Navbar categories={categories || []} />
      </nav>
      <SideMenu categories={categories || []} />
      <main
        style={{
          margin: "60px auto auto 0",
          maxWidth: "1440px",
          padding: "20px 30px 30px 30px",
          minHeight: "400px",
          background: "#111111",
        }}
      >
        {children}
      </main>
      <Footer />
    </MaterialUILayout>
  );
};
