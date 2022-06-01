import { obtenerCategorias } from "../../backend/controllers/categoriasController";
import { obtenerProductos } from "../../backend/controllers/productsController";
import { LandingLayout } from "../../components/layouts/LandingLayout";
import { GridItemsMenu } from "../../components/menu/GridItemsMenu";
import { MenuCategorias } from "../../components/menu/MenuCategorias";

export default function MenuIndex({ categories, products }) {
  return (
    <LandingLayout>
      <main className="container-fluid py-3 px-md-5">
        <MenuCategorias categorias={categories} />
        <GridItemsMenu productos={products} />
      </main>
    </LandingLayout>
  );
}

export async function getServerSideProps() {
  try {
    const categories = await obtenerCategorias();
    const products = await obtenerProductos();

    return {
      props: {
        categories,
        products,
      },
    };
  } catch (error) {
    if (error.response) {
      console.error(error.response.data);
    } else {
      console.error(error);
    }
    return {
      props: {
        categories:[],
        products:[],
      },
      // redirect:{
      //   destination: '/',
      //   permanent: false
      // }
    };
  }
}
