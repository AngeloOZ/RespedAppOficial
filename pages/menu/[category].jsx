import { LandingLayout } from "../../components/layouts/LandingLayout";
import { GridItemsMenu } from "../../components/menu/GridItemsMenu";
import { MenuCategorias } from "../../components/menu/MenuCategorias";

import { getCategories, getProducts } from "../../helpers/axios/requestMenu";


export default function MenuIndex({ categories, productos }) {
  return (
    <LandingLayout>
      <main className="container-fluid py-3 px-md-5">
        <MenuCategorias categorias={categories} />
        {/* <GridItemsMenu productos={productos} /> */}
      </main>
    </LandingLayout>
  );
}

export async function getServerSideProps() {
  try {
    const categories = await getCategories();
    const producst = await getProducts();

    return {
      props: {
        categories,
        productos: [],
      },
    };
  } catch (error) {
    if(error.response){
      console.error(error.response.data);
    }
    return {
      props: {},
    };
  }
}
