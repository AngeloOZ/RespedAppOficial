import { MainLayout } from "../../components/layouts/MainLayout";
import { Menu } from "../../components/menu/Menu";

export default function MenuIndex({ categorias, productos }) {
  categorias = categorias.data;
  productos = productos.data;
  return (
    <MainLayout>
      <Menu categorias={categorias} productos={productos}></Menu>
    </MainLayout>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  try {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODIsInVzZXJuYW1lIjoicGVwaXRvMTIzIiwiaWF0IjoxNjUyNTcyNDI0fQ.bHPnj2SbTMRP-MZjDI1nXWKePD6EQJdTS1sOOwqXf3o"
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const res = await fetch("https://respedapp.onrender.com/api/categoria", requestOptions);
    const res1 = await fetch("https://respedapp.onrender.com/api/producto", requestOptions);
    const categorias = await res.json();
    const productos = await res1.json();

    // Pass data to the page via props
    return {
      props: {
        categorias,
        productos,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        categorias: null,
        productos: null,
      },
    };
  }
}
