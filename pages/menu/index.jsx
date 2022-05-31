import { LandingLayout } from "../../components/layouts/LandingLayout";
import { GridItemsMenu } from "../../components/menu/GridItemsMenu";
import { MenuCategorias } from "../../components/menu/MenuCategorias";

import { getCategories, getProducts } from "../../helpers/axios/requestMenu";


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
    const categories = await getCategories();
    const products = await getProducts();

    return {
      props: {
        categories,
        products,
      },
    };
  } catch (error) {
    if(error.response){
      console.error(error.response.data);
    }else{
      console.error(error)
    }
    return {
      redirect:{
        destination: '/',
        permanent: false
      }
    };
  }
}
